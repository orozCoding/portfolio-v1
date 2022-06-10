import React, { useState } from "react"
import items from "./MenuItems"
import './NavBar.css'

const NavBar = () => {
  const [burgerClicked, setBurgerClicked] = useState(false)


  const scrollTo = (id) => {
    const ref = document.getElementById(`${id}`)
    ref.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }


  const renderItems = () => {
    return items.map((i, index) => {
      return (
        <li key={index} className={i.cName}
          onClick={() => {
            if (window.innerWidth <= 600) {
              setBurgerClicked(!burgerClicked)
            }
            scrollTo(i.ref)
          }}>
          {i.title}

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