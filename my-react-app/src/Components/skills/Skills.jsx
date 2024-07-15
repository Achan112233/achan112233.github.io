import './skills.css'; // You'll need to create this CSS file

function Skills() {
  const skills = [
    { name: 'React', level: 15 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 80 },
    { name: 'Redux', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'GraphQL', level: 65 },
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
    </div>
  );
};

export default Skills;