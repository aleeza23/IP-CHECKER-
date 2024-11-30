import React from 'react';

const Text = () => {
  return (
    <blockquote className="flex flex-col items-center p-4">
      <div className='bg-green-500 px-16 py-24 rounded-lg text-white'>
        <h2 className="text-3xl font-extrabold text-center  mb-8">What is an IP Address?</h2>
        <p className="max-w-4xl text-xl font-thin text-center md:text-2xl lg:text-2xl">
          An IP address Internet Protocol address is a unique identifier assigned to each device connected to a network, whether it is the internet or a local network. It serves as a way for devices to communicate with each other and route data across the internet.
        </p>
      </div>
    </blockquote>
  );
};

export default Text;
