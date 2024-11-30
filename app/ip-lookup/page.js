'use client'
import FAQ from '@/components/FAQ';
import Loader from '@/components/Loader';
import ProtectIP from '@/components/ProtectIP';
import Text from '@/components/Text';
import Tools from '@/components/Tools';
import React, { useState } from 'react';

// Function to fetch IP details from the API route
const fetchIpDetails = async (ip) => {

 
  const res = await fetch(`https://ipinfo.io/${ip}?token=ff54dabd6117c7`);
  const data = await res.json();
  // console.log(data);
  
  return data;
};

const IpLookup = () => {
  // State for user input and IP data
  const [ipAddress, setIpAddress] = useState('');
  const [ipDetails, setIpDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle form submission
  const handleSearch = async () => {
    if (!ipAddress) return;
    setLoading(true);
    setError('');
    try {
      const data = await fetchIpDetails(ipAddress);
      if (data.error) {
        setError(data.error);
      } else {
        setIpDetails(data);
      }
    } catch (err) {
      setError('An error occurred while fetching data');
    }
    setLoading(false);
  };

  return (
    <>
    <div className="relative h-[400px] bg-gradient-to-tr from-green-500 via-green-600 to-green-700">
      <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          IP Lookup
        </h1>
        <p className="text-gray-300">Find information about any IP address</p>

        {/* Input and search button */}
        <div className="relative p-3 border border-gray-200 rounded-lg w-full max-w-lg">
          <input
            type="text"
            className="rounded-md w-full p-3"
            placeholder="Enter IP address or domain"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSearch}
            className="absolute right-6 top-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>

        {/* Display loading, error, or results */}
        {loading && <Loader />}
        {error && <p className="text-red-500">{error}</p>}

        {/* Display IP Details */}
        {ipDetails && !loading && !error && (
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-800">IP</h2>
              <p className="text-gray-700">{ipDetails.ip}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-800">City</h2>
              <p className="text-gray-700">{ipDetails.city}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-800">Region</h2>
              <p className="text-gray-700">{ipDetails.region}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-800">Country</h2>
              <p className="text-gray-700">{ipDetails.country}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-800">Postal</h2>
              <p className="text-gray-700">{ipDetails.postal}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-800">Timezone</h2>
              <p className="text-gray-700">{ipDetails.timezone}</p>
            </div>
          </div>
        )}
      </div>
    </div>
    <ProtectIP />
      <Text />
      <Tools />
      <FAQ />
</>
  );
};

export default IpLookup;
