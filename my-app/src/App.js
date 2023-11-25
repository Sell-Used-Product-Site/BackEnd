import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navigation from './components/Navigation';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Navigation isLoggedIn={isLoggedIn} />
            <Routes>
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/register" element={<Register />} />
                {/* Other routes should also be updated to use the 'element' prop */}
            </Routes>
        </Router>
    );
}

export default App;

