import React from 'react';
import './Home.css';
import Logo from '../../../public/images/Logo.png';
import SplitText from "../UI/SplitText.jsx";
import Button from "../UI/Button.jsx";
function Home() {

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <div className="home-bgcolor">
        <div >
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={Logo} alt="Logo" className="navbar-logo-img" />
                    InkTrail Blogs
                </div>
                <ul className="navbar-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="content-heading">
                <SplitText
                    text="WELCOME TO INKTRAIL!"
                    className="text-2xl font-semibold text-center"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
            </div>
                <div>
                    <h1 className="sub-title">Explore the code behind the curtain.</h1>
                    <h6 className="justified-text">We break down complex technologies into simple, digestible insights. Whether it's backend frameworks like Spring Boot, frontend libraries like React, or best practices in API design and DevOps, our deep dives are crafted to make you think, build, and grow.</h6>
                </div>
        <Button />
        </div>
            </div>
    );
}

export default Home;
