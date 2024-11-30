'use client'; // Add this directive to enable client-side rendering

import useIpDetails from '../hooks/useIpDetails';
import useBrowserDetails from '../hooks/useBrowserDetails';
import Loader from './Loader';

const IpDetails = () => {
  const { loading, error, data: ipData } = useIpDetails();
  const { browser, screenSize, cookiesEnabled } = useBrowserDetails();

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

      {/* Table */}
      <table className="w-full bg-zinc-50 rounded-lg shadow-lg">
        <tbody>
          {/* IP Row */}
          <tr className="border-t-2 border-b-2 border-green-600">
            <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2 ">IP</th>
            <td className="p-4 text-lg text-left">{ipData.query}</td>
          </tr>

          {/* City Row */}
          <tr className="border-t-2 border-b-2 ">
            <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2 ">City</th>
            <td className="p-4 text-lg text-left">{ipData.city}</td>
          </tr>

          {/* Region Row */}
          <tr className="border-t-2 border-b-2 ">
            <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2 ">Region</th>
            <td className="p-4 text-lg text-left">{ipData.regionName}</td>
          </tr>

          {/* Country Row */}
          <tr className="border-t-2 border-b-2 ">
            <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2 ">Country</th>
            <td className="p-4 text-lg text-left">{ipData.country}</td>
          </tr>

          {/* Location Row */}
          <tr className="border-t-2 border-b-2 ">
            <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2 ">Location</th>
            <td className="p-4 text-lg text-left">{`${ipData.lat}, ${ipData.lon}`}</td>
          </tr>

          {/* Browser Row */}
          <tr className="border-t-2 border-b-2 ">
            <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2 ">Browser</th>
            <td className="p-4 text-lg text-left">{browser}</td>
          </tr>

          {/* Screen Row */}
          <tr className="border-t-2 border-b-2 ">
            <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2 ">Screen</th>
            <td className="p-4 text-lg text-left">{screenSize}</td>
          </tr>

          {/* Cookies Enabled Row */}
          <tr className="border-t-2 border-b-2 border-green-600">
            <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2 ">Cookies Enabled</th>
            <td className="p-4 text-lg text-left">{cookiesEnabled.toString()}</td>
          </tr>

          {/* Org Row */}
          <tr className="border-t-2 border-b-2 ">
            <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2 ">Org</th>
            <td className="p-4 text-lg text-left">{ipData.org}</td>
          </tr>

          {/* Map Row */}
          <tr className="border-t-2 border-b-2 ">
            <th className="p-4 text-center font-bold text-white bg-green-600 uppercase border-r-2 border-white border-b-2 ">Map</th>
            <td className="p-4 text-left">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${ipData.lat},${ipData.lon}`}
                width="600"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="max-w-full"
                title="Location Map"
              ></iframe>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IpDetails;
