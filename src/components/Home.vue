<template>
  <div>
    <Navbar/>
    <div class="container"
      :style="{ backgroundImage: 'url(' + require('@/assets/home/todo-bg.svg') + ')'}">
      <div class="d-flex heading">
        <div class="d-flex flex-column">
          <h1 class="heading-primary">
            Manage your to do list
          </h1>
          <span class="heading-secondary">
            Click on checkbox or drag and drop to done
          </span>
        </div>
      </div>
      <div class="d-flex todo-box space-between flex-wrap">
        <TodoBox :status="0"  :taskList="getToDoTaskList"/>
        <TodoBox :status="1"  :taskList="getDoneTaskList"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '../components/partials/Navbar'
  import TodoBox from '../components/partials/TodoBox'

  export default {
    name: 'Home',
    mounted() {
      this.updateTaskList();
    },
    methods: {
      updateTaskList() {
        this.$db.task.toArray().then(tasks =>
          this.$store.state.taskList = tasks
        );
      }
    },
    components: {
      Navbar,
      TodoBox
    },
    computed: {
      getToDoTaskList() {
        return this.$store.state.taskList.filter(task => !task.status);
      },
      getDoneTaskList() {
        return this.$store.state.taskList.filter(task => task.status);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/home';
</style>
