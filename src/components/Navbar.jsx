
import { Link } from "react-router-dom";
import "../css/Navbar.css"

const Navbar = () => {
    return ( 
        <nav className="navbar">
             <h1>The Ghazali Blog</h1>
             <div className="links">
               <Link to="/">Home</Link>
               <Link to="/create">New Blog</Link>
             </div>
        </nav>
       
     );
}
 
export default Navbar;