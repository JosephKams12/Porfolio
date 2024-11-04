import React from 'react';
import './Project.css';

const Project = () => {
  const projectsData = [
    {
      name: 'Project One',
      description: 'A brief description of Project One. This project involves building a responsive web application using React.',
      liveLink: 'https://example.com/project-one', // Replace with actual link
      codeLink: 'https://github.com/yourusername/project-one', // Replace with actual link
    },
    {
      name: 'Project Two',
      description: 'A brief description of Project Two. This project is focused on developing a RESTful API with Node.js and Express.',
      liveLink: 'https://example.com/project-two', // Replace with actual link
      codeLink: 'https://github.com/yourusername/project-two', // Replace with actual link
    },
    {
      name: 'Project Three',
      description: 'A brief description of Project Three. This project showcases a personal portfolio website built with HTML, CSS, and JavaScript.',
      liveLink: 'https://example.com/project-three', // Replace with actual link
      codeLink: 'https://github.com/yourusername/project-three', // Replace with actual link
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <p>
        Here are some of the projects I have worked on. Click the links to view the live version or the source code.
      </p>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div key={index} className="project">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">View Live</a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
