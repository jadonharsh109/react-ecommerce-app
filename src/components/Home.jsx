import React from "react";
import HeroSection from "../otherComponent/HeroSection";
import Trusted from "../otherComponent/Trusted";
import Services from "../otherComponent/Services";
import FeaturedProductSection from "../otherComponent/FeaturedProductSection";

const Home = () => {
  return (
    <>
      <HeroSection title="HarshCart.com"></HeroSection>
      <FeaturedProductSection />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
