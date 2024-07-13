import './projects.css'

function Projects(){
    const projects = [
        { name: 'Hungry Snake', description: 'Built a full-stack e-commerce site using React, Node.js, and MongoDB.' },
        { name: 'HTML Website Generator', description: 'Created a weather application using React and integrating with a third-party API.' },
        { name: 'Task Management Tool', description: 'Developed a Kanban-style task management app with React and Redux.' },
      ];

      return(
        <div className='skills-showcase'>
            <section className="projects-section">
            <h2>Featured Projects</h2>
            <div className="projects-list">
            {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
        </div>
      )
}

export default Projects;