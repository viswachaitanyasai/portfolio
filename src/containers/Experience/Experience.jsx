// Experience.jsx
import { motion } from "framer-motion";
import "./Experience.scss";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "TechNova Solutions",
    duration: "Jun 2024 – Aug 2024",
    description:
      "Built responsive UI components using React and SCSS. Improved page performance and collaborated closely with backend developers to integrate APIs.",
    skills: ["React", "SCSS", "JavaScript"],
  }
];

const Experience = () => {
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
              <h3>{exp.role}</h3>
              <span>{exp.duration}</span>
            </div>

            <h4>{exp.company}</h4>

            <p>{exp.description}</p>

            <div className="experience-skills">
              {exp.skills.map((skill, i) => (
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
