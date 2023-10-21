import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogsPropSend, anotherPropExample ,handleDelete}) => { // the property blogsPropSend will be stored in prop
    
    
    return ( 
        <div className="blog-list">
            <h1>{anotherPropExample}</h1>
            {blogsPropSend.map((blog) => (
                
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>

                </Link>
                

            </div>
           ))}

        </div>
     );
}
 
export default BlogList;