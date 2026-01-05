import React from "react";

import feat1 from "../../assets/feat-1.png";
import feat2 from "../../assets/feat-2.png";
import feat3 from "../../assets/feat-3.png";
import feat4 from "../../assets/feat-4.png";
import feat5 from "../../assets/feat-5.png";
import feat6 from "../../assets/feat-6.png";
import feat7 from "../../assets/feat-7.png";

const Features = () => {
  return (
    <section className="feat-sec">
      <div className="container">
        <div className="feat-wrap row">
          <div className="col p-0">
            <div className="feat-c active-feat">
              <div className="feat-icon">
                <img src={feat1} alt="Aven" />
              </div>
              <p>Land Mobility</p>
            </div>
          </div>
          <div className="col p-0">
            <div className="feat-c">
              <div className="feat-icon">
                <img src={feat2} alt="Aven" />
              </div>
              <p>Land Mobility</p>
            </div>
          </div>
          <div className="col p-0">
            <div className="feat-c">
              <div className="feat-icon">
                <img src={feat3} alt="Aven" />
              </div>
              <p>Land Mobility</p>
            </div>
          </div>
          <div className="col p-0">
            <div className="feat-c">
              <div className="feat-icon">
                <img src={feat4} alt="Aven" />
              </div>
              <p>Land Mobility</p>
            </div>
          </div>
          <div className="col p-0">
            <div className="feat-c">
              <div className="feat-icon">
                <img src={feat5} alt="Aven" />
              </div>
              <p>Land Mobility</p>
            </div>
          </div>
          <div className="col p-0">
            <div className="feat-c">
              <div className="feat-icon">
                <img src={feat6} alt="Aven" />
              </div>
              <p>Land Mobility</p>
            </div>
          </div>
          <div className="col p-0">
            <div className="feat-c">
              <div className="feat-icon">
                <img src={feat7} alt="Aven" />
              </div>
              <p>Land Mobility</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
