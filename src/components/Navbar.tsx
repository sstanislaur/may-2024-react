import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/comments">Comments</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
