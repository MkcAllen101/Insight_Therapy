import Card from 'react-bootstrap/Card';
import { useBlogContext } from '../hooks/useBlogsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from '../hooks/useAuthContext';

const Cards = ({blog})=> {
  const {dispatch} = useBlogContext();
  const user = useAuthContext();

  const handleClick = async()=>{

    if(!user){
      return;
    }

    const response = await fetch('/api/blogs/'+blog._id,{
      method:'DELETE',
      headers:{
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json();

    if(response.ok)
    {
      dispatch({type:'DELETE_BLOG', payload:json});
    }
  }

  return (
    <Card style={{ width: '25rem', marginRight:'2rem', marginBottom:"2rem", height:"30rem"}}>
      <Card.Body>
        <Card.Title>{blog.userName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{blog.title}</Card.Subtitle>
        <Card.Text>
          {blog.content}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{formatDistanceToNow(new Date(blog.createdAt), {addSuffix:true})}</Card.Subtitle>

      </Card.Body>
    </Card>
  );
}

export default Cards;