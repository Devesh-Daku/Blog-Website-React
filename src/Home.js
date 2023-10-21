
import useFetch from './useFetch';
import BlogList from './blogList';
const url = 'https://databaseofproject.onrender.com/blogs';
const Home = () => {
   const {data:blogs ,isPending, error} = useFetch(url);
    

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            {isPending && <div>loading.......</div>}
           {blogs && <BlogList blogsPropSend = {blogs} anotherPropExample ="All blogs" />}
        </div>
     );
}
 
export default Home;