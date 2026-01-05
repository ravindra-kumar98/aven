import { ChevronRight } from "lucide-react";
import React from "react";

import tankImg from "../../assets/stock-photo-isolated.jpg";

const WeServe = () => {
  return (
    <section className="we-serve-sec">
      <div className="container">
        <div className="we-text-img-wrap">
          <div className="we-text-content">
            <div>
              <span className="title-f">Markets We Serve</span>
              <h2 className="sub-title">LAND MOBILITY</h2>
              <p className="desc">
                In an age of persistent warfare, hybrid threats, and resource
                limitations, today’s ground forces run more advanced, diverse,
                and networked structures than ever before, with problems
                continuing to expand and change. We facilitate armies with
                integrated solutions to maximize their potential through
                sophisticated systems and best-in-class technologies.
              </p>
              <button className="visit-btn">
                <ChevronRight size={30} />
              </button>
            </div>
            <div className="we-serv-count">
              <span className="count">100+</span>
              <span className="dlivered">Tanks Delivered</span>
            </div>
          </div>
          <div>
            <img src={tankImg} alt="Tank" className="tank-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeServe;
