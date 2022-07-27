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
    }
}

</script>

<style scoped>

</style>