import React from 'react';
import AboutImage from "../../assets/about avatar.png";
import { IoArrowForward } from "react-icons/io5";
import ScrollAnimatedSection from '../../ScrollAnimator';

const About = () => {
    return (
        <ScrollAnimatedSection>
            <div id="About" className="pt-6 md:pt-12 px-6 md:px-24 pb-5 md:pb-12 text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg">
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold text-center justify-items-center">About</h2>
                    <div className="mt-4 md:flex flex-wrap flex-col md:flex-row items-center">
                        <img className="md:h-80 mr-28 mt-10" src={AboutImage} />

                        <ul>
                            <div className="flex gap-3 py-4 mt-10">
                                <IoArrowForward size={30} className="mt-1" />

                                <span className="w-96">
                                    <h1 className="text-xl md:text-2xl font-semibold leading-normal">Web Developer</h1>
                                    <p className="text-sm md:text-md leading-normal mt-5">
                                        I am a passionate Web Developer focused on building dynamic and visually engaging web applications using ReactJS, Next.js, and Tailwind CSS, along with UI libraries like ShadCN, Bootstrap, and MUI. I enjoy working with APIs, Firebase, and MongoDB to create responsive, data-driven solutions that deliver seamless and interactive user experiences. I am constantly learning and exploring new technologies to develop efficient, modern, and impactful web solutions.
                                    </p>
                                </span>
                            </div>



                            <div className="flex gap-3 py-4 mt-5">
                                <IoArrowForward size={30} className="mt-1" />

                                <span className="w-96">
                                    <h1 className="text-xl md:text-2xl font-semibold leading-normal">Machie Learning Engineer</h1>
                                    <p className="text-sm md:text-md leading-normal mt-5">
                                        As a Machine Learning enthusiast, my goal is to develop intelligent systems that learn from data and deliver meaningful, real-world impact. I enjoy exploring techniques in deep learning, predictive modeling, and data analysis to design solutions that enhance decision-making and efficiency. Passionate about innovation, I continuously expand my knowledge of emerging ML frameworks, optimization methods, and deployment practices to build reliable, scalable, and insightful AI-driven applications.
                                    </p>
                                </span>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        </ScrollAnimatedSection>
    )
}

export default About
