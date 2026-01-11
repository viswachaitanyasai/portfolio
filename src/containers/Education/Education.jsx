import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../../client";
import "./Education.scss";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const query = `*[_type=="education"]`;

    client.fetch(query).then((data) => {
      setEducation(data);
    });
  }, []);

  return (
    <section className="app__education" id="education">
      <h2 className="head-text">
        My <span>Education</span>
      </h2>

      <div className="app__education-list">
        {education.map((edu) => (
          <motion.div
            key={edu.name}
            className="app__education-item"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <div className="app__education-year">
              <p className="bold-text">{edu.year}</p>
            </div>

            <div className="app__education-content">
              <h4 className="bold-text">{edu.name}</h4>
              <p className="p-text">{edu.place}</p>
              <p className="p-text">Marks: {edu.marks}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
