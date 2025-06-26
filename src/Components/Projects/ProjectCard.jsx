import React from 'react';

const ProjectCard = ({ bannerImage, title, main, codeLink, demoLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl mt-6 h-full">
      <img src={bannerImage} className="p-4" alt="Project Banner" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-snug py-2 flex-grow">
        {main}
      </p>
      <div className="mt-auto p-2 md:p-4 flex gap-2 md:gap-4 justify-center">
        {demoLink && (
          <button 
            onClick={(e) => {
              e.preventDefault();
              window.open(demoLink, '_blank');
            }}
            className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Demo
          </button>
        )}
        {codeLink && (
          <button 
            onClick={(e) => {
              e.preventDefault();
              window.open(codeLink, '_blank');
            }}
            className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Source Code
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

