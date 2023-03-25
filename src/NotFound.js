import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Not found</h2>
            <p>The requested webpage is not found on this server</p>
            <Link to='/'>Go back to main page</Link>
        </div>
     );
}
 
export default NotFound;