import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Added state to handle error messages.

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear any existing errors.
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (data.success) {
                // Handle successful login
                // Redirect to another page or update the state accordingly.
            } else {
                // Handle login failure
                // Display an error message or take other actions as needed.
                setError(data.message || 'Login failed'); // Display error from server or a default message.
            }
        } catch (error) {
            // Handle errors from the fetch request itself
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username" 
                required 
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                required 
            />
            <button type="submit">Login</button>
            {error && <p className="error">{error}</p>} {/* Display error message if there is one */}
        </form>
    );
}

export default Login;
