import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      name: "Run Buddy",
      description: "Matching Runners to Trainers",
      link: "https://a-hask.github.io/run-buddy/",
      repo: "https://github.com/A-Hask/run-buddy.git",
    },
    {
      name: "Stream Searcher",
      description: "Helping you find your entertainment",
      link: "https://dcolli50.github.io/Stream-Searcher/",
      repo: "https://github.com/Dcolli50/Stream-Searcher.git",
    },
    {
      name: "Bark Date",
      description: "Playdates for dogs!",
      link: "https://barkdate.herokuapp.com/",
      repo: "https://github.com/dylanokum8/bark-date.git",
    },
    {
      name: "Weather Dashboard",
      description: "Quick and easy weather reports",
      link: "https://a-hask.github.io/Weather-Dashboard/",
      repo: "https://github.com/A-Hask/Weather-Dashboard.git",
    },
    {
      // Budget Tracker!! Must be deployed first
      name: "placeholder",
      // Managing your finances on and offline
      description: "lorem4",
      link: "link5",
      repo: "repo5",
    },
  ]);
  return (
    <div>
      <div>
        {projects.map((project, index) => (
          <Project project={project} key={"project" + index} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
