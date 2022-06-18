import React, { useState, useEffect } from "react";
import './Form.css';

const Form = () => {
  const [ errors, setErrors ] = useState({});

  const validateForm = (values) => {
    const {name, message, email } = values;
    const errors = {
      name: null,
      email: null,
      message: null,
    };

    const nameRegExp = /[a-zA-ZáéíóúÁÉÍÓÚ]+/g
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g

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

  const checkSendForm = (values) => {
    const errors = validateForm(values);
    if (errors.name === null || errors.email === null || errors.message === null) {
      return true;
    }
    console.log('there is something wrong');
    return false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target

    const values = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    }

    setErrors(validateForm(values));

    return checkSendForm(values);
  }

  return (
    <form className="form d-flex col" 
    onSubmit={handleSubmit} noValidate >
      <label className="form-label d-flex col">
        Name:
        {errors.name && <p>{errors.name}</p>}
        <input type="text" name="name" className={errors.name ? 'error' : ''} />
      </label>
      <label className="form-label d-flex col">
        Email:
        {errors.email && <p>{errors.email}</p>}
        <input type="email" name="email" className={errors.email ? 'error' : ''} />
      </label>
      <label className="form-label d-flex col">
        Message:
        {errors.message && <p>{errors.message}</p>}
        <textarea  name="message" className={errors.message ? 'error' : ''} />
      </label>
      <input type="submit" value="submit" />
    </form>
  )
}

export default Form;