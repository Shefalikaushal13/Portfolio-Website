import React from 'react';
import ScrollAnimatedSection from '../../ScrollAnimator';
import ProjectCard from './ProjectCard';
import WanderlyImg from "../../assets/wanderly.png"
import DailyBuzzImg from "../../assets/dailybuzz.png";
import SwolemateImg from "../../assets/swolemate.png";
import BethelightImg from "../../assets/Bethelight.png";
import CupidImg from "../../assets/cupid.png";
import FeedBoImg from "../../assets/feedbo.png";
import amex_churn_predictor from "../../assets/amex_churn_predictor.png"
import rhythmIQ from "../../assets/rhythmIQ.png"

const Projects = () => {
  return (
    <ScrollAnimatedSection>
      <div id="Projects" className="pt-6 md:pt-12 px-6 md:px-24 text-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Projects</h1>
        <div className="py-1 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 justify-items-center mt-4">
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
            main="A news web-app created using the News API. It allows users to stay updated with the latest news from various
          categories."
            bannerImage={DailyBuzzImg}
            codeLink="https://github.com/Shefalikaushal13/DailyBuzz"
          />
          <ProjectCard
            title="SwoleMate"
            main="An advanced and responsive fitness platform that customizes workout plans based on user-selected types,
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
