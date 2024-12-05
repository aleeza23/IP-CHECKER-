'use client'
import Image from 'next/image'; // Import Image component from next/image
import mapImage from '@/public/32540-4-technology-hd 1.png';
import useIpDetails from '@/hooks/useIpDetails';

const IPLocation = () => {
    const { data: ipData } = useIpDetails();

    return (
        <section className="container mt-10 px-4 md:px-12 mx-auto">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
                <div className="w-full sm:w-1/2 pr-0  mb-8 sm:mb-0">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        What is your IP address location?
                    </h2>
                    <p className="text-lg text-gray-700">
                        Your IP address location is the portion of your IP address that allows for identification of the geographic location of your computer. If you are using a proxy server or a router, then the location of the server or router is identified. In most instances, the specific street address of your location is not revealed, but instead, the city, state or general area is shown. However, there are exceptions and for those who are talented with computers and the internet, it is possible to discover your exact location. This particular ability is known as geolocation and is very popular in the marketing world.
                    </p>

                    <p className="text-lg mt-7 text-gray-700">
                        Apart from the usual IP addresses, there are also virtual ones. A virtual IP address (VIP or VIPA) is an IP that isn’t related to a particular physical location. These public VIPs can be shared by numerous devices connected to the internet and are common in home or office networks.
                    </p>
                </div>

                <div className="w-full sm:w-1/2 relative mx-auto">
                    {/* Image container with relative positioning */}
                    <div className="relative mx-auto w-full h-[400px] md:h-[650px]">
                        <Image
                            src={mapImage} // Using next/image for optimized image loading
                            alt="World Map"
                            className="w-full mx-auto h-auto  rounded-lg"                                                       
                            fill
                        />

                        {/* Textbox with absolute positioning on top of the image */}
                        <div className="absolute top-[30%] md:left-16 bg-white p-2 rounded-lg shadow-lg max-w-[300px] sm:max-w-[350px]">
                            <p className="text-lg font-bold text-gray-900">Hello 👋 We see you are in {ipData?.city}, {ipData?.country}.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IPLocation;
