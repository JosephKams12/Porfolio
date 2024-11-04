import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'HTML', level: 90 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Git', level: 85 },
    { name: 'UI/UX Design', level: 75 },
  ];

  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      <p>
        I have developed a diverse set of skills that allow me to build robust and
        efficient applications. Here are some of the technologies and tools I am proficient in:
      </p>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <div className="skill-percentage">{skill.level}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
