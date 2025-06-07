import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashBoard from './components/AdminDashBoard.jsx';
import CreatePost from "./components/function-components/CreatePost.jsx";
import ViewPost from  "./components/function-components/ViewPost.jsx";
import UpdatePost from "./components/function-components/UpdatePost.jsx";
import DeletePost from "./components/function-components/DeletePost.jsx";
import Home from "./components/Home/Home.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
                {/*<Route path="/" element={<AdminDashBoard />} />*/}
                <Route path="/create" element={<CreatePost />} />
                <Route path="/view" element={<ViewPost />} />
                <Route path="/update" element={<UpdatePost />} />
                <Route path="/delete" element={<DeletePost />} />
            </Routes>
        </Router>
    );
};

export default App;
