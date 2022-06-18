import React from "react";
import Social from "../components/Social/Social";
import ContactInfo from "../components/Social/ContactInfo";
import Form from "../components/Form/Form";
import './Contact.css'

const Contact = () => {
  return (
    <section id="section-contact" className="section-contact d-flex">
      <div className="section-contact-left d-flex col">
          <h2>Let's connect</h2>
        <div className="contact-socials d-flex col">
        <h3>Social Links</h3>
          <Social />
        </div>
        <div className="contact-resume d-flex col">
          <h3>Resume</h3>
          <a className="resume-btn d-flex click"
          href='https://drive.google.com/file/d/15HuFyk5dGVYiKsEPJeqg9k7j1XGW1bRs/view?usp=sharing'
          target="_blank" rel="noreferrer"
          >
            <img src="./icons/googledrive.svg" alt="Google Drive" />
            <p>Download Resume</p>
          </a>
        </div>
        <div className="contact-info d-flex col">
          <h3>Contact Info</h3>
          <ContactInfo />
        </div>
      </div>
      <div className="section-contact-right d-flex col">
        <h2>Get in touch!</h2>
        <Form />
      </div>
    </section>
  )
}

export default Contact;