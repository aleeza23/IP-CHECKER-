'use client'
import React, { useState, useEffect } from 'react';
import Heading from './Heading';

const faqData = [
  {
    id: 1,
    question: "How secure is my insurance information?",
    answer: "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
  },
  {
    id: 2,
    question: "How can I customize my insurance coverage?",
    answer: "Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.",
  },
  {
    id: 3,
    question: "Is there a waiting period for insurance claims?",
    answer: "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.",
  },
  {
    id: 4,
    question: "How can I protect my IP address?",
    answer: "You can protect your IP address by using a VPN, enabling a firewall, and keeping your software updated. These steps help mask your IP, block unauthorized access, and secure your online activity.",
  },
  {
    id: 5,
    question: "What is an IP address and why is it important?",
    answer: "An IP address is a unique string of numbers that identifies your device on the internet. It's important because it can be used to track your online activity, and securing it helps maintain your privacy and security online.",
  },
  {
    id: 6,
    question: "Can I hide my IP address?",
    answer: "Yes, you can hide your IP address by using a VPN or a proxy server. These tools mask your real IP address by routing your internet connection through a server in a different location.",
  },
];

const FAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(1); // Open the first FAQ by default

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="flex md:gap-10 flex-wrap md:flex-nowrap">
          <Heading heading="Frequently Asked Questions" text="Find answers to common questions about our services and tools, and learn how to make the most out of them." />
        </div>
        <div className="container mx-auto mt-10 ">
          <ul className="basis-1/2">
            {faqData.map((faq, index) => (
              <li
                key={faq.id}
                className={`border border-black border-b-4 rounded-3xl mb-4 shadow-md px-10 py-3 ${expandedFAQ === faq.id ? "bg-blue-500 text-white" : "bg-gray-100"}`}
              >
                <button
                  className="relative flex gap-3 items-center w-full py-5 text-base font-semibold text-left md:text-lg"
                  aria-expanded={expandedFAQ === faq.id ? "true" : "false"}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <span className=" hidden md:block font-medium">{`0${index + 1}`}</span>
                  <span className="flex-1 text-base-content">{faq.question}</span>
                  <div className={`rounded-full border ${expandedFAQ === faq.id ? "border-white" : "border-black"} w-8 h-8 flex items-center justify-center`}>
                    <span className="text-xl">{expandedFAQ === faq.id ? "-" : "+"}</span>
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${expandedFAQ === faq.id ? "max-h-[1000px] pb-5" : "max-h-0"} overflow-hidden`}
                >
                  <div className="text-base text-white font-light leading-normal border-t border-white pt-8 ">{faq.answer}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
