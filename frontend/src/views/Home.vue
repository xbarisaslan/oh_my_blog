<template>
<Header />
  <div class="posts">
  <div class="blog-post" v-for="post in posts" :key="post._id" >
    <h3>{{post.title}}</h3>
    <p>{{post.content}}</p>
    <p>{{post.author}}</p>
  </div>
  </div>
</template>

<script>
import API from '../api'
import Header from '../components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header,
  },
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

.posts{
  display: grid;
  grid-template-columns: repeat(auto-fill , minmax(500px,1fr));
  gap:4rem 2rem;
  padding:3rem;
}
.blog-post {
  border: 2px solid red;
  background-color: rgba(245, 245, 245, 1);
}

</style>