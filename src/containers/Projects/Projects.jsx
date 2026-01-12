import { useEffect, useState } from "react";
import "./Projects.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { client } from "../../client";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = `*[_type == "projects"] | order(order asc){
      _id,
      title,
      description,
      stack,
      liveLink1,
      liveLink2,
      codeLink1,
      codeLink2
    }`;

    client.fetch(query).then(setProjects).catch(console.error);
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
        {projects.map((project, index) => {
          const links = [
            project.liveLink1 && { type: "live", url: project.liveLink1 },
            project.liveLink2 && { type: "live", url: project.liveLink2 },
            project.codeLink1 && { type: "code", url: project.codeLink1 },
            project.codeLink2 && { type: "code", url: project.codeLink2 },
          ].filter(Boolean);

          return (
            <motion.div
              key={project._id}
              className="project-card"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.08 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {/* Tech Stack */}
              {project.stack?.length > 0 && (
                <div className="project-stack">
                  {project.stack.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="project-links">
                {links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.type === "live" ? <AiFillEye /> : <AiFillGithub />}
                    {link.type === "live" ? "Live" : "Code"}
                  </a>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Projects;
