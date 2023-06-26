import { useState } from "react";
import projectsData from "./projectsData";
const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const displayedProjects = showMore ? projectsData : projectsData.slice(0, 10);

  return (
    <section className="projects-section">
      <h2 className="projects-heading">Projects</h2>

      <div className="projects-container">
        {displayedProjects.map((project) => (
          <div className="project" key={project.id}>
            <a href={project.link} className="project-link" target={"_blank"}>
              <h4 className="project-title">{project.title}</h4>
            </a>
          </div>
        ))}
      </div>
      <button className="show-more-btn" onClick={toggleShowMore}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};
export default Projects;
