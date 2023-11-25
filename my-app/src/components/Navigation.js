import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';

function Navigation({ isLoggedIn, setIsLoggedIn }) {
    const navigate = useNavigate();

    const logout = () => {
        // Perform logout logic here, like clearing tokens or other session data
        setIsLoggedIn(false);
        navigate('/'); // Redirect to the home page after logout
    };

    return (
        <nav>
            {isLoggedIn ? (
                // Use a button or link that calls the logout function
                <button onClick={logout}>Logout</button>
            ) : (
                <>
                    <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink>
                    <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>Register</NavLink>
                </>
            )}
        </nav>
    );
}

// Define prop types for better validation
Navigation.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    setIsLoggedIn: PropTypes.func.isRequired // Include this if you are managing the logged-in state from a parent component
};

export default Navigation;
