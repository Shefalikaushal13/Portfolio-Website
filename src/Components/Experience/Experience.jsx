import React from 'react';
import ScrollAnimatedSection from '../../ScrollAnimator';
import { FaCss3, FaFigma, FaHtml5, FaJs } from "react-icons/fa";
import { SiJetpackcompose, SiKotlin } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import AnveshanLogo from "../../assets/anveshan.png";
import RipenLogo from "../../assets/ripen.png";

const Experience = () => {
    return (
        <ScrollAnimatedSection>
            <div id="Experience" className="pt-6 md:pt-12 px-6 md:px-24">
  <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Experience</h1>
                <div className="flex items-center justify-center">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6 max-w-5xl">

                        <div className="group relative w-24 h-24 bg-zinc-950 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 duration-300">

                            <SiCplusplus
                                color="#0085D3"
                                size={50}
                                className="transition-opacity duration-300 group-hover:opacity-50"
                            />

                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-sm font-semibold text-center">C++</span>
                            </div>
                        </div>

                        <div className="group relative w-24 h-24 bg-zinc-950 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 duration-300">
                            <FaPython
                                color="#FFDF50"
                                size={50}
                                className="transition-opacity duration-300 group-hover:opacity-50"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-sm font-semibold text-center">Python</span>
                            </div>
                        </div>

                        <div className="group relative w-24 h-24 bg-zinc-950 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 duration-300">
                            <FaHtml5
                                color="#E34F26"
                                size={50}
                                className="transition-opacity duration-300 group-hover:opacity-50"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-sm font-semibold text-center">HTML</span>
                            </div>
                        </div>

                        <div className="group relative w-24 h-24 bg-zinc-950 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 duration-300">
                            <FaCss3
                                color="#1572b6"
                                size={50}
                                className="transition-opacity duration-300 group-hover:opacity-50"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-sm font-semibold text-center">CSS</span>
                            </div>
                        </div>

                        <div className="group relative w-24 h-24 bg-zinc-950 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 duration-300">
                            <FaJs
                                color="#F7DF1E"
                                size={50}
                                className="transition-opacity duration-300 group-hover:opacity-50"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-sm font-semibold text-center">JavaScript</span>
                            </div>
                        </div>

                        <div className="group relative w-24 h-24 bg-zinc-950 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 duration-300">
                            <FaBootstrap
                                color="#7A09F8"
                                size={50}
                                className="transition-opacity duration-300 group-hover:opacity-50"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-sm font-semibold text-center">BootStrap</span>
                            </div>
                        </div>

                        <div className="group relative w-24 h-24 bg-zinc-950 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 duration-300">
                            <FaReact
                                color="#06B6D4"
                                size={50}
                                className="transition-opacity duration-300 group-hover:opacity-50"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-sm font-semibold text-center">ReactJs</span>
                            </div>
                        </div>

                        <div className="group relative w-24 h-24 bg-zinc-950 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 duration-300">
                            <RiTailwindCssFill
                                color="#06B6D4"
                                size={50}
                                className="transition-opacity duration-300 group-hover:opacity-50"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-sm font-semibold text-center">Tailwind CSS</span>
                            </div>
                        </div>

                        <div className="group relative w-24 h-24 bg-zinc-950 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 duration-300">
                            <FaFigma
                                color="#A358FF"
                                size={50}
                                className="transition-opacity duration-300 group-hover:opacity-50"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-sm font-semibold text-center">Figma</span>
                            </div>
                        </div>

                        <div className="group relative w-24 h-24 bg-zinc-950 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 duration-300">
                            <SiJetpackcompose
                                color="#00C165"
                                size={50}
                                className="transition-opacity duration-300 group-hover:opacity-50"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-sm font-semibold text-center">Jetpack Compose</span>
                            </div>
                        </div>

                        <div className="group relative w-24 h-24 bg-zinc-950 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 duration-300">
                            <SiKotlin
                                color="#AF25EA"
                                size={50}
                                className="transition-opacity duration-300 group-hover:opacity-50"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-sm font-semibold text-center">Kotlin</span>
                            </div>
                        </div>

                        <div className="group relative w-24 h-24 bg-zinc-950 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 duration-300">
                            <VscAzure
                                color="#7CC5D5"
                                size={50}
                                className="transition-opacity duration-300 group-hover:opacity-50"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-sm font-semibold text-center">Microsoft Azure</span>
                            </div>
                        </div>



<div className="flex flex-col lg:flex-row justify-center gap-8 mt-8">
    <div className="flex flex-col lg:flex-row gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center lg:w-1/2">
      <img src={RipenLogo} alt="Ripen Logo" className="h-24 md:h-60" />
      <div className="text-white">
        <h2 className="font-bold leading-normal">Entrepreneur in Residence</h2>
        <p className="text-sm font-thin">Aug 2023 - Oct 2023</p>
        <ul className="text-sm p-2 list-disc ml-4">
          <li>- Used Notion to create a database called Bites & Sights (link to the database) with essential information about the
                must-see cafes, historical sites, museums, and adventure locations near our college campus. More than 700 people
                accessed the database.</li>
          <li>- Brainstormed upon how the student community can help Ripen grow.</li>
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

    <div className="flex flex-col lg:flex-row gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center lg:w-1/2">
      <img src={AnveshanLogo} alt="Anveshan Logo" className="h-24 md:h-60" />
      <div className="text-white">
        <h2 className="font-bold leading-normal">Web Development Intern</h2>
        <p className="text-sm font-thin">May 2023 - July 2023</p>
        <ul className="text-sm p-2 list-disc ml-4">
          <li>- Expanded my knowledge of the basic tools used for web development i.e. HTML, CSS, JavaScript</li>
          <li>- Created a static, responsive website for a charity organisation as a part of the final project.</li>
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
            </div>
            </div>
        </ScrollAnimatedSection>

    )
}

export default Experience
