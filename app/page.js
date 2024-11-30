import FAQ from "@/components/FAQ";
import IpDetails from "@/components/IpDetails";
import ProtectIP from "@/components/ProtectIP";
import Text from "@/components/Text";
import Tools from "@/components/Tools";
import hero from '@/public/hero02.webp'
import Image from "next/image";

export default function Home() {
  return (
    <>
      <IpDetails />

      <div className="relative  mt-10 flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        {/* Image Column */}
        <div className="w-full relative h-64 lg:w-1/2 lg:h-[500px]">
          <Image
            className="h-full  w-full object-cover"
            src={hero}
            alt="IP Checker"
            fill            
          />
        </div>
        {/* Close Image Column */}

        {/* Text Column */}
        <div className="max-w-lg bg-white shadow-md md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          {/* Text Wrapper */}
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
            Your IP Lookup Tool
            </h2>
            <p className="mt-4">
              Use this tool to find detailed information about your IP address, including location, browser, screen size, and other technical details. This can help you identify your devices geographical and network-related data.
            </p>
            {/* Button Container */}
            <div className="mt-8">
              <a
                href="/ip-lookup"
                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-white py-2 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
              >
                Check My IP
              </a>
            </div>
          </div>
          {/* Close Text Wrapper */}
        </div>
        {/* Close Text Column */}
      </div>

      <ProtectIP />
      <Text />
      <Tools />
      <FAQ />
      
    </>
  );
}
