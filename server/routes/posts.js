const express = require('express');
const { getPosts, getSinglePost, addPost, updatePost, deletePost } = require('../controllers');
const router = express.Router()

router.get('/', getPosts)
router.get('/:id', getSinglePost)
router.post('/add-post', addPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)


module.exports = router;