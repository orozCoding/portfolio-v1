import React from "react";
import './Works.css'
import WorksSlices from "../components/Swiper";

const Works = () => {
  return (
    <section id="section-works" className="section-works d-flex">
      <div className="section-works-ctn-left d-flex col">
        <h2>Some of my projects</h2>
        <WorksSlices />
      </div>
      <div className="section-works-ctn-right d-flex col">

      </div>
    </section>
  )
}

export default Works;