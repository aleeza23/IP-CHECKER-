import React from 'react';
import img from '@/public/hero02.webp'
import domain from '@/public/37576.webp'
import DNSChecker from '@/public/ip-checker.webp'
import wordpress from '@/public/wordpress.webp'
import shopify from '@/public/shopify.webp'
import hosting from '@/public/hosting.webp'


import Image from 'next/image';
import Heading from './Heading';
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
    <section className="bg-white mt-20 ">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="flex md:gap-10 flex-wrap md:flex-nowrap">
        <Heading heading="More Tools" text="Explore a variety of tools to enhance your online experience and ensure your digital security." />

        </div>
      </div>
    </section>
  );
};

export default Tools;
