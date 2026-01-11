// Projects.jsx
import { useEffect, useState } from "react";
import "./Projects.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { client } from "../../client";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = `*[_type == "works"] | order(_createdAt desc)`;

    client
      .fetch(query)
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <motion.section
      className="projects"
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="head-text">
        Check out my <span>Projects</span>
      </h2>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <motion.div
            key={project._id}
            className="project-card"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.08 }}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-links">
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillEye />
                  Live
                </a>
              )}

              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                  Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
