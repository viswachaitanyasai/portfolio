import React, { useState } from "react";
import { images } from "../../constants";
import { client } from "../../client";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);
    setError(null);

    const contact = {
      _type: "contact",
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        setError("Failed to send message. Please try again later.");
      });
  };

  return (
    <section className="app__contact" id="contact">
      <h2 className="head-text">
        <span>Contact</span> Me
      </h2>

      {/* Contact cards */}
      <div className="app__contact-cards">
        <div className="app__contact-card">
          <img src={images.email} alt="email" />
          <a href="mailto:viswa@gmail.com" className="p-text">
            viswa@gmail.com
          </a>
        </div>

        <div className="app__contact-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+916281422351" className="p-text">
            +91 6281422351
          </a>
        </div>
      </div>

      {/* Contact form */}
      {!isFormSubmitted ? (
        <form className="app__contact-form app__flex" onSubmit={handleSubmit}>
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={handleChangeInput}
            required
          />

          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="email"
            value={email}
            onChange={handleChangeInput}
            required
          />

          <textarea
            className="p-text"
            placeholder="Your Message"
            name="message"
            value={message}
            onChange={handleChangeInput}
            rows="5"
            required
          />

          {error && <p className="app__contact-error p-text">{error}</p>}

          <button type="submit" className="p-text" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      ) : (
        <div className="app__contact-thanks">
          <h3 className="head-text">
            <span>Thank you</span> for reaching out!
          </h3>
        </div>
      )}
    </section>
  );
};

export default Contact;
