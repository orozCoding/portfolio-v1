import React from "react"
import items from "./MenuItems"

const NavBar = () => {
  const renderItems = () => {
    return items.map((i) => {
      return (
        <li key={items.indexOf(i)} className={i.cName}>{i.title}</li>
      )
    })
  }

  return (
    <div>
      <p>Hello from NavBar</p>
      <ul>
        <li>First el</li>
        {renderItems()}
      </ul>
    </div>
  )
}

export default NavBar;