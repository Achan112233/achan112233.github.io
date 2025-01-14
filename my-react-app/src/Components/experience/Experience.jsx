import './experience.css'; 

function Experience() {
  const experiences = [
    {
      company: 'CodePath',
      position: 'Student Developer',
      duration: 'Jun. 2024 - Present',
      description: 'A 10 week course covering advanced topics tailored for students with basic programming and algorithm knowledge. Worked with a group of teammates learning Python and solving problems related to programming and optimizing time and space complexity for individual Leetcode puzzles.',
    },
    {
      company: 'UMD Center for Geospatial Information Science (CGIC)',
      position: 'Data Science Intern',
      duration: 'Mar. 2023 - Dec. 2023',
      description: 'Created visual masks for cloud satellite images using a computer vision and AI data analyzation tool. Improved cloud processing by 10 percent through CVAT processing.',
    },
    {
      company: 'Yiku Sushi',
      position: 'Food Server',
      duration: ' May 2021 - Sept. 2022',
      description: 'Demonstrated strong multitasking skills by managing multiple tables simultaneously without compromising service quality',
    },
  ];

  return (
    <div className="experience-container">
      <h1>Professional Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h2>{exp.company}</h2>
          <h3>{exp.position}</h3>
          <p className="duration">{exp.duration}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;