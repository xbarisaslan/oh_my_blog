const mongoose = require('mongoose');
const BlogPost = require('../posts');

module.exports = class API {
    static async fetchAllPosts(req,res) {
        try {
            const posts = await BlogPost.find();
            res.status(201).json(posts);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    static async fetchPostById(req,res) {
        const id = req.params.id;
        try {
            const post = await BlogPost.findById(id)
            res.status(200).json(post);
        } catch(err) {
            res.status(404).json({message: err.message})
        }
    }

    static async createPost(req,res) {
        const post = req.body;
        try {
            await BlogPost.create(post);
            res.status(201).json({message:'Post created!'});
        } catch (err) {
            res.status(404).json({message:err.message});
        }
    }    
}