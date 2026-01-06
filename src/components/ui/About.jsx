import { MoveRight } from "lucide-react";
import React from "react";

import aboutBnr from "../../assets/abt-bnr.jpg";

const About = () => {
  return (
    <section className="abut-sec">
      <div className="img-wrap-bg">
        <img src={aboutBnr} alt="" />
        <div className="container abt-cont">
          <div className="abt-content-wrap">
            <span className="title-f title-abt">About us</span>
            <h2 className="sub-title">DEPENDING ON YOURS NEED</h2>
            <p className="desc">
              Aven is a global engineering and technology solutions company
              dedicated to providing integrated solutions that make the world a
              safer place. We play an instrumental role in transforming nations
              into world-class defense and healthcare destinations, as well as
              supplying global customers with data services, connectivity,
              reliable communications, urban mobility, and other solutions.
            </p>
            <button className="visit-btn bg-transparent border-white text-white">
              <MoveRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
