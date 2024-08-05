import './projects.css'

function Projects(){
    const projects = [
        { name: 'Hungry Snake', description: 'Worked within a team to develop a fully functioning game that mimics the classic arcade game Snake and added different innovative game modes to make the game more stimulating.' },
        { name: 'HTML Website Generator', description: 'Created a solution generating a comprehensive HTML shell for users, providing a solid foundation to build upon and tailor to their specific needs.' },
        { name: 'Cubey Goes To School', description: 'Developed a WebGame that simulates a day to day life at school in a fun and challenging way using processing.' },
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