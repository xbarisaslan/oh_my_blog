<template>
  <div class="post-card">
    <h1>This is a post card </h1>
    <p> This is a post card  This is a post card. This is a post cardThis is a post cardThis is a post card</p>
  </div>
</template>

<script>
import API from '../api'

export default {
  name: 'Home',
  data() {
    return {
      posts: []
    }
  },
   async created() {
    this.posts = await API.getAllPosts()
  }
}
</script>
<style scoped>
.post-card {
  border: 5px solid red;
}
</style>