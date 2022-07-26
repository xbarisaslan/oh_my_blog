<template>
 <div class="about">
    <div class="text">
    <h1>About ohMyBlog</h1>
    <p> This is a graduation project I made for <a href="https://www.coyotiv.com/school-of-software-engineering/">Coyotiv School of Software Engineering.</a></p>
    <p> At first,the project's motive was to write blog posts of my own about music theory, the books I read,series/movies I've watched etc.
        Then I decided to make it so that anyone who uses the website can write and publish their own posts about any topic.
        There is no login/registration system but there is an author input in which the author can enter their nicknames.
        I used MongoDB,Express.js,Vue.js and Node.js. I also used Postman to test the REST APIs. </p>
    <p> You can view the source code from here: <a href="https://github.com/xbarisaslan/oh-my-blog">https://github.com/xbarisaslan/oh-my-blog</a></p>
   
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
  padding-left: 1.5rem;
}

h1 {
    padding-top: 1.2rem;
}

p {
    padding-top: .5rem;
    padding-right: 1.5rem;
    line-height: 2.5rem;
    font-size: 1.3rem;
    text-align:justify;
}

a {
    color:rgba(6, 133, 53, 1)
}
</style>
