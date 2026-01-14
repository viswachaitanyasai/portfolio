import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../../client";
import "./Experience.scss";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = `*[_type == "experience"] | order(order asc){
      title,
      company,
      from,
      to,
      description,
      stack
    }`;

    client.fetch(query).then(setExperiences).catch(console.error);
  }, []);

  return (
    <section id="experience" className="experience">
      <motion.h2
        className="head-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My <span>Experience</span>
      </motion.h2>

      <div className="experience__timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <span className="experience-date">
                {exp.from} – {exp.to}
              </span>
            </div>

            <h4 className="experience-company">{exp.company}</h4>

            <p>{exp.description}</p>

            <div className="experience-skills">
              {exp.stack?.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
