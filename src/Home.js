import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    const handleDelete = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id))
    }
    
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            setBlogs(res)
        })
    }, [])

    return ( 
        <div className="home">
            {blogs && <BlogList title="All blogs" blogs={blogs} handleDelete={handleDelete}/>}
        </div>
     );
}
 
export default Home;