import React from "react";

function Navigation(props) {
  const { pages = [], setCurrentPage, currentPage } = props;
  return (
    <div>
      <p>Navigation bar goes here!</p>
    </div>
  );
}

export default Navigation;
