// implement your posts router here
const express = require('express')
const Posts = require('./posts-model')
const router = express.Router()

router.get('/', (req, res) => {
    res.json('the get posts is working')
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