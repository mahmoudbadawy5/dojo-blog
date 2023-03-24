import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id));
    }
    
    useEffect(() => {
        setTimeout(() => {
        fetch('http://localhost:8000/blogs')
        .then((res) => {
            if(!res.ok) {
                throw Error('Couldn\'t fetch data');
            }
            return res.json();
        })
        .then((res) => {
            setBlogs(res);
            setIsPending(false);
            setError(null);
        })
        .catch((e) => {
            setError(e.message);
            setIsPending(false);
        })
    }, 1000)
    }, [])

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList title="All blogs" blogs={blogs} handleDelete={handleDelete}/>}
        </div>
     );
}
 
export default Home;