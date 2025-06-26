import React from 'react';
import IGDTUWlogo from "../../assets/igdtuw.png";
import MMPSlogo from "../../assets/MMPS.png";
import SMSSSlogo from "../../assets/smsss.png";
import ScrollAnimatedSection from '../../ScrollAnimator';

const Education = () => {
  return (
    <ScrollAnimatedSection>
      <div id="Education" className="pt-6 md:pt-12 px-6 md:px-24 text-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Education</h1>
        <div className="flex flex-wrap items-center justify-around mt-4"> </div>
        <div className="flex gap-6 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <img src={IGDTUWlogo} className="h-16 md:h-40 mr-0 md:mr-20 mt-2" />
          <span className="text-white">
            <h2 className="leading-normal font-bold">Indira Gandhi Delhi Technical University for Women, Delhi</h2>
            <h2 className="leading-normal font-bold">B.Tech in Electronics and Communications Engineering with Artificial Intelligence</h2>
            <p className="text-sm leading-normal font-thin">2022-2026</p>
          </span>
        </div>


        <div className="flex gap-6 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <img src={MMPSlogo} className="h-16 md:h-40 mr-0 md:mr-20 mt-2" />
          <span className="text-white">
            <h2 className="leading-normal font-bold">M.M. Public School, Delhi</h2>
            <h2 className="leading-normal font-bold">Class XII</h2>
            <p className="text-sm leading-normal font-thin">2021-2022</p>
          </span>
        </div>

        <div className="flex gap-6 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <img src={SMSSSlogo} className="h-16 md:h-40 mr-0 md:mr-20 mt-2" />
          <span className="text-white">
            <h2 className="leading-normal font-bold">St. Margaret Sr. Sec. School, Delhi</h2>
            <h2 className="leading-normal font-bold">Class X</h2>
            <p className="text-sm leading-normal font-thin">2019-2020</p>
          </span>
        </div>
      </div>
    </ScrollAnimatedSection>
  )
}

export default Education;
