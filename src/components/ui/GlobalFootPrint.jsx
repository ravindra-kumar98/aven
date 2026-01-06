import React from 'react'
import GlobalFPrint from '../../assets/global_feet.jpg'
import { ChevronRight } from 'lucide-react'
const GlobalFootPrint = () => {
  return (
    <section className="global-sec">
      <div className="container">
        <div className="gl-text-img-wrap">
          <div className="gl-text-content">
            <div>
              {/* <span className="title-f">Markets We Serve</span> */}
              <h2 className="sub-title">GLOBAL <br/> FOOTPRINT</h2>
              <p className="desc">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              </p>
        
            </div>
            <div className="gl-serv-count">
              <span className='across'>Across</span>
              <span className="count">50+</span>
              <span className="dlivered">Countries</span>
            </div>
          </div>
          <div>
            <img src={GlobalFPrint} alt="Aven" className="gl-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalFootPrint