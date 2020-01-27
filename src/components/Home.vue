<template>
  <div>
    <Navbar/>
    <div class="container" 
      :style="{ backgroundImage: 'url(' + require('@/assets/todo.svg') + ')'}">
      <div class="d-flex">
        <div class="d-flex flex-column">
          <h1 class="heading-primary">
            Manage your to do list
          </h1>
          <span class="heading-secondary">
            Click on checkbox or drag and drop to done
          </span>
        </div>
      </div>
      <div class="d-flex todo-box space-between">
        <TodoBox :done="false" :taskList="getToDoTaskList"/>
        <TodoBox :done="true"  :taskList="getDoneTaskList"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '../components/partials/Navbar';
  import TodoBox from '../components/partials/TodoBox';

  export default {
    name: 'Home',
     data() {
      return {
        taskList: [
          {
            id: 1,
            name: 'Profile login',
            done: false
          },
          {
            id: 2,
            name: 'Create to do list',
            done: false
          },
          {
            id: 3,
            name: 'Design better logo',
            done: false
          },
          {
            id: 4,
            name: 'Design better view',
            done: true
          },
          {
            id: 5,
            name: 'Design better page',
            done: true
          }
        ]
      }
    },
    components: {
      Navbar,
      TodoBox
    },
    computed: {
      getToDoTaskList() {
        return this.taskList.filter(task => !task.done);
      },
      getDoneTaskList() {
        return this.taskList.filter(task => task.done);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/home';  
</style>
