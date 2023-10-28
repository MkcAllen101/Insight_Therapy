require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

// express app
const app = express()

const blogRoutes = require('./routes/blogs')
const userRoutes = require('./routes/user')

// middleware
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

// grabs all the routes and uses them on the app
app.use('/api/blogs',blogRoutes)
app.use('/api/user',userRoutes)


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen for requests
    app.listen(process.env.PORT, ()=>{
    console.log("Connected to the database, listening on port 8080");
})
})
.catch((error)=>{
    console.log(error);
})

