<template>
  <div class="container">
    <TaskImage
      :task="task"
      :imageUrl="image.url || task.image"/>
    <div class="task-item cursor-pointer unselectable
      d-flex space-between align-center position-relative"
      :class="{ 'task-item-hover': !!!task.status }">
      <label
        class="checkbox"
        :class="{ done: !!task.status }">
        <input v-if="task.isEditable"
          type="text"
          class="input"
          ref="taskLabel"
          v-model="task.name"
          :placeholder="!task.name ? 'Enter a name for this task...': ''"
          @keydown.enter="handleTaskAction">
        <input
          type="checkbox"
          class="checkbox-input"
          :checked="!!task.status"
          :disabled="!!task.status || !task.id"
          @click="moveTaskToDone">
        <span class="checkbox-checkmark"></span>
        <span v-if="!task.isEditable"
          class="checkbox-label"
          title="Click here to edit task"
          @click="handleEditableInput">
            {{ task.name }}
        </span>
      </label>
      <a @click="toggleActionBox"
        :title="!task.isEditable ? 'Show actions': 'Save task'">
        <i
          class="material-icons show-actions"
          :class="{'icon-green': task.isEditable }">
          {{ !task.isEditable ? 'more_vert': 'done' }}
        </i>
        <div v-if="showActionBox && task.id && !task.isEditable"
          class="actions-box has-border-radius">
          <div class="actions-box-container">
            <div v-if="!!!task.status"
              class="action-wrapper d-flex align-center"
              title="Add image"
              @click="$refs.fileInput.click()">
              <i class="material-icons">
                image
              </i>
              <span>
                Image
              </span>
              <input
                type="file"
                ref="fileInput"
                class="d-none"
                accept="image/*"
                @change="onImageSelected">
            </div>
            <div class="action-wrapper d-flex align-center"
              title="Delete task"
              @click="deleteTask">
              <i class="material-icons">
                delete
              </i>
              <span>
                Delete
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import TaskImage from '../partials/TaskImage'
  import Vue from 'vue'

  export default {
    name: 'Task',
    props: {
      task: Object
    },
    components: {
      TaskImage
    },
    mounted() {
      if (this.$refs.taskLabel) {
        this.$refs.taskLabel.focus();
      }
    },
    data() {
      return {
        showActionBox: false,
        image: {
          file: null,
          url: null
        }
      }
    },
    methods: {
      handleEditableInput() {
        if (this.task.status) {
          return;
        }
        Vue.set(this.task, 'isEditable', true);
      },
      handleTaskAction() {
        if (!this.task.id && this.task.name) {
          this.addTask();
          return;
        }
        if (this.task.name) {
          this.updateTask();
        }
        if (this.$refs.taskLabel) {
          this.$refs.taskLabel.focus();
        }
      },
      addTask() {
        this.$db.task.add({
          name: this.task.name,
          status: 0,
          image: null
        }).then(() => {
          this.updateTaskList()
        }
        ).catch(alert);
      },
      updateTask() {
        this.$db.task.update(this.task.id, {
          name: this.task.name
        }).then(() =>
          this.updateTaskList()
        ).catch(alert);
      },
      updateTaskList() {
        this.$db.task.toArray().then(tasks =>
          this.$store.state.taskList = tasks
        );
      },
      toggleActionBox() {
        this.handleTaskAction();
        if (!this.task.isEditable) {
          this.showActionBox = !this.showActionBox;
        }
      },
      deleteTask() {
        this.$db.task.where('id').equals(this.task.id).delete().then(() =>
          this.updateTaskList()
        ).catch(alert);
      },
      moveTaskToDone() {
        this.$db.task.update(this.task.id, { status: 1 }).then(() =>
          this.updateTaskList()
        ).catch(alert);
      },
      onImageSelected() {
        this.image.file = event.target.files[0];
        this.showActionBox = false;
        const reader = new FileReader();

        reader.addEventListener('load', event => {
          if (event.target.result) {
            this.image.url = event.target.result;
          }
        });
        reader.readAsDataURL(this.image.file);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/task';
</style>
