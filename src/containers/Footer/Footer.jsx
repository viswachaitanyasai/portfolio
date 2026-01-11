import React, { useState } from "react";
import { images } from "../../constants/index";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
    
    // Basic validation
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
      message: message.trim()
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setError("Failed to send message. Please try again later.");
      });
  };

  return (
    <>
      <h2 className="head-text"><span>Contact Me</span></h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:viswa@gmail.com" className="p-text">viswa@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+916281422351" className="p-text">+91 6281422351</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
          <div className="app__flex">
            <label htmlFor="name" className="visually-hidden">Your Name</label>
            <input
              id="name"
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <label htmlFor="email" className="visually-hidden">Your Email</label>
            <input
              id="email"
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <label htmlFor="message" className="visually-hidden">Your Message</label>
            <textarea
              id="message"
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
              required
              rows="5"
            />
          </div>
          
          {error && <p className="app__footer-error p-text">{error}</p>}

          <button
            type="submit"
            className="p-text"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      ) : (
        <div className="app__footer-thanks">
          <h3 className="head-text" style={{ marginTop: "1rem" }}>
            <span>Thank You</span> for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default Footer;