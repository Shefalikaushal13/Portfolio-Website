import React from 'react';
import ScrollAnimatedSection from '../../ScrollAnimator';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaBootstrap, FaPython } from "react-icons/fa";
import { SiCplusplus, SiTypescript, SiPostman, SiMongodb, SiFirebase, SiStreamlit, SiFlask, SiCanva } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";
import { FaWebflow } from "react-icons/fa6";
import ProjectCard from './ProjectCard';
import WanderlyImg from "../../assets/wanderly.png"
import DailyBuzzImg from "../../assets/dailybuzz.png";
import SwolemateImg from "../../assets/swolemate.png";
import BethelightImg from "../../assets/Bethelight.png";
import CupidImg from "../../assets/cupid.png";
import FeedBoImg from "../../assets/feedbo.png";
import amex_churn_predictor from "../../assets/amex_churn_predictor.png"
import rhythmIQ from "../../assets/rhythmIQ.png"
import skimmr from "../../assets/Skimmr.png"
import veridian from "../../assets/Veridian.png"

const Projects = () => {
  return (
    <ScrollAnimatedSection>
      <div id="Projects" className="pt-6 md:pt-12 px-6 md:px-24 text-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Skills & Projects</h1>
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-6 p-6 max-w-5xl">
            {[
              { icon: <SiCplusplus color="#0085D3" size={50} />, label: "C++" },
              { icon: <FaPython color="#FFDF50" size={50} />, label: "Python" },
              { icon: <FaHtml5 color="#E34F26" size={50} />, label: "HTML" },
              { icon: <FaCss3 color="#1572b6" size={50} />, label: "CSS" },
              { icon: <FaJs color="#F7DF1E" size={50} />, label: "JavaScript" },
              { icon: <FaBootstrap color="#7A09F8" size={50} />, label: "BootStrap" },
              { icon: <FaReact color="#06B6D4" size={50} />, label: "ReactJs" },
              { icon: <RiTailwindCssFill color="#06B6D4" size={50} />, label: "Tailwind CSS" },
              { icon: <RiNextjsFill color="#FFFFFF" size={50} />, label: "NextJs" },         
              { icon: <SiTypescript color="#3178C6" size={50} />, label: "TypeScript" },     
              { icon: <SiMongodb color="#47A248" size={50} />, label: "MongoDB" },           
              { icon: <SiFirebase color="#FFCA28" size={50} />, label: "Firebase" },         
              { icon: <SiStreamlit color="#FF4B4B" size={50} />, label: "Streamlit" },       
              { icon: <SiFlask color="#FFFFFF" size={50} />, label: "Flask" },               
              { icon: <SiPostman color="#FF6C37" size={50} />, label: "Postman" },           
              { icon: <VscAzure color="#7CC5D5" size={50} />, label: "Microsoft Azure" },
              { icon: <FaFigma color="#A358FF" size={50} />, label: "Figma" },
              { icon: <FaWebflow color="#2596be" size={50} />, label: "Webflow" },
              { icon: <SiCanva color="#00C4CC" size={50} />, label: "Canva" },
            ].map((tech, index) => (
              <div key={index} className="group relative w-24 h-24 bg-zinc-950 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 duration-300">
                {tech.icon}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-semibold text-center">{tech.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-1 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 justify-items-center mt-4">
          <ProjectCard
            title="Veridian"
            main="Veridian is an AI-powered resume analyzer and job match optimizer built with Streamlit and Google Gemini (LLM).
            It evaluates your resume against job descriptions to deliver match scores, missing keywords, and concise AI feedback — all designed to boost ATS compatibility.
            Built with Python, pdf2image, and PIL, Veridian helps you improve your resume with honest, actionable insights in seconds."
            bannerImage={veridian}
            codeLink="https://github.com/Shefalikaushal13/Veridian"
            demoLink="https://shefalikaushal13-veridian-app-st6cqt.streamlit.app/"
          />

          <ProjectCard
            title="Skimmr"
            main="Skimmr is a full-stack short-form video gallery app built with Next.js, TypeScript, and Tailwind CSS.
            Users can securely upload, view, and manage 1080×1920 reels with NextAuth authentication and MongoDB storage.
            It supports custom thumbnails, detailed video forms, and strict resolution checks.
            Media is optimized using ImageKit API, enabling 40% faster load times with CDN and real-time transformations."
            bannerImage={skimmr}
            codeLink="https://github.com/Shefalikaushal13/Skimmr"
          />

          <ProjectCard
            title="RhythmIQ"
            main="Rhythmiq is a Flask-based music recommendation web app that revives the golden era of pre-2020 songs. 
          Using machine learning and the K-Nearest Neighbors (KNN) algorithm, it analyzes audio features like danceability, energy, tempo, and 
          more to suggest tracks that match your vibe. Built with Python, HTML, CSS, and a love for nostalgia. 
          Perfect for rediscovering the soundtrack of your past!"
            bannerImage={rhythmIQ}
            codeLink="https://github.com/Shefalikaushal13/RhythmIQ"
            demoLink="https://rhythmiq-9h5k.onrender.com/"
          />

          <ProjectCard
            title="AmEx Customer Churn Predictor"
            main="Developed a deep learning model using a 3-layer ANN to predict customer churn based on demographic and
          transactional data, achieving 86% accuracy.Implemented One-Hot Encoding, feature scaling, and an 80-20 train-test split on a dataset of 9,500+ records,
          optimizing model performance through batch normalization and ReLU activation functions."
            bannerImage={amex_churn_predictor}
            codeLink="https://github.com/Shefalikaushal13/AmEx-User-Exit-Prediction"
          />

          <ProjectCard
            title="Wanderly"
            main="A web app that tailors travel itineraries to individual preferences. Considers factors like
            budget, interests, and trip length. Suggests hotels that align with budget constraints and seamlessly integrates
            Google Maps for comprehensive destination information, including contact details, photos, directions, and relevant
            websites"
            bannerImage={WanderlyImg}
            codeLink="https://github.com/Shefalikaushal13/Wanderly"
            demoLink="https://wanderly-itinerary-generator.vercel.app/"
          />

          <ProjectCard
            title="DailyBuzz"
            main="A news web-app created using the News API and ReactJS. It allows users to stay updated with the latest news from various
            categories."
            bannerImage={DailyBuzzImg}
            codeLink="https://github.com/Shefalikaushal13/DailyBuzz"
          />

          <ProjectCard
            title="SwoleMate"
            main="An advanced and responsive fitness platform built using ReactJS that customizes workout plans based on user-selected types,
            target muscles, and goals. The algorithm generates unique exercises each session, detailing reps, tempo, and rest
            times. Users can track progress by recording sets completed, ensuring efficient and engaging workouts."
            bannerImage={SwolemateImg}
            codeLink="https://github.com/Shefalikaushal13/SwoleMate"
            demoLink="https://swole-mate.netlify.app/"
          />

          <ProjectCard
            title="Be The Light"
            main="Created a static multi-page website for a fictional charity organization, made it responsive, and used animated CSS to make it attractive."
            bannerImage={BethelightImg}
            codeLink="https://github.com/Shefalikaushal13/BeTheLight-Charity-Website"
            demoLink="https://shefalikaushal13.github.io/BeTheLight-Charity-Website/index.html"
          />

          <ProjectCard
            title="Cupid"
            main="Designed the UI/UX of an online movie streaming app using Figma, implemented glass morphism cards to display various movie categories,
          made the design responsive and linked multiple frames together to create a user flow using Figma’s prototyping features."
            bannerImage={CupidImg}
            demoLink="https://shefalikaushal13.github.io/CUPID/"
          />

          <ProjectCard
            title="FeedBo"
            main="FeedBo is an interactive and engaging Faculty Feedback BOT built using No-Code tools. Dealt with the analytical building of the interface on Visual Flow builder,integrated it with Google Sheets for database
          management, and included various graphics like emojis, GIFs, and reactions to make the form more interesting."
            bannerImage={FeedBoImg}
            demoLink="https://www.canva.com/design/DAFY4ONToJY/Bgj93wi9SeP7biumMeR6jA/view"
          />

        </div>
      </div>
    </ScrollAnimatedSection>
  );
};

export default Projects;
