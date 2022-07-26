<template>
<div class="posts">
  <div class="blog-post" v-for="post in posts" :key="post._id">
    <h3>{{post.title}}</h3>
    <p class="content">{{post.content.substring(0,100)}}...</p>
    <router-link style="text-decoration:none;" :to="'/post/' + post._id"><h4>Read more</h4></router-link>
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
  },
 
}
</script>

<style scoped>
h3,p {
  padding:1rem;
  line-height: 1.5rem;
}

h4 {
  color:rgba(246, 155, 107, 1);
  text-align: end;
  padding-right: 1rem;
}
.content {
  height:2rem;
}
.posts{
  display: grid;
  grid-template-columns: repeat(auto-fill , minmax(500px,1fr));
  gap:4rem 2rem;
  padding: 2rem;
  background-color: rgba(215, 215, 210, .7)
}

.blog-post {
  background-color: rgba(238, 238, 238, .75);
  border: 1px solid rgba(248, 248, 248, 1);
  border-radius: 10px;
  padding-left: 1rem;
  word-wrap: break-word;
}

</style>