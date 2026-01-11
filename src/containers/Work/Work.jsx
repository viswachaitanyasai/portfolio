import React, { useState, useEffect } from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("AI/ML");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filteredWork, setFilteredWork] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = ["AI/ML", "Web"];

  useEffect(() => {
    const query = `*[_type == "works"]`;
    
    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilteredWork(data.filter(work => work.tags.includes("AI/ML")));
      })
      .catch(console.error);
  }, []);

  const handleWorkFilter = (category) => {
    setActiveFilter(category);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      setFilteredWork(works.filter(work => work.tags.includes(category)));
    }, 500);
  };

  return (
    <motion.div
      className="app__works"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="head-text">
        My <span>Portfolio</span> in Web Development
      </h2>

      <div className="app__work-filter">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => handleWorkFilter(category)}
            className={`app__work-filter-btn 
              ${activeFilter === category ? "active" : ""}
              ${
                (activeFilter === "AI/ML" && category === "Web") ||
                (activeFilter === "Web" && category === "AI/ML")
                  ? "inactive-dark"
                  : ""
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="app__work-portfolio"
      >
        {filteredWork.map((work, index) => (
          <motion.div
            className="app__work-item"
            key={work._id}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.05 }}
          >
            <div className="app__work-img">
              <img src={urlFor(work.imgUrl)} alt={work.title} />
              
              <motion.div
                className="app__work-overlay"
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.span whileTap={{ scale: 0.95 }}>
                    <AiFillEye />
                  </motion.span>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.span whileTap={{ scale: 0.95 }}>
                    <AiFillGithub />
                  </motion.span>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag">
                <span className="p-text">{work.tags[0]}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;