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
            <div className="icon-box d-flex col">
              <img src="./icons/html5.svg" alt="html5"></img>
              <p>HTML5</p>
            </div>
            <div className="icon-box d-flex col">
              <img src="./icons/css3.svg" alt="css3"></img>
              <p>CSS3</p>
            </div>
            <div className="icon-box d-flex col">
              <img src="./icons/javascript.svg" alt="javascript"></img>
              <p>JavaScript</p>
            </div>
            <div className="icon-box d-flex col">
              <img src="./icons/react.svg" alt="react"></img>
              <p>React</p>
            </div>
            <div className="icon-box d-flex col">
              <img src="./icons/redux.svg" alt="redux"></img>
              <p>Redux</p>
            </div>
            <div className="icon-box d-flex col">
              <img src="./icons/ruby.svg" alt="ruby"></img>
              <p>Ruby</p>
            </div>
            <div className="icon-box d-flex col">
              <img src="./icons/rubyonrails.svg" alt="rubyonrails"></img>
              <p>Rails</p>
            </div>
            <div className="icon-box d-flex col">
              <img src="./icons/postgresql.svg" alt="postgresql"></img>
              <p>PostgreSQL</p>
            </div>
          </div>
        </div>
        <div className="tools-ctn d-flex col">
          <h3>Tools</h3>
          <div className="tools-wrapper d-flex">
            <div className="icon-box d-flex col">
              <img src="./icons/git.svg" alt="git"></img>
              <p>Git</p>
            </div>
            <div className="icon-box d-flex col">
              <img src="./icons/github.svg" alt="github"></img>
              <p>GitHub</p>
            </div>
            <div className="icon-box d-flex col">
              <img src="./icons/postman.svg" alt="postman"></img>
              <p>Postman</p>
            </div>
            <div className="icon-box d-flex col">
              <img src="./icons/bootstrap.svg" alt="bootstrap"></img>
              <p>Bootstrap</p>
            </div>
            <div className="icon-box d-flex col">
              <img src="./icons/googlefonts.svg" alt="googlefonts"></img>
              <p>G Fonts</p>
            </div>
            <div className="icon-box d-flex col">
              <img src="./icons/heroku.svg" alt="heroku"></img>
              <p>Heroku</p>
            </div>
            <div className="icon-box d-flex col">
              <img src="./icons/netlify.svg" alt="netlify"></img>
              <p>Netlify</p>
            </div>
            <div className="icon-box d-flex col">
              <img src="./icons/visualstudiocode.svg" alt="visualstudiocode"></img>
              <p>VS Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works;