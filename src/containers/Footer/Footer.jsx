import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="app__footer">

      {/* Social Links */}
      <div className="footer-socials">
        <a
          href="https://www.linkedin.com/in/viswa-chaitanya"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://instagram.com/your-instagram"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Copyright */}
      <p className="footer-copy">
        © {new Date().getFullYear()} Viswa Chaitanya. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
