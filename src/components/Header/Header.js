import React from "react";
import NavBar from "./NavBar/NavBar";
import './Header.css'

const Header = () => {
  // const checkWindowSize = () => {
  //   if (window.innerWidth > 600 ) {
  //     console.log('hey');
  // }
  
  
  return (
  <header className="header d-flex">
    <p>Logo</p>
    <NavBar />
  </header>
)}


export default Header;