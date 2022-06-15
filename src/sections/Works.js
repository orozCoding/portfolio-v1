import React from "react";
import './Works.css'
import WorksSlices from "../components/Swiper";

const Works = () => {
  return (
    <section id="section-works" className="section-works d-flex">
      <div className="section-works-ctn-left d-flex col">
        <h2>SOME OF MY PROJECTS</h2>
        <WorksSlices />
      </div>
      <div className="section-works-ctn-right d-flex col">
        <h2>MY STACK</h2>
        <div className="technologies-ctn d-flex col">
          <h3>Technologies</h3>
          <div className="technologies-wrapper d-flex">
            <div>
              <img src="./icons/html5.svg" alt="html5"></img>
            </div>
            <div>
              <img src="./icons/css3.svg" alt="css3"></img>
            </div>
            <div>
              <img src="./icons/javascript.svg" alt="javascript"></img>
            </div>
            <div>
              <img src="./icons/react.svg" alt="react"></img>
            </div>
            <div>
              <img src="./icons/redux.svg" alt="redux"></img>
            </div>
            <div>
              <img src="./icons/ruby.svg" alt="ruby"></img>
            </div>
            <div>
              <img src="./icons/rubyonrails.svg" alt="rubyonrails"></img>
            </div>
            <div>
              <img src="./icons/postgresql.svg" alt="postgresql"></img>
            </div>
          </div>
        </div>
        <div className="tools-ctn d-flex col">
          <h3>Tools</h3>
          <div className="tools-wrapper d-flex">
            <img src="./icons/git.svg" alt="git"></img>
            <img src="./icons/github.svg" alt="github"></img>
            <img src="./icons/postman.svg" alt="postman"></img>
            <img src="./icons/bootstrap.svg" alt="bootstrap"></img>
            <img src="./icons/googlefonts.svg" alt="googlefonts"></img>
            <img src="./icons/heroku.svg" alt="heroku"></img>
            <img src="./icons/netlify.svg" alt="netlify"></img>
            <img src="./icons/visualstudiocode.svg" alt="visualstudiocode"></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works;