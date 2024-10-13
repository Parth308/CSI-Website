import React, { useState, useEffect } from 'react';
import Card from '../Faculty/Card';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

export default function Team() {
  const [current, setCurrent] = useState(true);
  const [currentLeads, setCurrentLeads] = useState([]);
  const [pastLeads, setPastLeads] = useState([]);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setCurrentLeads(data.currentLeads);
        setPastLeads(data.pastLeads);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  function handlePast() {
    setCurrent(false);
  }

  function handleCurrent() {
    setCurrent(true);
  }

  const displayedLeads = current ? currentLeads : pastLeads;

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <div className='container mx-auto px-4 py-8 flex flex-col items-center justify-center gap-8'>
          <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-center py-4 bg-gradient-to-r from-cyan-400 to-blue-700 inline-block text-transparent bg-clip-text'>
            Meet the Faculty
          </h1>

          <div className='flex items-center justify-center bg-gray-200 rounded-md p-1'>
            <button
              className={`px-3 py-1 rounded-md font-medium text-sm md:text-base transition-colors duration-200 ${
                !current ? 'bg-white text-black' : 'bg-transparent text-gray-500'
              }`}
              onClick={handlePast}
            >
              Past
            </button>
            <button
              className={`px-3 py-1 rounded-md font-medium text-sm md:text-base transition-colors duration-200 ${
                current ? 'bg-white text-black' : 'bg-transparent text-gray-500'
              }`}
              onClick={handleCurrent}
            >
              Current
            </button>
          </div>

          {loading ? (
            <div className="text-center text-gray-500">Loading...</div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl'>
              {displayedLeads.length > 0 ? (
                displayedLeads.map(lead => (
                  <Card
                    key={lead.id}
                    name={lead.title}
                    post={lead.subtitle}
                    image={lead.imageUrl}
                    linkedin={lead.linkedin}
                    github={lead.github}
                  />
                ))
              ) : (
                <div className='col-span-full text-center text-gray-500'>
                  Data not available
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}