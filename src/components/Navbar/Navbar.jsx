import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import images from "../../constants/images";
import "./Navbar.scss";

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (Toggle) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [Toggle]);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home" aria-label="Home">
          <img src={images.logo} alt="logo" />
        </a>
      </div>

      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 
          onClick={() => setToggle(true)} 
          aria-label="Open menu"
          role="button"
          tabIndex={0}
        />

        <AnimatePresence>
          {Toggle && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="menu-wrapper"
            >
              <div className="menu-overlay" onClick={() => setToggle(false)} />
              <motion.div className="menu-content">
                <HiX 
                  onClick={() => setToggle(false)} 
                  aria-label="Close menu"
                  role="button"
                  tabIndex={0}
                />
                <ul>
                  {["home", "about", "skills", "work", "contact"].map((item) => (
                    <li key={item}>
                      <a 
                        href={`#${item}`} 
                        onClick={() => setToggle(false)}
                        onKeyDown={(e) => e.key === 'Enter' && setToggle(false)}
                        tabIndex={0}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;