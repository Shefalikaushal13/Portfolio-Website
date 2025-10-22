import React from 'react';
import ScrollAnimatedSection from '../../ScrollAnimator';
import AnveshanLogo from "../../assets/anveshan.png";
import RipenLogo from "../../assets/ripen.png";
import DesignPlunge from "../../assets/DesignPlunge.jpg";

const Experience = () => {
  return (
    <ScrollAnimatedSection>
      <div id="Experience" className="pt-6 md:pt-12 px-6 md:px-24 w-full">
        <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Experience</h1>

        {/* Experience Cards Row */}
        <div className="flex flex-col gap-8 mt-12 w-full">


            <div className="flex flex-col lg:flex-row gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center w-full">
            <img src={DesignPlunge} alt="Design Plunge Logo" className="h-24 md:h-60" />
            <div className="text-white">
              <h1 className="font-bold leading-normal">Design Plunge</h1>
              <h2 className="font-bold leading-normal">Web Development Intern</h2>
              <p className="text-sm font-thin">June 2025 - September 2025</p>
              <ul className="text-sm p-2 list-disc ml-4">
                <li>Converted high-fidelity Figma mockups into fully responsive websites using Webflow and Bubble, implementing custom animations, 
                  CMS collections, and reusable UI components optimized for 4 device breakpoints, accelerating delivery timelines by 35%.</li>
                <li>Exported and customized HTML, CSS, and JavaScript code to add backend functionality, integrate
                 external libraries, and implement custom UI logic beyond native capabilities.</li>
  
              </ul>
              <button
                type="button"
                className="mt-4 text-white text-sm md:text-lg py-2 px-4 hover:opacity-85 hover:scale-105 transition-all font-semibold rounded-3xl bg-[#465697]"
                onClick={() =>
                  window.open('https://drive.google.com/file/d/1J7EfI-fuhrRivbiJlvE_mWiBnoFBSoMJ/view?usp=sharing')
                }
              >
                See Proof
              </button>
            </div>
          </div>
        
          <div className="flex flex-col lg:flex-row gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center w-full">
            <img src={RipenLogo} alt="Ripen Logo" className="h-24 md:h-60" />
            <div className="text-white">
              <h1 className="font-bold leading-normal">Ripen Labs</h1>
              <h2 className="font-bold leading-normal">Entrepreneur in Residence</h2>
              <p className="text-sm font-thin">Aug 2023 - Oct 2023</p>
              <ul className="text-sm p-2 list-disc ml-4">
                <li>Analyzed user needs and product-market fit to design and launch a Notion-based local guide, Bites & Sights,
                  featuring 45+ curated attractions and accessed by over 700 users.</li>
                <li>Applied strategic business analysis to product development by conceptualizing hyper-local features, and formulating
                  scalable distribution and monetization strategies, improving the Ripen app’s usability and potential for growth.</li>
              </ul>
              <button
                type="button"
                className="mt-4 text-white text-sm md:text-lg py-2 px-4 hover:opacity-85 hover:scale-105 transition-all font-semibold rounded-3xl bg-[#465697]"
                onClick={() =>
                  window.open('https://drive.google.com/file/d/1EzXXB9HC5N3bL7BD4HWlihPY-I-2V6AN/view?usp=sharing', '_blank')
                }
              >
                See Proof
              </button>
            </div>
          </div>

    
          <div className="flex flex-col lg:flex-row gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center w-full">
            <img src={AnveshanLogo} alt="Anveshan Logo" className="h-24 md:h-60" />
            <div className="text-white">
              <h1 className="font-bold leading-normal">Anveshan Foundation</h1>
              <h2 className="font-bold leading-normal">Web Development Intern</h2>
              <p className="text-sm font-thin">May 2023 - July 2023</p>
              <ul className="text-sm p-2 list-disc ml-4">
                <li>Mastered core web technologies like HTML, CSS, and basics of JavaScript.</li>
                <li> Created a responsive, multi-page charity website for a fictional organization, featuring 5 pages and utilized animated
                  CSS effects</li>
              </ul>
              <button
                type="button"
                className="mt-4 text-white text-sm md:text-lg py-2 px-4 hover:opacity-85 hover:scale-105 transition-all font-semibold rounded-3xl bg-[#465697]"
                onClick={() =>
                  window.open('https://drive.google.com/file/d/17OKGRFQm946rReK5bO7-ldoBH4vrkvu2/view', '_blank')
                }
              >
                See Proof
              </button>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
};

export default Experience;

