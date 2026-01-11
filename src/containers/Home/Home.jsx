import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants/index";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import "./Home.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex" id="home">
      <motion.div
        className="app__social"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <a
          href="https://www.linkedin.com/in/viswa-chaitanya"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/viswachaitanyasai"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/viswa_chaitanya_sai"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋🏻</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Viswa</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile-pic" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile-circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.pytorch, images.python].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;