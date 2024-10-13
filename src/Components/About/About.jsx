import React from 'react';


const About = () => {
  return (
    <section className="flex flex-col justify-center items-center p-4 bg-white" id="about">
      <div className="w-full max-w-6xl">
        <div className="px-4 md:px-10 py-5 rounded text-center bg-white/20 backdrop-blur-lg ring-1 ring-black/20 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-black text-blue-700 mb-4">About Us</h1>
              <p className="text-left text-sm md:text-base">
                The Computer Society of India (CSI), founded on March 6, 1965, is a national body for computer professionals with 72 chapters, 511 student branches, and 100,000 members. As a non-profit, it promotes professional integrity, competence, and partnership. CSI organizes conferences, seminars, and workshops, providing a platform for professionals, researchers, educators, and students to share knowledge and ideas. Governed by an executive committee, CSI aims to advance computing and IT practices in India.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img src='./csi_logo.png' alt="CSI Logo" className="w-3/5 max-w-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;