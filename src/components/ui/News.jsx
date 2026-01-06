import React from "react";

import newsT1 from "../../assets/news-t1.jpg";
import newsT2 from "../../assets/news-t2.jpg";
import newsT3 from "../../assets/news-t3.jpg";
import newsTh1 from "../../assets/news-th1.jpg";
import newsTh2 from "../../assets/news-th2.jpg";

const News = () => {
  return (
    <section className="news-sec">
      <div className="container">
        <h2 className="sub-title text-white text-center mb-4">LATEST NEWS</h2>
        <div className="row">
          <div className="col-lg-4">
            <div className="news-list-wrap">
              <div className="news-list">
                <div className="news-img">
                  <img src={newsT1} alt="" />
                </div>
                <div className="news-head">
                  <span className="news-date">29-09-2022</span>
                  <h4>A comprehensive range of products and services</h4>
                </div>
              </div>
              <div className="news-list">
                <div className="news-img">
                  <img src={newsT2} alt="" />
                </div>
                <div className="news-head">
                  <span className="news-date">29-09-2022</span>
                  <h4>A comprehensive range of products and services</h4>
                </div>
              </div>
              <div className="news-list">
                <div className="news-img">
                  <img src={newsT3} alt="" />
                </div>
                <div className="news-head">
                  <span className="news-date">29-09-2022</span>
                  <h4>A comprehensive range of products and services</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-sm-6">
                <div className="lg-news">
                  <div className="lg-news-img">
                    <img src={newsTh1} alt="" />
                  </div>
                  <div className="lg-news-head">
                    <span className="news-date">29-09-2022</span>
                    <h4>Advanced technology and cutting-edge procedures</h4>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="lg-news">
                  <div className="lg-news">
                    <div className="lg-news-img">
                      <img src={newsTh2} alt="" />
                    </div>
                    <div className="lg-news-head">
                      <span className="news-date">29-09-2022</span>
                      <h4>Advanced technology and cutting-edge procedures</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
