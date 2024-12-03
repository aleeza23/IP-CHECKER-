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
      <ProtectIP />     
      {/* <Tools /> */}
      <FAQ />
      
    </>
  );
}
