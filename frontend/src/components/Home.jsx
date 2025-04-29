import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Optional: Add styles for the buttons
import Card from "./UI/Card.jsx";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1>WELCOME TO THE BLOG APP</h1>
            <Card title={"CREATE"} onClick={()=> navigate('/create')}/>
            <Card title={"VIEW"} onClick={()=> navigate('/view')}/>
            <Card title={"UPDATE"} onClick={()=> navigate('/update')}/>
            <Card title={"DELETE"} onClick={()=> navigate('/delete')}/>
        </div>
    );
};

export default Home;