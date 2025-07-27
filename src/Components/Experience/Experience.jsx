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
              <p className="text-sm font-thin">June 2025 - Present</p>
              <ul className="text-sm p-2 list-disc ml-4">
                <li>Learnt the basics and intermediate concepts of Webflow and designing no-code and low-code websites using it.</li>
                {/*add another list item*/}
              </ul>
              <button
                type="button"
                className="mt-4 text-white text-sm md:text-lg py-2 px-4 hover:opacity-85 hover:scale-105 transition-all font-semibold rounded-3xl bg-[#465697]"
                onClick={() =>
                  window.open('_blank')
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
                <li>Used Notion to create the Bites & Sights database accessed by 700+ students.</li>
                <li>Brainstormed how the student community can help Ripen grow.</li>
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
                <li>Expanded knowledge in HTML, CSS, JavaScript.</li>
                <li>Created a static, responsive charity website.</li>
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

