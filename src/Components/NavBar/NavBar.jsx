import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from './csi_logo.png';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavFixed(window.scrollY > 70);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflowY = nav ? 'hidden' : 'scroll';
  }, [nav]);

  const handleNav = () => setNav(prev => !prev);

  return (
    <div
      className={`flex items-center justify-between py-3 px-4 md:px-6 ${
        isNavFixed
          ? 'shadow-lg fixed top-0 w-full z-50 backdrop-blur-lg bg-white/30'
          : 'bg-white border-b border-black/20'
      }`}
    >
      <Link to="/">
        <img src={logo} alt="CSI" className="h-12 w-12" />
      </Link>
      <ul className="hidden md:flex items-center gap-4 font-bold text-lg">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/">Events</Link></li>
        <li><Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded">Register</Link></li>
      </ul>

      <div className="md:hidden cursor-pointer z-50" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {nav && (
        <div className="fixed inset-0 bg-white z-40 flex items-center justify-center">
          <ul className="flex flex-col gap-6 text-center">
            <li><Link to="/" onClick={() => setNav(false)}>Home</Link></li>
            <li><Link to="/team" onClick={() => setNav(false)}>Team</Link></li>
            <li><Link to="/" onClick={() => setNav(false)}>Events</Link></li>
            <li>
              <Link to="/register" onClick={() => setNav(false)} className="bg-blue-600 text-white px-4 py-2 rounded">
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;