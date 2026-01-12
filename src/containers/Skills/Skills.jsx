import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = `*[_type == "skills"] | order(order asc)`;

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <section className="app__skills" id="skills">
      <h2 className="head-text">
        My <span>Skills</span>
      </h2>

      <motion.div className="app__skills-list">
        {skills.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={skill.name}
          >
            <div
              className="app__flex"
              style={{ backgroundColor: skill.bgColor }}
            >
              <img src={urlFor(skill.icon).width(70).url()} alt={skill.name} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
