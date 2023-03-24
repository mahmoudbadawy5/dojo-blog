import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    let {data: blogs, error, isPending} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList title="All blogs" blogs={blogs}/>}
        </div>
     );
}
 
export default Home;