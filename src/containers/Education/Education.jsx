import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client, urlFor } from "../../client";
import "./Education.scss";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const query = `*[_type == "education"] | order(order asc)`;
    client.fetch(query).then((data) => setEducation(data));
  }, []);

  return (
    <section className="app__education" id="education">
      <h2 className="head-text">
        My <span>Education</span>
      </h2>

      <div className="app__education-timeline">
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            className="app__education-item"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Year */}
            <div className="education-year">
              {edu.fromYear} – {edu.toYear}
            </div>

            {/* Dot */}
            <span className="timeline-dot" />

            {/* Content */}
            <div className="education-content">
              <div className="education-header">
                {edu.icon && (
                  <div className="education-icon">
                    <img
                      src={urlFor(edu.icon).width(80).url()}
                      alt={edu.institution}
                      className={`education-icon-img ${edu.institution
                        .toLowerCase()
                        .replace(/\s/g, "-")}`}
                    />
                  </div>
                )}
                <h4 className="bold-text">{edu.institution}</h4>
              </div>


              <p className="p-text">{edu.location}</p>
              {(edu.class || edu.course) && (
                <p className="p-text education-sub">
                  {edu.class && <span>{edu.class}</span>}
                  {edu.class && edu.course && <span> • </span>}
                  {edu.course && <span>{edu.course}</span>}
                </p>
              )}
              <p className="p-text">Score: {edu.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
