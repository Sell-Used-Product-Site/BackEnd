import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [registrationMessage, setRegistrationMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setRegistrationMessage("Passwords don't match.");
            return;
        }
        setError('');
    
        try {
            const response = await fetch('/http://localhost:3005/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
            });
            const data = await response.json();
            if (data.success) {
                setRegistrationMessage('Registration successful, navigating to login...');
                navigate('/login');
            } else {
                setRegistrationMessage(data.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            setRegistrationMessage('An error occurred. Please try again later.');
        }
    };
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Username" 
                required 
            />
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
                required 
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                required 
            />
            <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                placeholder="Confirm Password" 
                required 
            />
            <button type="submit">Register</button>
        </form>
        {registrationMessage && <p>{registrationMessage}</p>}
        </div>
    );
}

export default Register;
