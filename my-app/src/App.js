import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navigation from './components/Navigation';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Navigation isLoggedIn={isLoggedIn} />
            <Switch>
                <Route path="/login">
                    <Login setIsLoggedIn={setIsLoggedIn} />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                {/* Other routes */}
            </Switch>
        </Router>
    );
}

export default App;
