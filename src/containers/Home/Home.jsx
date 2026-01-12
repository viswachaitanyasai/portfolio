import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { client, urlFor } from "../../client";
import { images } from "../../constants";
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
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    const query = `*[_type == "home"][0]{
      homeHey,
      stackImages
    }`;

    client.fetch(query).then((data) => {
      setHomeData(data);
    });
  }, []);

  return (
    <div className="app__header app__flex" id="home">
      {/* SOCIAL ICONS */}
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

      {/* TEXT */}
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

      {/* MAIN IMAGE */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {homeData?.homeHey && (
          <img
            src={urlFor(homeData.homeHey).width(500).url()}
            alt="home-hey"
          />
        )}

        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile-circle"
        />
      </motion.div>

      {/* STACK IMAGES FROM SANITY */}
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {homeData?.stackImages?.map((image, index) => (
          <div className="circle-cmp app__flex" key={index}>
            <img
              src={urlFor(image).width(200).height(200).url()}
              alt={`stack-${index}`}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
