import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Comments from './pages/Comments';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/comments" element={<Comments />} />
            </Routes>
        </Router>
    );
}

export default App;
