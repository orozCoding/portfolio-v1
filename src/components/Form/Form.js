import React, { useState } from "react";
import './Form.css';

const Form = () => {
  const [ errors, setErrors ] = useState({});
  const [formSent , setFormSent ] = useState(false);

  const validateForm = (form) => {
    const values = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    }

    const {name, message, email } = values;

    const errors = {
      name: null,
      email: null,
      message: null,
    };

    const nameRegExp = /[a-zA-ZáéíóúÁÉÍÓÚ]+/g
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g

    if(name === '' || name === null || name === undefined ||  !nameRegExp.test(name)) {
      errors.name = 'Please enter a valid name';
    }

    if(email === '' || email === null || email === undefined || !emailRegExp.test(email) ) {
      errors.email = 'Please enter a valid email';
    }

    if(message === '' || message === null || message === undefined || message.length < 3) {
      errors.message = 'Please enter a valid name';
    }
    
    return errors;
  }

  const clearInputs = (form) => {
    const arr = Array.from(form)
    arr.forEach((item) => {
      item.value = '';
    })
  }

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
  
  const postForm = (submission) => {
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "reach", ...submission }),
    })
      .then((resp) => console.log(resp))
      .catch((error) => alert(error));
  };

  const sendForm = (form, submission) => {
    const errors = validateForm(form);
    if (errors.name === null && errors.email === null && errors.message === null) {
      setFormSent(true);
      clearInputs(form);
      postForm(submission);
      return true;
    }
    setFormSent(false);
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target

    const submission = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    }

    setErrors(validateForm(form));

    return sendForm(form,submission);
  }

  return (
    <form id="form"
    className="form d-flex col" 
    method="POST"
    onSubmit={handleSubmit}
    noValidate
    name="reach"
    data-aos='flip-right' data-aos-delay='100' >
      <input type="hidden" name="form-name" value="contact" />
      {formSent && <p className="msg-sent">Message sent! I'll get back to you shortly.</p> }
      <label className="form-label d-flex col">
        <strong className="form-text">Name:</strong>
        {errors.name && <p className="error-text">{errors.name}</p>}
        <input type="text" name="name" className={errors.name ? 'error' : ''} />
      </label>
      <label className="form-label d-flex col">
      <strong className="form-text">Email:</strong>
        {errors.email && <p className="error-text">{errors.email}</p>}
        <input type="email" name="email" className={errors.email ? 'error' : ''} />
      </label>
      <label className="form-label d-flex col">
        <strong className="form-text">Message:</strong>
        {errors.message && <p className="error-text">{errors.message}</p>}
        <textarea  name="message" className={errors.message ? 'error' : ''} />
      </label>
      <input className="form-btn click" type="submit" value="SEND" />
    </form>
  )
}

export default Form;