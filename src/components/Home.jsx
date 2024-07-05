import React from "react";
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="bg-primary p-6 rounded-lg shadow-xl shadow-cyan-500/50 hover:shadow-xl home mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold my-5  mb-4"> Welcome to my Portfolio WebSite </h2>
            <p>Hi, I'm Ahmed Youssef, a passionate Reactjs Developer with a keen eye for design and a love for coding. With
             expertise in React, Tailwind CSS, and, I craft seamless and engaging user experiences. My journey in web development is driven by creativity, curiosity, and a constant desire to learn and innovate.
            </p>
        </div >
    );
};

export default Home;