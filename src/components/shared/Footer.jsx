import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="mb-xl-0 mb-4 col-xl-3 col-md-3 col-6">
            <h4 className="f-head">About Us</h4>
            <ul className="f-list">
              <li>
                <Link to={"/"} className="f-link">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Leadership and Management
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Certificates & Approvals
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Global Foot Prints
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-xl-0 mb-4 col-xl-2 col-md-3 col-6">
            <h4 className="f-head">Industry</h4>
            <ul className="f-list">
              <li>
                <Link to={"/"} className="f-link">
                  Liquid Armour
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Aerospace
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Health Care
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Marine
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Land Mobility
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Personal Protection
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Defence Supplies
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-xl-0 mb-4 col-xl-2 col-md-3 col-6">
            <h4 className="f-head">Services</h4>
            <ul className="f-list">
              <li>
                <Link to={"/"} className="f-link">
                  Transactional
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Economical Analysis
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Strategic Communication
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Defence Systems
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Healthcare Consulting
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Technology Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-xl-0 mb-4 col-xl-2 col-md-3 col-6">
            <h4 className="f-head">Quick Links</h4>
            <ul className="f-list">
              <li>
                <Link to={"/"} className="f-link">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to={"/"} className="f-link">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-xl-0 mb-4 col-xl-3 col-lg-12 col-12">
            <div className="row">
              <div className="col-xl-12 col-md-3 col-6">
                <h4 className="f-head">Other Links</h4>
                <ul className="f-list">
                  <li>
                    <Link to={"/"} className="f-link">
                      News & Events
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="f-link">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-12 col-md-3 col-6">
                <div className="social-links-wrap">
                  <h4 className="f-head">Follow Us</h4>
                  <ul className="social-links">
                    <li>
                      <Link to={"/"} className="s-link">
                        <Facebook />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"} className="s-link">
                        <Twitter />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"} className="s-link">
                        <Youtube />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"} className="s-link">
                        <Instagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="copy-right-sec">
              <span>Copyright 2023 @ Aven Ltd | all rights reserved.</span>
              <span>Website Design and Development by Sterco</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
