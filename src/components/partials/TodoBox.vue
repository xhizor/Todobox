<template>
  <div class="box has-border-radius">
    <div class="box-header d-flex space-between">
      <span class="box-header-title">
        {{ !status ? 'To do': 'Done' }}
      </span>
      <a class="cursor-pointer"
         @click="handleTaskAction"
         :title="!status ? 'Add a task': 'Delete all done tasks'">
        <i class="material-icons box-header-icon unselectable">
          {{ !status ? 'add_box': 'delete_sweep' }}
        </i>
      </a>
    </div>
    <draggable
      v-model="tasks"
      @change="onTaskDrop"
      group="tasks">
      <Task
        v-for="task in tasks"
        :task="task"
        :key="task.id"/>
      </draggable>
  </div>
</template>

<script>
  import Task from '../partials/Task';
  import draggable from 'vuedraggable'

  export default {
    name: 'TodoBox',
    props: {
      status: Number,
      taskList: Array,
    },
    data() {
      return {
        tasks: this.taskList
      }
    },
    watch: {
      taskList() {
        this.tasks = this.taskList;
      }
    },
    components: {
      Task,
      draggable
    },
    methods: {
      updateTaskList() {
        this.$db.task.toArray().then(tasks =>
          this.$store.state.taskList = tasks
        );
      },
      handleTaskAction() {
        if (!this.status) {
          const isEmptyTaskExist = this.$store.state.taskList.filter(
            task => !task.id
          );
          if (!isEmptyTaskExist.length) {
            this.initTask();
          }
          return;
        }

        if (this.tasks.length) {
          this.removeDoneTasks();
        }
      },
      initTask() {
        this.$store.state.taskList.push({
          id: 0,
          name: '',
          isEditable: true
        });
      },
      removeDoneTasks() {
        this.$db.task.where('status').equals(1).delete().then(() =>
          this.updateTaskList()
        ).catch(alert);
      },
      onTaskDrop(event) {
        if (event.added) {
          const { id, status } = event.added.element;
          this.$db.task.update(id, {
            status: status === 0 ? 1: 0
          }).then(() => {
            this.updateTaskList();
          });
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/todo-box';
</style>
