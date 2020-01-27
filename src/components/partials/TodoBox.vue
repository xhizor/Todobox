<template>
  <div class="box has-border-radius">
    <div class="box-header d-flex space-between">
      <span class="box-header-title">
        {{ !done ? 'To do': 'Done' }}
      </span>
      <a class="cursor-pointer">
        <i class="material-icons box-header-icon unselectable">
          {{ !done ? 'add_box': 'delete_sweep' }}
        </i>
      </a>
    </div>
      <Task v-for="task in taskList" :task="task" :key="task.id"/>
  </div>
</template>

<script>
  import Task from '../partials/Task';

  export default {
    name: 'TodoBox',
    props: {
      done: Boolean,
      taskList: Array
    },
    components: {
      Task
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/todo-box';  
</style>
