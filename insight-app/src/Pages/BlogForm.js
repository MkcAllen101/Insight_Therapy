import { useState } from 'react';
import { useBlogContext } from '../hooks/useBlogsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const PostBlog = () =>{
    
    const {dispatch} = useBlogContext();

    const [userName, setUserName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);
    const {user} = useAuthContext();

    const handleSubmit = async(e)=>{
        e.preventDefault();

        if(!user){
            setError('You must be logged in!');
            return;
        }

        const blog = {userName, title, content};

        const response = await fetch('/api/blogs', {
            method:'POST',
            body:JSON.stringify(blog),
            headers:{
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error);
        }
        if(response.ok){
            setUserName('');
            setTitle('');
            setError('');
            setContent('');
            dispatch({type:'CREATE_BLOG', payload:json})
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}  style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", marginTop:"4rem"}}>
                <input type='text' 
                placeholder='Username' 
                className='blog-input'
                onChange={(e)=>setUserName(e.target.value)}
                value={userName} />

                <input type='text' 
                placeholder='Title of the blog' className='blog-input'
                onChange={(e)=>setTitle(e.target.value)}
                value={title} />

                <textarea type='text' 
                placeholder='Start typing...' 
                className='blog-input' 
                onChange={(e)=>setContent(e.target.value)}
                value={content}/>
                <button type='submit' className='submit-form'>Post</button>
                {error && <div style={{display:"flex", justifyItems:"center", color:"red", fontWeight:"bolder"}}>{error}</div>}
            </form>
        </div>
    );
}

export default PostBlog;