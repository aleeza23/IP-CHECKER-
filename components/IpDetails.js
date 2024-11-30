'use client'; 

import useIpDetails from '../hooks/useIpDetails';
import useBrowserDetails from '../hooks/useBrowserDetails';
import Loader from './Loader';

const IpDetails = () => {
  const { loading, error, data: ipData } = useIpDetails();
  const { browser, screenSize, cookiesEnabled } = useBrowserDetails();
  // console.log('ipdata', ipData);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="container mt-10 mx-auto p-4 min-h-[300px]">
      {/* Heading and Paragraph */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-green-600">IP Details</h2>
        <p className="md:w-[50%] mx-auto w-full font-thin text-gray-600 mt-2 leading-tight">
          Here is the detailed information of your IP address, browser, and screen. The information is gathered for better understanding of the device and location. Explore the data below to learn more about the technical details.
        </p>
      </div>

      {/* Scrollable Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full bg-zinc-50 rounded-lg shadow-lg min-w-[600px]">
          <tbody>
            {/* IP Row */}
            <tr className="border-t-2 border-b-2 border-green-600">
              <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2">IP</th>
              <td className="p-4 text-lg text-left break-all">{ipData.ip}</td>
            </tr>

            {/* City Row */}
            <tr className="border-t-2 border-b-2 border-green-600">
              <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2">City</th>
              <td className="p-4 text-lg text-left">{ipData.city || 'N/A'}</td>
            </tr>

            {/* Capital Row */}
            <tr className="border-t-2 border-b-2 border-green-600">
              <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2">Capital</th>
              <td className="p-4 text-lg text-left">{ipData?.region}</td>
            </tr>

            {/* Country Row */}
            <tr className="border-t-2 border-b-2 border-green-600">
              <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2">Country</th>
              <td className="p-4 text-lg text-left">{ipData.country}</td>
            </tr>

            {/* Location Row */}
            <tr className="border-t-2 border-b-2 border-green-600">
              <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2">Postal</th>
              <td className="p-4 text-lg text-left">{`${ipData.postal}`}</td>
            </tr>

            {/* Browser Row */}
            <tr className="border-t-2 border-b-2 border-green-600">
              <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2">Browser</th>
              <td className="p-4 text-lg text-left">{browser}</td>
            </tr>

            {/* Screen Row */}
            <tr className="border-t-2 border-b-2 border-green-600">
              <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2">Screen</th>
              <td className="p-4 text-lg text-left">{screenSize}</td>
            </tr>

            {/* Cookies Enabled Row */}
            <tr className="border-t-2 border-b-2 border-green-600">
              <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2">Cookies Enabled</th>
              <td className="p-4 text-lg text-left">{cookiesEnabled.toString()}</td>
            </tr>

            {/* Continent Row */}
            <tr className="border-t-2 border-b-2 ">
              <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2">Timezone</th>
              <td className="p-4 text-lg text-left">{ipData.timezone}</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IpDetails;
