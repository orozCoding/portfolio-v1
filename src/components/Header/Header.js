import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import hideHeader from "../helpers";
import './Header.css'

const Header = () => {

  // Handle header on scroll
  useEffect(() => {
    let header = document.getElementById('header')
    let prevScrollPosition = window.scrollY;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 120) {
        header.classList.add('moving')
        let currentScrollPosition = window.scrollY;
        if (prevScrollPosition > currentScrollPosition) {
          document.getElementById("header").style.top = "0";
        } else {
          document.getElementById("header").style.top = "-90px";
        }
        prevScrollPosition = currentScrollPosition;
      }

      if (window.scrollY < 120) {
        header.classList.remove('moving')
      }
    })
  }, [])

  return (
    <header id="header" className="header d-flex">
      <img className="logo-in-header click" src="/logo.png" alt="orozcoding logo"
      onClick={() => {
        window.scrollTo(0 ,0);
      }}
      data-aos="flip-left" data-aos-delay="700"/>
      <NavBar />
    </header>
  )
}


export default Header;