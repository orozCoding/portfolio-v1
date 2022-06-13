import React, { useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import './Header.css'

const Header = () => {

  // Handle header on scroll
  useEffect(() => {
    let header = document.getElementById('header')
    let prevScrollPosition = window.scrollY;
    window.onscroll = () => {
      if (window.scrollY > 80) {
        header.classList.add('moving')
        let currentScrollPosition = window.scrollY;
        if (prevScrollPosition > currentScrollPosition) {
          document.getElementById("header").style.top = "0";
        } else {
          document.getElementById("header").style.top = "-90px";
        }
        prevScrollPosition = currentScrollPosition;
      }

      if (window.scrollY === 0) {
        header.classList.remove('moving')
      }
    }
  }, [])

  return (
    <header id="header" className="header d-flex">
      <p>Logo</p>
      <NavBar />
    </header>
  )
}


export default Header;