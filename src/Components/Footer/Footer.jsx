import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi";
import { SiPeerlist } from "react-icons/si"; 

const Footer = () => {
  return (
    <div
      id="Contact"
      className="flex justify-around bg-[#465695] text-white p-10 md:p-12 items-center flex-col md:flex-row gap-6"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">Feel free to reach out!</h3>
      </div>

      <ul className="flex gap-6 mt-4 text-xl">
        <li>
          <a
            href="mailto:shefali2404kaushal@gmail.com"
            aria-label="Send an Email"
            className="hover:text-gray-300"
          >
            <MdOutlineEmail size={36} />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/shefalikaushal/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn Profile"
            className="hover:text-gray-300"
          >
            <CiLinkedin size={36} />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/Shefalikaushal13"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub Profile"
            className="hover:text-gray-300"
          >
            <FaGithub size={32} />
          </a>
        </li>

        <li>
          <a
            href="https://peerlist.io/shefalikaushal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Peerlist Profile"
            className="hover:text-gray-300"
          >
            <SiPeerlist size={32} />
          </a>
        </li>

        <li>
          <a
            href="https://x.com/shefaliu_u" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit X (Twitter) Profile"
            className="hover:text-gray-300"
          >
            <PiXLogoBold size={32} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
