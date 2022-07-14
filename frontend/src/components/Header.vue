<template>
<div class="header">
  <img class="logo" src="../assets/ohMyBlog-logos_black.png"/>
  <div class="top-right">
    <router-link style="text-decoration: none" to="/"><div class="header-btn">Home</div></router-link>
    <router-link style="text-decoration: none" to="/about"><div class="header-btn">About</div></router-link>
  </div>    
  </div>
    <h1 class="welcome">Welcome to ohMyBlog!</h1>
    <button class="create">Create Post</button>

</template>

<script>
export default {
    name:'Header',
}

</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  background-image: url(../assets/photo-1522199755839-a2bacb67c546.avif);
  background-size: 100%;
  background-repeat: no-repeat;
  height:48rem;
  margin-bottom: 8rem;
}

.top-right{
  display: flex;
  padding: 2rem 3rem;
  
}
.header-btn {
  padding: 0 1.5rem;
  font-size:1.6rem;
  color:rgba(241, 203, 71, 0.8);
}

.logo {
  width:14rem;
  padding-top:.8rem;
}

.welcome {
  color:rgba(255, 177, 0, .9);
  position:absolute;
  top:20rem;
  left:2rem;
  font-size:4rem;
}

.create {
  position:absolute;
  top:26rem;
  left:3rem;
  border:none;
  border-radius: 100px;
  width:11rem;
  padding:.5rem;
  color:white;
  background-color:	#de5e02;
  font-size:1.5rem;
}
</style>