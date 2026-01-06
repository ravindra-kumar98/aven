import { MoveRight } from "lucide-react";
import React from "react";

const Service = () => {
  return (
    <section className="service-sec">
      <div className="container src-h-100">
        <div className="d-flex justify-content-center flex-column h-100">
          <span className="title-f s-bnr-text">Services we offer</span>
          <h2 className="sub-title s-bnr-h text-white">STRATEGIC <br /> COMMUNICATION</h2>
          <p className="desc text-white">
            Gives services in articulating roles, communication services in
            defence.
          </p>
          <button className="visit-btn bg-transparent border-white text-white">
            <MoveRight size={30} />
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-lg-2 col-4 p-0 src-col">
                <h4 className="src-h active">Strategic Communication</h4>
            </div>
            <div className="col-lg-2 col-4 p-0 src-col">
                <h4 className="src-h">Transactional</h4>
            </div>
            <div className="col-lg-2 col-4 p-0 src-col">
                <h4 className="src-h">Economical Analysis Service</h4>
            </div>
            <div className="col-lg-2 col-4 p-0 src-col">
                <h4 className="src-h">Defence Based Consulting</h4>
            </div>
            <div className="col-lg-2 col-4 p-0 src-col">
                <h4 className="src-h">Healthcare Procurement</h4>
            </div>
            <div className="col-lg-2 col-4 p-0 src-col">
                <h4 className="src-h">Technology Consulting</h4>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
