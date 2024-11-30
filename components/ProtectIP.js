import React from 'react';

const protectionTips = [
  {
    id: 1,
    title: "Use a VPN",
    description: "Use a VPN to mask your IP address and secure your online activity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v9m0 0l-4-4m4 4l4-4m-4 4v9" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Enable a Firewall",
    description: "Enable a firewall to block unauthorized access to your network.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10V3h18v7m-18 7v4h18v-4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Keep Your Browser Updated",
    description: "Keep your browser updated to avoid vulnerabilities and protect against malicious sites.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 5l7 7-7 7M21 12H3" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Use Two-Factor Authentication",
    description: "Use Two-Factor Authentication (2FA) for an extra layer of protection for your accounts.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v9m0 0l-4-4m4 4l4-4m-4 4v9" />
      </svg>
    ),
  },
];

const ProtectIP = () => {
  return (
    <section className="py-12 bg-white mt-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-green-600 mb-8">How to Protect Your IP Address</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {protectionTips.map((tip) => (
            <div
              key={tip.id}
              className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-lg"
            >
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-600 transition-all duration-300 group-hover:scale-[10]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-green-600 transition-all duration-300 group-hover:bg-green-500">
                  {tip.icon}
                </span>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <p>{tip.description}</p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <a href="#" className="text-green-600 transition-all duration-300 group-hover:text-white">
                    Learn More &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtectIP;
