'use client'
import React, { useState } from 'react';

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
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
      <div className="flex flex-col text-left basis-1/2">
        <p className="inline-block font-semibold text-primary mb-4">Insurance FAQ</p>
        <p className="sm:text-4xl text-3xl font-extrabold text-base-content">Frequently Asked Questions</p>
      </div>
      <ul className="basis-1/2">
        {faqData.map((faq) => (
          <li key={faq.id}>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
              aria-expanded={expandedFAQ === faq.id ? "true" : "false"}
              onClick={() => toggleFAQ(faq.id)}
            >
              <span className="flex-1 text-base-content">{faq.question}</span>
              <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${expandedFAQ === faq.id ? "rotate-90" : ""}`}></rect>
                <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${expandedFAQ === faq.id ? "rotate-0" : ""}`}></rect>
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${expandedFAQ === faq.id ? "max-h-[1000px]" : "max-h-0"} overflow-hidden`}
            >
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
