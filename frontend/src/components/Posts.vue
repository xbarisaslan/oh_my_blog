<template>
<div class="posts">
  <div class="blog-post" v-for="post in posts" :key="post._id" >
    <h3>{{post.title}}</h3>
    <p>{{post.content}}</p>
    <p style="font-weight:bold;">Author: {{post.author}}</p>
  </div>
</div>

</template>

<script>
import API from '../api'
export default {
  name: 'Posts',
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
h3,p {
  padding:1rem;
  line-height: .5rem;
}
.posts{
  display: grid;
  grid-template-columns: repeat(auto-fill , minmax(500px,1fr));
  gap:4rem 2rem;
  padding: 2rem;
}

.blog-post {
  background-color: rgba(248, 248, 248, .75);
  border: 1px solid rgba(248, 248, 248, 1);
  border-radius: 10px;
  padding-left: 1rem;
}
</style>