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