const mongoose = require('mongoose');
const Blog = require('../models/blogModel');

// get all Blogs
const getBlogs = async(req, res)=>{
    const blogs = await Blog.find({}).sort({createdAt:-1});
    res.status(200).json(blogs);
}


// create a blog
const createBlog = async(req, res)=>{
    const {userName, title, content} = req.body
    try{
        const blog = await Blog.create({userName, title, content});
        res.status(200).json(blog)
    }catch(error){
        res.status(400).json({error:error.message});
    }
}


// update a blog
const updateBlog = async(req, res) =>{
    const {id} = req.params;

    // checks the validity of the id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such blog found!"});
    }

    const blog = await Blog.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if(!blog){
        return res.status(400).json({error:"No such blog found"});
    }

    res.status(200).json(blog);
}

// delete a blog
const deleteBlog = async(req, res)=>{
    const {id} = req.params;
    
    // checks the validity of the id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such blog found!"});
    }
    
    const blog = await Blog.findByIdAndDelete({_id:id});

    res.status(200).json(blog);
}


module.exports = {
    createBlog, getBlogs, updateBlog, deleteBlog
}