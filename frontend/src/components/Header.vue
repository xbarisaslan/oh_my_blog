<template>
<div class="header">
  <img class="logo" src="../assets/ohMyBlog-logos_white.png"/>
  <div class="top-right">
    <router-link style="text-decoration: none" to="/"><div class="header-btn">Home</div></router-link>
    <router-link style="text-decoration: none" to="/about"><div class="header-btn">About</div></router-link>
  </div>    
    <h1 class="welcome">Welcome to ohMyBlog!</h1>
    <router-link style="text-decoration: none" to="/create"><button class="create">Create Post</button></router-link>
  </div>
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
}

.top-right{
  display: flex;
  justify-content:center;
  align-items: center;
  margin-left: 60rem;
  padding: 2rem 1rem;
}
.header-btn {
  padding: 0 1.5rem;
  font-size:1.6rem;
  color:rgba(255, 177, 0, .9);
  transition: color 100ms;
}

.header-btn:hover {
  color: rgba(255, 195, 0, 1);
}

.logo {
  width:14rem;
  padding-top:1.2rem;
}

.welcome {
  color:rgba(255, 177, 0, .9);
  position:absolute;
  top:20rem;
  left:2rem;
  font-size:4rem;
  cursor:default;
  margin-top:2rem;
}

.create {
  position: absolute;
  top:27.5rem;
  left:3.2rem;
  border:none;
  border-radius: 100px;
  width:10rem;
  padding: .5rem;
  margin:0;
  color:white;
  background-color:	#de5e02;
  font-size:1.5rem;
  cursor: pointer;
  transition: background-color 250ms;
}

.create:hover {
  background-color:rgba(255, 92, 0, 1)
}
</style>