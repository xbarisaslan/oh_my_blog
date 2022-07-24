<template>
 <div class="about">
    <div class="text">
    <h1>About ohMyBlog</h1>
    <p> This is a graduation project I made for <a href="https://www.coyotiv.com/school-of-software-engineering/">Coyotiv School of Software Engineering.</a>
        The project's motive was to write blog posts of my own about the books I read,series/movies I've watched and music theory. 
        Then I decided to make it so that anyone who uses the website can write and publish their own posts.
        There is no login/registration system but there is an author input in which the author would enter their nicknames. 
        I used MongoDB for the database and Node.js for the backend.  
    </p>
    </div>
</div>
</template>

<script>
export default {
    name:'AboutPage',
}
</script>

<style scoped>
.about {
  display: flex;
  padding-left: 1rem;
}

h1 {
    padding-top: 1.2rem;
}

p {
    padding-top: .5rem;
    padding-right: 1.5rem;
    line-height: 2.8rem;
    font-size: 1.3rem;
    text-align: justify;
}
</style>
