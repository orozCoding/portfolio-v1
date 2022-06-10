import React, { useState } from "react"
import items from "./MenuItems"
import './NavBar.css'

const NavBar = () => {
  const [burgerClicked, setBurgerClicked ] = useState(false)
  
  const renderItems = () => {
    return items.map((i, index) => {
      return (
        <li key={index} className={i.cName}>
          <a href={i.url}>
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
      <ul className="nav-list d-flex">
        {renderItems()}
      </ul>
    </div>
  )
}

export default NavBar;