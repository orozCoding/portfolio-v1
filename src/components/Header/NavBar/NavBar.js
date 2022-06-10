import React, { useState } from "react"
import items from "./MenuItems"
import './NavBar.css'

const NavBar = () => {
  const [burgerClicked, setBurgerClicked] = useState(false)
  const renderItems = () => {
    return items.map((i, index) => {
      return (
        <li key={index} className={i.cName}>
          <a href={i.url}
            onClick={() => {
              if (window.innerWidth <= 600) {
                setBurgerClicked(!burgerClicked)
              }
            }}>
            {i.title}
          </a>
        </li>
      );
    });
  }

  return (
    <div className="nav-ctn d-flex">
      <i className={`nav-burger click
      ${burgerClicked ? 'bi bi-x-lg' : 'bi bi-list'}`}
        onClick={() => setBurgerClicked(!burgerClicked)}></i>
      <ul className={`nav-list d-flex
      ${burgerClicked ? 'active' : ''}`}>
        {renderItems()}
      </ul>
      <div className={`overlay
      ${burgerClicked ? 'active' : ''}`}
        onClick={() => setBurgerClicked(!burgerClicked)}>
      </div>
    </div>
  )
}

export default NavBar;