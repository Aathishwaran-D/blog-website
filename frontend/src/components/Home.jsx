import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Card from './UI/Card.jsx';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1>..Welcome to my Blog Website..</h1>
            <div className="card-container">
                <Card className="create-class" title="Create" onClick={() => navigate('/create')} />
                <Card className="view-class" title="View" onClick={() => navigate('/view')} />
                <Card className="update-class" title="Update" onClick={() => navigate('/update')} />
                <Card className="delete-class" title="Delete" onClick={() => navigate('/delete')} />
            </div>
        </div>

    );
};

export default Home;