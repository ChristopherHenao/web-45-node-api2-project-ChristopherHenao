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


router.get('/:id', (req, res) => {
    res.json('the get by ID is working')
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