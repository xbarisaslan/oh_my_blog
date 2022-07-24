<template>
    <NavBar />
<div class="create">
  <form @submit.prevent="submitPost" method="POST">
    <input v-model="posts.title" placeholder="Title" required> 
    <textarea v-model="posts.content" placeholder="Content" minlength="100" required></textarea>
    <input v-model="posts.author" placeholder="Author">
    <button type="submit" class="submit">Create Post </button> 
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
    },
    data() {
        return {
            posts: {
                title: '',
                content: '',
                author: '',
            }
        }
    },
    methods: {
        async submitPost() {
        let postData = {title:this.posts.title , content:this.posts.content , author:this.posts.author}
        this.posts = await API.addPost(postData);
        this.$router.push('/')
    },
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
    padding:1rem 0 6rem 0;
    outline: none;
    width:40rem;
    height: 5rem;
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
    padding:.7rem;
    margin-top:2rem;
    cursor:pointer;
    width: 100%;
}

</style>
