const express = require('express');
const router = express.Router();
const API = require('./api');

/*router.get('/' , (req,res) => {
    res.send('Hello Baris!');
}
)*/

router.get('/' , API.fetchAllPosts);
router.get('/:id' , API.fetchPostById);
router.post('/' , API.createPost);

module.exports = router;