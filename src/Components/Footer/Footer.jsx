import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 mb-8">
          {['facebook', 'instagram', 'twitter', 'github'].map((social) => (
            <a key={social} href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">{social}</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="..." clipRule="evenodd" />
              </svg>
            </a>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm">
          © 2024 CSI SRMIST. All rights reserved.
        </p>
      </div>
    </footer>
  );
}