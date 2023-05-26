import React, { Link } from "react";
import "./home.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ProjectContainer from "../project/ProjectContainer";
import Skills from "../skills/Skills";

const Home = () => {
  return (
    <>
      <div className="mainHomePage">
        <h1>
          Hi, I am <span className="name">Sahil Alagiya.</span>
        </h1>
        <h2>A Front End Engineer.</h2>
        <p className="desc">
          Front end engineers plan, design, build, and implement the user
          interface systems of websites, software programs, and web-based
          applications. Their primary goal is to provide a satisfactory user
          experience with no issues, errors, or downtime.
        </p>
        <div>
          <button className="btn btn--hover">Resume</button>

          <a href="https://github.com" target="_blank">
            <FaGithub className="icon1 icon--hover " />
          </a>
          <a href="/priidjs">
            <FaLinkedin className="icon2 icon--hover" />
          </a>
        </div>
        <section className="class">
          <h2 className="h2">Projects</h2>
          <ProjectContainer />
        </section>
      </div>
      <section className="skills-section">
        <h2 className="section-text">Skills</h2>
        <Skills />
      </section>
      <section className="section-contact">
        <h2 className="contact">Contact</h2>
        <button className="btn2 btn--hover">Email</button>
      </section>
      <section className="created-by">Created By Sahil Alagiya </section>
    </>
  );
};

export default Home;
