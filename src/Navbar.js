import {Link } from 'react-router-dom';

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <h1>Suppandi Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
// we used sfc snippet to create this const 