import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { client, urlFor } from "../../client";
import "./About.scss";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const query = `*[_type == "about"][0]{
      profileImage,
      aboutHeyImage
    }`;

    client.fetch(query).then((data) => {
      setAboutData(data);
    });
  }, []);

  return (
    <div id="about" className="app__about app__flex">
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

      {aboutData?.aboutHeyImage && (
        <img
          src={urlFor(aboutData.aboutHeyImage).width(150).url()}
          alt="about-hey"
          className="about__corner-image"
        />
      )}

      <div className="about__container">
        <div className="about__hero">
          <motion.div
            className="about__hero-text"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="head-text">
              Hi, I'm <span>Viswa</span>
            </h1>
            <p className="p-l-text">
              A passionate developer who loves building beautiful and functional
              web applications.
            </p>
          </motion.div>

          <motion.div
            className="about__hero-image"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {aboutData?.profileImage && (
              <img
                src={urlFor(aboutData.profileImage).width(260).url()}
                alt="Viswa"
              />
            )}
          </motion.div>
        </div>

        <motion.div
          className="about__content"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="head-text">
            About <span>Me</span>
          </h2>
          <p className="p-l-text">
            I’m a B.Tech student from India with a strong interest in full-stack
            development. I enjoy working with modern web technologies and turning
            ideas into real-world applications. I believe good design and clean
            code go hand in hand.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
