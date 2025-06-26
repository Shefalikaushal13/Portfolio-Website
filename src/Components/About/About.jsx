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
                                    <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend Developer</h1>
                                    <p className="text-sm md:text-md leading-normal mt-5">
                                        I focus on creating dynamic and visually appealing web interfaces using ReactJS and Tailwind CSS and using various other UI libraries like ShadCn, Bootstrap, MUI etc. I enjoy working with APIs to build responsive, data-driven applications, ensuring that each project offers a seamless and interactive user experience. I'm passionate about continuously learning and applying the latest tools and techniques to bring ideas to life on the web.
                                    </p>
                                </span>
                            </div>



                            <div className="flex gap-3 py-4 mt-5">
                                <IoArrowForward size={30} className="mt-1" />

                                <span className="w-96">
                                    <h1 className="text-xl md:text-2xl font-semibold leading-normal">Machie Learning Engineer</h1>
                                    <p className="text-sm md:text-md leading-normal mt-5">
                                        As a machine learning student, my goal is to become proficient in a variety of ML techniques in order to address practical issues and provide unique solutions. Building intelligent systems that provide smooth and significant user experiences is my passion, and I am committed to investigating the newest tools, methods, and industry best practices.
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
