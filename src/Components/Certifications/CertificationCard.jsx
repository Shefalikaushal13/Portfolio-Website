import React from 'react';

const CertificationCard = ({ title, description, certLink }) => {
  return (
    <div className="flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl p-4 mt-6">
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-bold leading-normal">
          {title}
        </h3>
        <p className="text-sm md:text-md leading-tight py-2">{description}</p>
      </div>
      <div className="flex justify-center mt-auto">
        <button 
          onClick={(e) => {
            e.preventDefault();
            window.open(certLink, '_blank');
          }}
          className="text-white py-2 px-3 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          View Certificate
        </button>
      </div>
    </div>
  );
};

export default CertificationCard;
