
import React from 'react';

const Reels = () => {


  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="flex items-center mb-2">
        <img
          src='https://images.pexels.com/photos/18701746/pexels-photo-18701746/free-photo-of-woman-sitting-in-a-bamboo-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='pic'
          className="w-10 h-10 rounded-full mr-2"
        />
        <span className="text-gray-700">turag</span>
      </div>
      <div className="relative overflow-hidden rounded-md">
        <img src='https://images.pexels.com/photos/18701746/pexels-photo-18701746/free-photo-of-woman-sitting-in-a-bamboo-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Story" className="w-full h-full object-cover" />

        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent text-white">
          <span>10 pm</span>
        </div>
      </div>
    </div>
  );
};

export default Reels;
