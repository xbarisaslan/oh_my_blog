<template>
<NavBar />
<div class="blog-post">
    <h3>{{post.title}}</h3>
    <p>{{post.content}}</p>
    <p style="font-weight:bold;">Author: {{post.author}}</p>
</div>
</template>

<script>
import API from '../api'
import NavBar from '../components/NavBar'

export default {
    name: 'Post',
    components: {
        NavBar,
    },
    data() {
    return {
      post: {}
    }
  },
    async created() {
    let postId = await API.getPostById(this.$route.params.id);
    this.post = postId;
  }
}

</script>

<style scoped>
p {
    padding-top:1rem;
    line-height:1.7rem
}
.blog-post {
    padding:1rem 1rem .5rem 1rem;
    border:1px solid rgba(128,128,128,.3);
    width:40rem;
    margin: 5rem 25rem;
    word-wrap: break-word;
    text-align: justify;
}
</style>