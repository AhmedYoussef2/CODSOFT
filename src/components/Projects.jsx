import React from "react";
import "../styles/Projects.css";
import image1 from "../image1.jpg";
import image2 from "../image2.jpeg";

const Projects = () => (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between space-y-6 sm:space-y-0 sm:space-x-12 cont">
            <div className="flex-1 card card-1 hover:border-4 hover:border-indigo-200 hover:border-t-indigo-500 hover:border-x-white hover:border-b-white">
                <img src={image1} alt="" />
                <h3 className="h3-1">Phantom Project</h3>
                <p>Embark on a journey into the world of drones with our specialized platform designed for enthusiasts and professionals alike. Discover cutting-edge drone technology, from aerial photography to industrial applications.</p>
            </div>
            <div className="flex-1 card card-2 hover:border-4 hover:border-indigo-200 hover:border-t-indigo-500 hover:border-x-white hover:border-b-white">
                <img src={image2} alt="" className="img2" />
                <h3 className="h3-2">Bilad Platform</h3>
                <p>Unlock the potential of online education with our comprehensive educational website solutions. Whether you're an institution, tutor, or educational content creator, our platform offers a robust set of tools to deliver engaging and interactive learning experiences.</p>
            </div>
        </div>
    </div>
);

export default Projects;
