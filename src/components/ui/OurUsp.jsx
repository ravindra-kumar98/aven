import React from "react";
import our_usp_img from "../../assets/our_usp.jpg";

const OurUsp = () => {
  return (
    <section className="our-usp-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 p-0">
            <div className="img-sec">
              <img src={our_usp_img} alt="" />
              <div className="our_usp_card">
                <h3>PROVIDE UNQIUE SOLUTION</h3>
                <p className="desc">
                  Unmatched capabilities to design exclusive solutions for
                  time-sensitive, and mission-critical requirements of the
                  defence and healthcare industry
                </p>
                
              </div>
            </div>
          </div>
          <div className="col-lg-5 p-0">
            <div className="our-left">
              <h2 className="sub-title">OUR USP'S</h2>
              <p className="desc">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet
              </p>
              <div className="text-sin">
                  <span>Provide Unqiue Solution</span>
                </div>
                <ul className="our-usp-list">
                  <li>Utmost Safety</li>
                  <li>Cutting-edge procedures</li>
                  <li>Comprehensive Range</li>
                  <li>Client-specific solutions</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurUsp;
