import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Swiper images
import hero1 from "../../assets/hero_1.jpg";
import hero2 from "../../assets/hero_2.jpg";
import { Menu, X } from "lucide-react";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="/aven.png" alt="brand logo" className="logo_img" />
            </Link>
            <button
              className="menu-mobile d-lg-none d-block"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <Menu />
            </button>
            <div className="d-lg-flex d-none">
              <div className="navbar-nav ms-auto">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/">
                  About Us
                </Link>
                <Link className="nav-link" to="/">
                  Industry
                </Link>
                <Link className="nav-link" to="/">
                  Services
                </Link>
                <Link className="nav-link" to="/">
                  Career
                </Link>
                <Link className="nav-link" to="/">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="hero-swiper"
        >
          <SwiperSlide>
            <div
              className="hero-slide slide-1"
              style={{ backgroundImage: `url(${hero1})` }}
            >
              <div className="container d-flex  align-items-end flex-column">
                <h3>Aven</h3>
                <h1>PASSIONATE ABOUT SAVING LIVES</h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero-slide slide-2"
              style={{ backgroundImage: `url(${hero1})` }}
            >
              <div className="container d-flex  align-items-end flex-column">
              <h3>Aven</h3>
                <h1>ADVANCED SECURITY SOLUTIONS</h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero-slide slide-3"
              style={{ backgroundImage: `url(${hero1})` }}
            >
              <div className="container d-flex  align-items-end flex-column">
              <h3>Aven</h3>
                <h1>PROTECTING WHAT MATTERS MOST</h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero-slide slide-2"
              style={{ backgroundImage: `url(${hero1})` }}
            >
              <div className="container d-flex  align-items-end flex-column">
              <h3>Aven</h3>
                <h1>ADVANCED SECURITY SOLUTIONS</h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </header>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          {/* <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Offcanvas right
          </h5> */}
          <div>
          <Link className="navbar-brand" to="/">
              <img src="/aven.png" alt="brand logo" className="m-logo_img" />
            </Link>
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <X size={28} />
          </button>
        </div>
        <div className="offcanvas-body p-0">
        <ul className="navbar-nav justify-content-end flex-grow-1">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/'}>About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/'}>Industry</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/'}>Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/'}>Career</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/'}>Contact Us</Link>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
