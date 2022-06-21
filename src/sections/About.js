import React from "react";
import './About.css'

const About = () => {
  return (
    <section id="section-about" className="section-about d-flex">
      <div className="section-about-ctn d-flex">
        <div className="section-about-left-ctn d-flex col">
          <div className="about-img-ctn d-flex" data-aos="flip-down" data-aos-delay="500" >
            <img src="./picture.png" alt="profile" />
          </div>
        </div>
        <div className="section-about-right-ctn d-flex col" data-aos="fade-left" data-aos-delay="400">
          <div className="hello-ctn d-flex col">
            <h2 className="about-hola">¡Hola!</h2>
            <h2> I'm Angel Orozco </h2>
          </div>
          <p>Formerly a Medical Doctor,
            and now a Full-stack web developer and open-source enthusiast with a love for 
            clean code and accessible design. Pair-programming and remote work aficionado. 
            Fluent in multiple languages, frameworks, and technologies.</p>
        </div>
      </div>
    </section>
  )
}

export default About;