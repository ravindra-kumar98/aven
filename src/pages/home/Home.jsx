import React from "react";
import WeServe from "../../components/ui/WeServe";
import Features from "../../components/ui/Features";
import OurUsp from "../../components/ui/OurUsp";
import Service from "../../components/ui/Service";
import About from "../../components/ui/About";
import GlobalFootPrint from "../../components/ui/GlobalFootPrint";
import News from "../../components/ui/News";
import GetInTouch from "../../components/ui/GetInTouch";

const Home = () => {
  return (
    <>
      <WeServe />
      <Features />
      <OurUsp />
      <Service />
      <About />
      <GlobalFootPrint />
      <News />
      <GetInTouch />
    </>
  );
};

export default Home;
