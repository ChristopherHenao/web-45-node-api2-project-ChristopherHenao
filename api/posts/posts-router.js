// implement your posts router here
const express = require('express')
const Posts = require('./posts-model')
const router = express.Router()

router.get('/', async (req, res) => {
    const posts = await Posts.find()
    try {
        res.json(posts)
    }
    catch (error) {
        res.status(500).json({ message: "The posts information could not be retrieved" })
    }
})


router.get('/:id', async (req, res) => {
    const post = await Posts.findById(req.params.id)
    try {
        if (!post) {
            res.status(404).json({ message: "The post with the specified ID does not exist" })  
        }
        else {
            res.json(post)
        }
    }
    catch (error) {
        res.status(500).json({ message: "The post information could not be retrieved" })
    }
})


router.post('/', (req, res) => {
    res.json('the post is working')
})


router.put('/:id', (req, res) => {
    res.json('the put is working')
})


router.delete('/:id', (req, res) => {
    res.json('the delete is working')
})


router.get('/:id/comments', (req, res) => {
    res.json('the get comments is working')
})



module.exports = router