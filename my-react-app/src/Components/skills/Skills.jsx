import './skills.css'; // You'll need to create this CSS file

function Skills() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 80 },
    { name: 'Redux', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'GraphQL', level: 65 },
  ];

  const projects = [
    { name: 'E-commerce Platform', description: 'Built a full-stack e-commerce site using React, Node.js, and MongoDB.' },
    { name: 'Weather App', description: 'Created a weather application using React and integrating with a third-party API.' },
    { name: 'Task Management Tool', description: 'Developed a Kanban-style task management app with React and Redux.' },
  ];

  return (
    <div className="skills-showcase">
      <h1>My React Skills Showcase</h1>
      
      <section className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

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

      <section className="react-features">
        <h2>React Features I've Mastered</h2>
        <ul>
          <li>Hooks (useState, useEffect, useContext, custom hooks)</li>
          <li>Context API for state management</li>
          <li>React Router for navigation</li>
          <li>Styled-components for CSS-in-JS</li>
          <li>Performance optimization techniques</li>
        </ul>
      </section>
    </div>
  );
};

export default Skills;