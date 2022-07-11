<template>
  <div class="post-card" v-for="post in posts">
    
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