import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <h1>About Me❓</h1>
      <Link to={"/users"}>Users List</Link>
    </>
  );
}

export default About;
