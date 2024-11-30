import React from 'react';
import img from '@/public/hero02.webp'
import domain from '@/public/37576.webp'
import DNSChecker from '@/public/ip-checker.webp'
import wordpress from '@/public/wordpress.webp'
import shopify from '@/public/shopify.webp'
import hosting from '@/public/hosting.webp'


import Image from 'next/image';
const tools = [
  {
    title: 'IP Lookup',
    description: 'Tool to find information about IP addresses.',
    imageUrl: img, // Placeholder image URL
  },
  {
    title: 'Domain Checker',
    description: 'Check the availability and information about domains.',
    imageUrl: domain, // Placeholder image URL
  },
  {
    title: 'DNS Checker',
    description: 'Tool to analyze DNS records for a domain.',
    imageUrl: DNSChecker, // Placeholder image URL
  },
  {
    title: 'WordPress Theme Detector',
    description: 'Detect the WordPress theme used by a website.',
    imageUrl: wordpress, // Placeholder image URL
  },
  {
    title: 'Shopify Theme Detector',
    description: 'Identify the Shopify theme used by a store.',
    imageUrl: shopify, // Placeholder image URL
  },
  {
    title: 'Hosting Checker',
    description: 'Find out which hosting service a website is using.',
    imageUrl: hosting, // Placeholder image URL
  },
];

const Tools = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 mt-12">
      <h2 className="text-3xl font-extrabold text-center text-green-600 mb-8">More Tools</h2>
      <div className="flex flex-wrap">
        {tools.map((tool, index) => (
          <div key={index} className="w-full md:w-6/12 lg:w-4/12 px-4 mb-8">
            <div className=" relative w-full h-[250px] p-6">
              <Image
                alt={tool.title}
                src={tool.imageUrl}
                fill
                className="rounded-2xl max-w-full h-auto align-middle border-none mb-4"
              />             
            </div>
            <h3 className="text-xl text-center font-semibold mt-4">{tool.title}</h3>
            <p className="text-gray-700 font-thin text-center">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
