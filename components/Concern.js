import Heading from "./Heading";

export const Concern = ({ipDetails}) => {
    const concerns = [
      {
        title: "Privacy Concerns",
        description: "I want to ensure my personal data is safe while using the internet, protecting my privacy from potential misuse.",
        icon: "M29 13 L14 29 L25 29 L23 39 L38 23 L27 23",
      },
      {
        title: "Data Security",
        description: "I want to make sure my sensitive information is securely stored and that my data is not exposed to cyber threats.",
        icon: "M29 13 L14 29 L25 29 L23 39 L38 23 L27 23",
      },
      {
        title: "Online Scams",
        description: "I want to be cautious and avoid falling for online scams and fraudulent activities while browsing the internet.",
        icon: "M29 13 L14 29 L25 29 L23 39 L38 23 L27 23",
      },
      {
        title: "Cyberbullying",
        description: "I want to protect myself from cyberbullying and ensure that my online interactions remain positive and respectful.",
        icon: "M29 13 L14 29 L25 29 L23 39 L38 23 L27 23",
      },
      {
        title: "Fake News",
        description: "I want to avoid the spread of fake news and ensure the information I consume on the internet is accurate and trustworthy.",
        icon: "M29 13 L14 29 L25 29 L23 39 L38 23 L27 23",
      },
      {
        title: "Internet Addiction",
        description: "I want to manage my screen time and avoid becoming addicted to the internet, maintaining a healthy balance.",
        icon: "M29 13 L14 29 L25 29 L23 39 L38 23 L27 23",
      },
    ];
  
    return (
      <div className={`px-4 pt-10  mx-auto sm:max-w-xl md:max-w-full ${ipDetails && 'mt-[32rem] md:mt-0' } lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10`}>
        <div className="flex md:gap-10 flex-wrap md:flex-nowrap">
        <Heading heading='Biggest concerns about using the internet?' text='As we spend more time online, concerns regarding privacy, security, and the authenticity of information grow.' />
        </div>
        <div className="grid mt-10 row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {concerns.map((concern, index) => (
            <div 
              key={index} 
              className={`p-8 ${index >= 3 ? 'lg:border-r border-b sm:border-b-0' : 'border-b sm:border-r'}`}
            >
              <div className="max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                <svg
                className="w-8 h-8 text-blue-500 sm:w-12 sm:h-12"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">{concern.title}</h6>
                <p className="mb-3 text-sm text-gray-900">{concern.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Concern;
  