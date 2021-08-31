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


router.post('/', async (req, res) => {
    const { title, contents } = req.body
    try {
        if (!title || !contents) {
            res.status(400).json({ message: "Please provide title and contents for the post" })
        }
        else {
            const newPost = await Posts.insert(req.body)
            const { id } = newPost
            const post = await Posts.findById(id)
            res.status(201).json(post)
        }
    }
    catch (error) {
        res.status(500).json({ message: "There was an error while saving the post to the database" })
    }
})


router.put('/:id', async (req, res) => {
    const { title, contents } = req.body
    const post = await Posts.findById(req.params.id)
    try {
        if (!post) {
            res.status(404).json({ message: "The post with the specified ID does not exist" })
        }
        else if (!title || !contents) {
            res.status(400).json({ message: "Please provide title and contents for the post" })
        }
        else {
            await Posts.update(req.params.id, req.body)
            const updatedPost = await Posts.findById(req.params.id)
            res.json(updatedPost)
        }
    }
    catch (error) {
        res.status(500).json({ message: "The post information could not be modified" })
    }
})


router.delete('/:id', (req, res) => {
    res.json('the delete is working')
})


router.get('/:id/comments', (req, res) => {
    res.json('the get comments is working')
})



module.exports = router