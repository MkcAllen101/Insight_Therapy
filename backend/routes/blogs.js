const express = require('express')
const {createBlog, updateBlog, deleteBlog, getBlogs} = require('../controllers/blogController')


const requireAuth = require('../middleware/requireAuth')

const Blog = require('../models/blogModel')

const router = express.Router()

router.use(requireAuth);

// get all blogs
router.get('/', getBlogs)

// create and post a new blog
router.post('/',createBlog)

// delete a new blog
router.delete('/:id', deleteBlog)

// update a new blog
router.patch('/:id', updateBlog);

module.exports = router;