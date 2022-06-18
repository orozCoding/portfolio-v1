import React from "react";
import './ContactInfo.css'

const ContactInfo = () => {

  const info = [
    {
      t: 'Number',
      i: 'bi bi-telephone-fill',
      d: '+584128654729',
      u: 'tel:+584128654729'
    },
    {
      t: 'Email',
      i: 'bi bi-envelope-fill',
      d: 'orozcoding@gmail.com',
      u: 'mailto:orozcoding@gmail.com'
    }
  ]

  return (
    <div>{info.map((item) => (
      <div className="contact-info-box d-flex" key={info.indexOf(item) + 1}>
        <i className={item.i} />
        <strong><p>{item.t}:</p></strong>
        <a 
        className="contact-info-link click"
        href={item.u} target="_blank" rel="noreferrer">{item.d}</a>
      </div>
    ))}</div>
  )
}

export default ContactInfo;