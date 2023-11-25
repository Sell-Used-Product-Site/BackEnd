import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { NavLink } from 'react-router-dom'; // Import NavLink for active styling

function Navigation({ isLoggedIn }) {
    return (
        <nav>
            {isLoggedIn ? (
                <NavLink to="/logout" activeClassName="active">Logout</NavLink>
            ) : (
                <>
                    <NavLink to="/login" activeClassName="active">Login</NavLink>
                    <NavLink to="/register" activeClassName="active">Register</NavLink>
                </>
            )}
        </nav>
    );
}

// Define prop types for better validation
Navigation.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default Navigation;
