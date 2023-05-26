import { useState } from "react";

import "./ContactForm.css";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [status, setStatus] = useState({});

  const onFormChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onContactSubmit = (e) => {
    console.log(formData.message);
  };

  return (
    <section id="contact-form">
      <div className="container">
        <form
          id="contact"
          action="mailto:gnedyalkov94@gmail.com"
          onSubmit={onContactSubmit}
        >
          <h1>Contact me</h1>
          <label htmlFor="Email">Name:</label>
          <input
            value={formData.name}
            onChange={onFormChange}
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="Email">Email:</label>
          <input
            value={formData.email}
            onChange={onFormChange}
            type="text"
            name="email"
            id="email"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            value={formData.message}
            onChange={onFormChange}
            name="message"
            id="message"
          ></textarea>
          <input className="btn submit" type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
