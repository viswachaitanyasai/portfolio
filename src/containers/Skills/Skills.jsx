import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "react-tooltip/dist/react-tooltip.css";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = `*[_type=="education"]`;
    const skillsQuery = `*[_type=="skills"]`;

    client.fetch(query).then((data) => {
      setEducation(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <section className="app__skills" id="skills">
      <h2 className="head-text">
        <span>Skills</span> &amp; <span>Education</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-edu">
          {education.map((edu) => (
            <React.Fragment key={edu.name}>
              <motion.div className="app__skills-edu-item">
                <div className="app__skills-edu-year">
                  <p className="bold-text">{edu.year}</p>
                </div>

                <motion.div className="app__skills-edu-names">
                  <motion.div
                    className="app__skills-edu-name"
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="bold-text">{edu.name}</h4>
                    <p className="p-text">{edu.place}</p>
                    <p className="p-text">marks: {edu.marks}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;