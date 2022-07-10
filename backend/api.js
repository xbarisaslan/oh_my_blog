const mongoose = require('mongoose');
const Posts = require('./posts');

module.exports = class API {
    static async fetchAllPosts(req,res) {
        /*res.send('Hello, I am API!');*/
        try {
            const posts = await Posts.find()
            res.status(201).json(posts);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    static async fetchPostById(req,res) {
        res.send('Hello, I am API with ID!');
    }

    static async createPost(req,res) {
        const post = req.body;
        const image = req.filename;
        post.image = image
        try {
            await Posts.create(post);
            res.status(201);
        } catch (err) {
            res.status(404).json({message:err.message});
        }
    }

    
}