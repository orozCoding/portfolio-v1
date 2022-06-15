import React from "react";
import './About.css'

const About = () => {
  return (
    <section id="section-about" className="section-about d-flex">
      <div className="section-about-ctn d-flex">
        <div className="sec-about-left-ctn d-flex col">
          <div className="about-img-ctn d-flex">
            <img src="./picture.png" alt="profile" />
          </div>
        </div>
        <div className="sec-about-right-ctn d-flex col">
          <div className="hello-ctn d-flex col">
            <h2 className="about-hola">¡Hola!</h2>
            <h2> I'm Angel Orozco </h2>
          </div>
          <p>Formerly a Medical Doctor,
            and now a passionate Full-stack developer.
            I love building useful digital products and experiences,
            always focused on a simple and very clean design,
            prioritizing a good user experience.</p>
        </div>
      </div>
    </section>
  )
}

export default About;