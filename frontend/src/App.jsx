import React from 'react';
import PostForm from "./components/PostFrom.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from "./components/function-components/CreatePost.jsx";
import ViewPost from  "./components/function-components/ViewPost.jsx";
import UpdatePost from "./components/function-components/UpdatePost.jsx";
import DeletePost from "./components/function-components/DeletePost.jsx";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/view" element={<ViewPost />} />
                <Route path="/update" element={<UpdatePost />} />
                <Route path="/delete" element={<DeletePost />} />
            </Routes>
        </Router>
    );
};

export default App;
