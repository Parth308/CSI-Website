import React from 'react';
import Card from './Card';

const Faculty = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto px-4">
      <Card post={'Dept. of CSE'} linkedin={'fff'} />
      <Card post={'Dept. of CSE'} linkedin={'fff'} />
      <Card post={'Dept. of CSE'} linkedin={'fff'} />
      <Card post={'Dept. of CSE'} linkedin={'fff'} />
    </div>
  );
};

export default Faculty;