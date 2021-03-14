import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navLink">
      <Link to="/">Nasa API</Link>
      <Link to="/nasaphoto">Picture of the Day</Link>
      <Link to="/earthEvents">Earth Events</Link>
    </div>
  );
};

export default NavBar;
