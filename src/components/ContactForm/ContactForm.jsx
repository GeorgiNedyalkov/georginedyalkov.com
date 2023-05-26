import { useState } from "react";

import "./ContactForm.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const onContactSubmit = (e) => {};

  return (
    <section id="contact-form">
      <div className="container">
        <form id="contact" method="POST" onSubmit={onContactSubmit}>
          <h1>Contact me</h1>
          <label htmlFor="Email">Name:</label>
          <input
            value={name}
            onChange={onNameChange}
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="Email">Email:</label>
          <input
            value={email}
            onChange={onEmailChange}
            type="text"
            name="email"
            id="email"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            value={message}
            onChange={onMessageChange}
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
