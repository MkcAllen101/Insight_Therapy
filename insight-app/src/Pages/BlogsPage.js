import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import { useBlogContext } from "../hooks/useBlogsContext";
import { useAuthContext } from "../hooks/useAuthContext"

const BlogsPage = ()=>{

    const {blogs, dispatch} = useBlogContext();
    const {user} = useAuthContext();

    useEffect(()=>{
        const fetchBlogs = async() =>{
            const response = await fetch('/api/blogs',{
            headers:{
            'Authorization': `Bearer ${user.token}`
            }})
            const json = await response.json()

            if(response.ok){
                dispatch({type:'SET_BLOGS', payload:json});
            }
        }
        if(user){fetchBlogs()}
        
    },[dispatch, user])

    return(
        <>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"2rem"}}>
        <Link to='/blogs/blogForm'><button className="post-button">Post Something</button></Link></div>
        
        <div className='blog-section' style={{marginTop:'2rem'}}>
        {blogs && blogs.map((blog)=>(
            <Cards key={blog._id} blog={blog} />
        ))}
        </div>
        </>
    )
}

export default BlogsPage;