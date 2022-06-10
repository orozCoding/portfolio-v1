import React from "react"
import items from "./MenuItems"

const NavBar = () => {
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
    <div>
      <p>Hello from NavBar</p>
      <ul>
        {renderItems()}
      </ul>
    </div>
  )
}

export default NavBar;