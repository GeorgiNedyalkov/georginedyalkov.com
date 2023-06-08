import { useState } from "react";

import "./ContactForm.css";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const onFormChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact-form">
      <form
        id="contact"
        action="https://usebasin.com/f/25163cad755a"
        method="POST"
      >
        <h2 className="form__title">Send me a message</h2>
        <p>Thank you for taking the time to write!</p>

        <div className="form__top">
          <div className="form__field">
            <label htmlFor="Email">Name</label>
            <input
              value={formData.name}
              onChange={onFormChange}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form__field">
            <label htmlFor="Email">Email</label>
            <input
              value={formData.email}
              onChange={onFormChange}
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <div className="form__bottom">
          <label htmlFor="message">Message</label>
          <textarea
            value={formData.message}
            onChange={onFormChange}
            name="message"
            id="message"
            placeholder="Hi, I would love to work with you."
          />
        </div>
        <input className="btn submit" type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default Contact;
