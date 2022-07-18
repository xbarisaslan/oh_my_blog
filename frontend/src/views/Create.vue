<template>
    <NavBar />
<div class="create">
<form action="/submit" method="POST">
    <label for="Title"></label> <input type="text" name="title" placeholder="Title" required> 
    <label for="Content"></label> <textarea placeholder="Content" required></textarea>
    <label for="Author"></label> <input type=text name="author" placeholder="Author">
    <button class=submit type="submit">Create Post</button> 
</form>
</div>
</template>

<script>
import API from '../api'
import NavBar from '../components/NavBar.vue'

export default {
    name: 'Create',
    components: {
        NavBar,
    }
}
</script>

<style>
input {
    display: flex;
    justify-content: center;
    align-items: center;
    border:none;
    outline:none;
    border-bottom: 1px solid rgba(128,128,128,.3);
    width:40rem;
    padding:.4rem 0;
}

textarea {
    text-align: start;
    padding:1rem 0 5rem 0;
    outline: none;
    width:40rem;
    border:none;
    resize:none;
    border-bottom: 1px solid rgba(128,128,128,.3);
}

.create {
    display: flex;
    justify-content: center;
    align-items: center;
    padding:2rem 1rem 2rem 1rem;
    border:1px solid rgba(128,128,128,.5);
    width:40rem;
    margin: 5rem 25rem;
}

.submit {
    border:none;
    border-radius: 10rem;
    background-color: rgba(255, 177, 0, .9);
    padding:.8rem;
    margin-top:3rem;
}

</style>
