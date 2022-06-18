import React from "react";
import socialLinks from "./socialLinks";
import './Social.css'

const Social = () => {

  return (
    <ul className="social-list d-flex">
      {socialLinks.map((link) => (
        <li className="social-link click d-flex">
          <a href={link.u}
            target="_blank" rel="noreferrer">
            <img src={link.i} alt={link.t.toLocaleLowerCase()} className="social-icon" />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social;