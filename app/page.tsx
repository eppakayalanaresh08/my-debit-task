// import Image from "next/image";

import HeroBanner from "@/components/sections/HeroBanner";
import Features from "@/components/sections/Features";
import PricingTable from "@/components/sections/PricingTable";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Testimonials from "@/components/sections/Testimonials";
import Benefits from "@/components/sections/Benefits";

export default function Home() {
  return (
    <main>
      <Header/>
      <HeroBanner />
      <Features/>
      
      <PricingTable/>
      <Benefits/>
      
      <Testimonials/>
   
      <Footer/>
    </main>
  );
}
