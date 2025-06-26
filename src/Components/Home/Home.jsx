import React from 'react';
import { motion } from "framer-motion";
import avatarImage from "../../assets/avatar-1.png";
import TextAnimator from '../../TextAnimator';

const Home = () => {

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="text-white flex flex-col md:flex-row w-full justify-between items-start p-4 md:p-20">
        <div className="md:pt-10 md:w-1/2">
          <h1 className="text-xl md:text-6xl font-bold leading-snug tracking-tight">
            <TextAnimator />
          </h1>
          <p className="text-xs md:text-2xl leading-tight tracking-tight pt-2 md:pt-14">
            An aspiring software engineer, frontend developer, and a budding machine learning engineer with a knack for transforming creative ideas into engaging, responsive web experiences.<br />
            Driven by curiosity and a love for problem-solving, I'm on a mission to build the future, one line of code at a time.
          </p>
          <button
            className="mt-3 md:mt-10 text-white py-2 px-3 text-xs md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-1105 font-semibold rounded-3xl bg-[#465697]"
            onClick={scrollToBottom}>
            Contact Me
          </button>
        </div>
        <div className="mt-4 md:mt-0 w-full md:w-auto">
          <img className="w-full md:w-auto" src={avatarImage} alt="Avatar"></img>
        </div>
      </div>
    </motion.div>
  )
}

export default Home;

