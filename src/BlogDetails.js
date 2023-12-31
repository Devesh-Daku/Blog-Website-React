import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const url = 'https://databaseofproject.onrender.com/blogs';


const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch(url +'/' + id);
    const history = useHistory();
    const handleClick= () => {
        fetch(url+blog.id,{
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading......</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
                
            )}
        </div>
     );
}
 
export default BlogDetails;
