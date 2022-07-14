<template>
<Header />
<Posts />
</template>

<script>
import Header from '../components/Header.vue'
import Posts from '../components/Posts.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Posts,
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