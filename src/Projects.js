import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive portfolio website built with HTML and CSS.",
    tech: "HTML, CSS"
  },
  {
    id: 2,
    title: "Todo App",
    description: "A fully functional todo app built with JavaScript DOM manipulation.",
    tech: "HTML, CSS, JavaScript"
  },
  {
    id: 3,
    title: "React Todo App",
    description: "A todo app built with React using useState and components.",
    tech: "React"
  }
];

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;