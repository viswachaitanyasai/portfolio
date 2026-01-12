import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../../client";
import { images } from "../../constants";
import "./Education.scss";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const query = `*[_type=="education"]`;
    client.fetch(query).then((data) => setEducation(data));
  }, []);

  // icon mapping stays EXACTLY the same
  const collegeIcons = {
    "Kalinga Institute of Industrial Technology": images.kiit,
    "Sri Viswa Jr College": images.sri_viswa,
    "Sasi School": images.sasi,
  };

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
                {collegeIcons[edu.institution] && (
                  <div className="education-icon">
                    <img
                      src={collegeIcons[edu.institution]}
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
              <p className="p-text">Score: {edu.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
