import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Create = () => {
    const url = 'https://databaseofproject.onrender.com/blogs/';
    const[title,setTitle] = useState('');
    const[body,setBody] = useState('');
    const[author,setAuthor] = useState('Devesh');
    const[isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author};
        
        setIsPending(true);

        fetch(url,{
            method:'POST', //The type of request to server is post
            headers:{"Content-Type":"application/json"},// The type of data is Json
            body: JSON.stringify(blog) //The Data
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);
            //history.go(-1);
            history.push('/');
        })

    }
    return ( 
        <div className="create">
            <h2>Create A New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text"
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="DDaku">DDaku</option>
                    <option value="Suppandi">Suppandi</option>
                    <option value="Devesh">Devesh</option>
                    
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog....</button>}
                
            </form>
        </div>
     );
}
 
export default Create;