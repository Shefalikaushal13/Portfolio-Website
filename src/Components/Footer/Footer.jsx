import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Contact" className="flex justify-around bg-[#465695] text-white p-10 md:p-12 items-center flex-col md:flex-row gap-6">
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">Feel free to reach out!</h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-2 items-center mt-2">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:shefali2404kaushal@gmail.com"
            className="hover:underline"
          >
            shefali2404kaushal@gmail.com
          </a>
        </li>
        <li className="flex gap-2 items-center mt-2">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/shefalikaushal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/shefalikaushal
          </a>
        </li>
        <li className="flex gap-2 items-center mt-2">
          <FaGithub size={20} />
          <a
            href="https://github.com/Shefalikaushal13"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/Shefalikaushal13
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
