
import Features from "@/components/features/Features";
import Banner from "../../components/banner/Banner";
import { FAQ } from "./../../components/FAQ";
import Hero from "@/Shared/hero/Hero";
import PricingPlans from "./../../components/PricingPlans";
import Newsletters from "@/components/newsletters/Newsletters";
import Testmonial from "@/components/Testmonial/Testmonial";

import Contact from "@/components/contact/Contact";





import OurTeams from "@/components/ourTeams/OurTeams";

const Home = () => {
  return (
    <div>

   
    
      <Banner />
      <Features />
      <OurTeams/>
      <Newsletters />
      <PricingPlans />
      <Testmonial />
      <FAQ />
      <Contact></Contact>


    </div>
  );
};

export default Home;
