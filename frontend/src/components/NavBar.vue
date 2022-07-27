<template>
<div class="navbar">
    <router-link to="/"><img class="logo" src="../assets/ohMyBlog-logos_white.png"/></router-link>
    <div class="top-right">
    <router-link style="text-decoration: none" to="/"><div class="header-btn">Home</div></router-link>
    <router-link style="text-decoration: none" to="/about"><div class="header-btn">About</div></router-link>
    </div>
</div>    
</template>

<script>
export default {
    name:"NavBar",
}

</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, .9);
}
.header-btn {
    padding: .35rem 1.5rem 0 1.5rem;
    font-size:1.6rem;
    color:rgba(255, 177, 0, .9);
    transition: color 100ms;
}

.header-btn:hover {
    color:rgba(255, 195, 0, 1);
}

.logo {
    width:14rem;
    padding-top:.6rem;
    padding-left: 1.2rem;
}

.top-right{
    display: flex;
    padding: 2rem 3rem;
}
</style>