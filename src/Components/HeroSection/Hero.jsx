import React from 'react';
import { ReactTyped } from 'react-typed';
import logo from './csi_logo.png';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-white py-20 px-4 min-h-[80vh]">
      <div className="text-center">
        <img src={logo} alt="CSI Logo" className="w-20 h-20 mx-auto mb-5" />
        <h1 className="text-2xl md:text-5xl font-bold mb-4">
          COMPUTER SOCIETY OF INDIA
        </h1>
        <ReactTyped
          className="text-lg md:text-xl font-semibold"
          strings={['SRMIST DELHI-NCR CAMPUS']}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
    </div>
  );
};

export default Hero;