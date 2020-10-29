import { func } from "prop-types";
import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className='about__container'>
      <span>About this page: i built it </span>
      <span>hi</span>
    </div>
  );
}

export default About;
