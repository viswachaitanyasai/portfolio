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

  // 🔥 Map college names to icons
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
            key={edu.name}
            className="app__education-item"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Year */}
            <div className="education-year">{edu.year}</div>

            {/* Dot */}
            <span className="timeline-dot" />

            {/* Content */}
            <div className="education-content">
              <div className="education-header">
                {collegeIcons[edu.name] && (
                  <div className="education-icon">
                    <img
                      src={collegeIcons[edu.name]}
                      alt={edu.name}
                      className={`education-icon-img ${edu.name
                        .toLowerCase()
                        .replace(/\s/g, "-")}`}
                    />
                  </div>

                )}
                <h4 className="bold-text">{edu.name}</h4>
              </div>

              <p className="p-text">{edu.place}</p>
              <p className="p-text">Score: {edu.marks}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
