import React from "react"
import items from "./MenuItems"

const NavBar = () => {
  const renderItems = () => {
    return items.map((i) => {
      return (
        <a href={i.url}>
          <li key={items.indexOf(i)} className={i.cName}>
            {i.title}
          </li>
        </a>
      )
    })
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