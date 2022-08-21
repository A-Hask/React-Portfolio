import React from "react";
// get font awesome

function Project({ project }) {
  const { name, repo, link, description } = project;
  return (
    <div>
      <h3>{name}</h3>
      <img src={require(`../../assets/projects/${name}.jpg`)} alt={name}></img>
      <div>
        <p>{description}</p>
        <a href={link}>{name}</a>{" "}
        <a href={repo}>
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Project;
