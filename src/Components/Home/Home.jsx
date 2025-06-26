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
  <div className="w-full md:w-auto mt-8 md:mt-12 lg:mt-0 flex justify-center md:justify-end pr-0 lg:pr-12">
  <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-60 md:h-60 lg:w-96 lg:h-96">
    <img
      src={avatarImage}
      alt="Avatar"
      className="w-full h-full object-contain"
    />
  </div>
</div>

      </div>
    </motion.div>
  )
}

export default Home;

