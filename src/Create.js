import { useState } from "react";

const Create = () => {
    let [title, setTitle] = useState('');
    let [body, setBody] = useState('');
    let [author, setAuthor] = useState('mario');

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
                <label>Blog title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <label>Blog body:</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="luigi">luigi</option>
                    <option value="yoshi">yoshi</option>
                </select>
            </form>
        </div>
     );
}
 
export default Create;