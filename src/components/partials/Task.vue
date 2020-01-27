<template>
  <div>
    <div class="todo-item cursor-pointer unselectable d-flex space-between align-center">
      <div class="checkbox">
        <input type="checkbox" class="checkbox-input" :id="task.id" :checked="task.done" 
          :disabled="task.done" @click="changeStatus">
        <label :for="task.id" class="checkbox-label" :class="task.done ? 'done': ''"> 
          {{ task.name }}
        </label>
      </div>
      <div v-if="!task.done">
        <i class="material-icons show-more">
          more_vert
        </i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Task',
    props: {
      task: Object
    },
    methods: {
      changeStatus() {
        this.task.done = true;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/task';  
</style>
