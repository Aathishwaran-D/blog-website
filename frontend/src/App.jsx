import React from 'react';
import PostForm from "./components/PostFrom.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="/create" element={<CreatePost />} />*/}
                {/*<Route path="/view" element={<ViewPosts />} />*/}
                {/*<Route path="/update" element={<UpdatePost />} />*/}
                {/*<Route path="/delete" element={<DeletePost />} />*/}
            </Routes>
        </Router>
    );
};

export default App;
