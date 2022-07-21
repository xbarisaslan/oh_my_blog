<template>
  <NavBar />
  <AboutPage />
</template>

<script>
import NavBar from '../components/NavBar'
import AboutPage from '../components/AboutPage.vue'

export default {
  name: 'About',
  components: {
    NavBar,
    AboutPage,
  }
}
</script>

