import { Mail, MoveUpLeft, MoveUpRight, PhoneCall } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <section className="get-in-touch-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="get-text-wrap">
              <h3 className="sub-title get-title">GET IN TOUCH</h3>
              <p className="desc get-desc">
                For bulk enquiries, please reach out to us
              </p>
              <Link to={"/"} className="get-link">
                Send us a message <MoveUpRight size={16} />
              </Link>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="get-or">
              <span>OR</span>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="get-call-wrap">
              <div className="get-icon">
                <PhoneCall size={28} />
              </div>
              <div className="get-conts">
                <span className="get-c-h">CALL US ON</span>
                <span className="get-cont">+442920470000</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="get-call-wrap mb-0">
              <div className="get-icon">
                <Mail size={28} />
              </div>
              <div className="get-conts">
                <span className="get-c-h">MAIL US</span>
                <span className="get-cont">info@aven.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
