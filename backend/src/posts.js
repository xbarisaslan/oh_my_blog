const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    created: {
        type:Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("BlogPost", postsSchema);