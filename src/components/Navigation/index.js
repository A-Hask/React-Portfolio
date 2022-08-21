import React from "react";

function Navigation(props) {
  const { pages = [], setCurrentPage, currentPage } = props;
  return (
    <div>
      <ul className="nav-list">
        <li>
          <a href="/about">
            <button className="btn">About Me!</button>
          </a>
        </li>
        <li>
          <a href="/projects">
            <button className="btn">Projects</button>
          </a>
        </li>
        <li>
          <a href="/contact">
            <button className="btn">How to Get in Touch</button>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
