import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ isLoggedIn }) {
    return (
        <nav>
            {isLoggedIn ? (
                <Link to="/logout">Logout</Link>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </nav>
    );
}

export default Navigation;
