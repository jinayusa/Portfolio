import React from 'react';
import CardComponent from "./CardComponent";
function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of project 1.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
        </div>
        {/* Add more projects here */}
      </div>
      <div>
        <h1>Card List</h1>
        <CardComponent title="Card 1" details="These are the details of card 1." />
        <CardComponent title="Card 2" details="These are the details of card 2." />
      </div>
    </section>
  );
}

export default Projects;
