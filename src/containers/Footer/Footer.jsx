import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="app__footer">
      <p className="p-text">
        © {new Date().getFullYear()} Viswa Chaitanya. All rights reserved.
      </p>

      <div className="app__footer-links">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
