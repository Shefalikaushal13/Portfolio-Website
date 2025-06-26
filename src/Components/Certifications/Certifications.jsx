import React from 'react';
import CertificationCard from './CertificationCard';
import ScrollAnimatedSection from '../../ScrollAnimator';

const Certifications = () => {
  return (
    <ScrollAnimatedSection>
      <div id="Certifications" className="pt-6 md:pt-12 px-6 md:px-24 text-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Certifications</h1>
        <div className="flex flex-wrap justify-center gap-14 mt-4">

          <CertificationCard
            title="Android App Development"
            description="Completed 8 weeks Android App Development training from Internshaala."
            certLink="https://drive.google.com/file/d/1F6Qw3mjKTt1t8HyvGSzaIN2O96MpHwe9/view?usp=sharing"
          />

          <CertificationCard
            title="Hacktober Fest Tree"
            description="Successfully Completed my first Hacktoberfest 2023 contribution and got a tree planted in my name."
            certLink="https://drive.google.com/file/d/1w6ny8_XQeq6Wt0IgjFJRh718MRM14mvp/view?usp=sharing"
          />

          <CertificationCard
            title="AZ-900"
            description="Cleared the cloud certification exam AZ-900 powered by
          Microsoft Azure using the knowledge of Cloud Fundamentals."
            certLink="https://drive.google.com/file/d/1uO9fZDFTfwcG2qQPjUmUzijWSid8dZFv/view"
          />
        </div>

        {/* Awards Section */}
        <h1 className="text-2xl md:text-4xl text-white font-bold text-center mt-10">Awards</h1>
        <div className="flex flex-wrap justify-center gap-14 mt-4">
          <CertificationCard
            title="Best Presenter"
            description="Awarded with the solo award for being the Best Presenter at Castor 2023 Hackathon."
            certLink="https://drive.google.com/file/d/1jVxFGg222jzmWHzUN1iY2z-TR-OGxrfq/view"
          />
          <CertificationCard
            title="Top 3 Teams"
            description=" Our Team Byte Monsters emerged as one of the Top 3 teams
          at the Castor 2023 Hackathon out of 800+ students for the No-Code BOT development track."
            certLink="https://drive.google.com/file/d/1q9-et0kyjCFcHveIagqsS2k4ksIzFiRY/view"
          />
        </div>
      </div>
    </ScrollAnimatedSection>
  );
};

export default Certifications;

