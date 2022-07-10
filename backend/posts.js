const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    title:String,
    content:String,
    image:String,
    created: {
        type:Date,
    },
})

module.exports = mongoose.model('BlogPost', postsSchema);