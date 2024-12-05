import React from 'react';
import Heading from './Heading';
import Card from './Card';
import image01 from '@/public/tokyo-magnifier-web-search-with-elements 2.png';
import image02 from '@/public/tokyo-selecting-a-value-in-the-browser-window 1.png';
import image03 from '@/public/Illustration (1).png';
import image04 from '@/public/Illustration (2).png';
import image05 from '@/public/Illustration.png';
import image06 from '@/public/tokyo-sending-messages-from-one-place-to-another 1.png';
import Text from './Text';

const ProtectIP = ({ipDetails}) => {
  return (
    <section className={`bg-white md:mt-5`}> {/* Add margin-top */}
      <div className="max-w-screen-xl mx-auto mt-auto px-6 md:px-12 ">
        <div className="flex md:gap-10 flex-wrap md:flex-nowrap">
          <Heading heading="How to Protect Your IP Address" text="Discover the best practices to secure your IP address and enhance your online privacy." />
        </div>

        {/* cards */}
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            <Card heading="Use a VPN" imageUrl={image01} bg="bg-gray-100" textBg="bg-blue-400" textColor={'text-gray-500'} text="Use a VPN to mask your IP address and secure your online activity." />
            <Card heading="Enable a Firewall" imageUrl={image02} bg="bg-blue-500" textBg="bg-white" textColor={'text-white'} text="Enable a firewall to block unauthorized access to your network." />
            <Card heading="Keep Browser Updated" imageUrl={image05} bg="bg-[#000000]" textBg="bg-white" textColor={'text-white'} text="Keep your browser updated to avoid vulnerabilities." />
            <Card heading="Use Two-Factor Authentication" imageUrl={image06} bg="bg-gray-100" textBg="bg-blue-400" text="Use (2FA) for extra layer of protection." />
            <Card heading="Change Passwords" imageUrl={image03} bg="bg-blue-500" textColor={'text-white'} textBg="bg-white" text="Regularly update your passwords to maintain security." />
            <Card heading="Beware of Phishing Scams" imageUrl={image04} bg="bg-[#000000]" textColor={'text-white'} textBg="bg-blue-400" text="Protect your personal information." />
          </div>
        </div>

        <Text />
      </div>
    </section>
  );
};

export default ProtectIP;
