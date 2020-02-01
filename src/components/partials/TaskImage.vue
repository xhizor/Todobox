<template>
  <div v-if="imgUrl"
    class="task-image-container position-relative unselectable">
      <i
        class="material-icons cursor-pointer add"
        @click="addTaskImage"
        title="Add image">
        save
      </i>
      <i
        class="material-icons cursor-pointer remove"
        @click="removeTaskImage"
        title="Remove image">
        clear
      </i>
    <img
      :src="imgUrl"
      class="task-image"
      draggable="false">
  </div>
</template>

<script>
  export default {
    name: 'TaskImage',
    props: {
      task: Object,
      imageUrl: String
    },
    data() {
      return {
        imgUrl: this.imageUrl
      }
    },
    watch: {
      imageUrl() {
        this.imgUrl = this.imageUrl
      }
    },
    methods: {
      addTaskImage() {
        this.$db.task.update(this.task.id, {
          image: this.imgUrl
        });
      },
      removeTaskImage() {
        if (confirm('Are you sure you want to delete image?')) {
          if (this.imgUrl === this.task.image) {
            this.$db.task.update(this.task.id, { image: null });
            this.imgUrl = '';
          }
          else {
            this.imgUrl = this.task.image;
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/task-image';
</style>
