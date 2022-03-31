import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'five-day-forecast',
      description: 'Javascript/API',
      link: "https://serge2233.github.io/five-day-forecast/",
      repo: "https://github.com/Serge2233/five-day-forecast"
    },
    {
      name: 'tech-blog',
      description: 'SQL/Express',
      link: "https://technical-blogger.herokuapp.com/",
      repo: "https://github.com/Serge2233/technical-blogger"
    },
    {
      name: 'budget-tracker',
      description: 'MERN Stack',
      link: "https://track-budget-expenses.herokuapp.com/",
      repo: "https://github.com/Serge2233/tracking-expenses"
    },
    {
      name: 'console-this',
      description: 'Javascript/API',
      link: "https://trane7.github.io/Console-This/",
      repo: "https://github.com/Serge2233/Console-This"
    },
    {
      name: 'time-quiz',
      description: 'JavaScript/CSS',
      link: "https://serge2233.github.io/Timed-Quiz-App/",
      repo: "https://github.com/Serge2233/Timed-Quiz-App"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
