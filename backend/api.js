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
        const id = req.params.id;
        try {
            const post = await Posts.findById(id)
            res.status(200).json(post);
        }   catch(err) {
            res.status(404).json({message: err.message})
        }
    }

    static async createPost(req,res) {
        const post = req.body;
        
        try {
            await Posts.create(post);
            res.status(201).json({message:'Post created!'});
        } catch (err) {
            res.status(404).json({message:err.message});
        }
    }

    
}