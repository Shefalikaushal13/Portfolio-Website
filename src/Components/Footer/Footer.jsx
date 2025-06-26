import React from 'react';
import {MdOutlineEmail} from "react-icons/md";
import {CiLinkedin} from "react-icons/ci";
import {FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Contact" className="flex justify-around bg-[#465695] text-white p-10 md:p-12 items-center">
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">Feel free to reach out!</h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center mt-2">
            <MdOutlineEmail size={20}/>
            shefali2404kaushal@gmail.com
        </li>
        <li className="flex gap-1 items-center mt-2">
            <CiLinkedin size={20}/>
            www.linkedin.com/in/shefalikaushal/
        </li>
        <li className="flex gap-1 items-center mt-2">
            <FaGithub size={20}/>
            github.com/Shefalikaushal13
        </li>
      </ul>
    </div>
  )
}

export default Footer
