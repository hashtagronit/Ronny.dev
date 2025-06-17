import { motion } from "framer-motion";
import "./SkillsCSS.css"; 
import java from "../assets/java.png";
import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import reactlogo from "../assets/reactlogo.png";
import vite from "../assets/vite.png";
import postman from "../assets/postman.png";
import docker from "../assets/docker.png";
import express from "../assets/express1.png";

const skillsData = [
  { id: 1, src: html5, title: "HTML" },
  { id: 2, src: css3, title: "CSS" },
  { id: 3, src: java, title: "Java" },
  { id: 4, src: reactlogo, title: "React" },
  { id: 5, src: javascript, title: "JavaScript" },
  { id: 6, src: tailwind, title: "Tailwind CSS" },
  { id: 7, src: nodejs, title: "Node.js" },
  { id: 8, src: mongodb, title: "MongoDB" },
  { id: 9, src: express, title: "Express" },
  { id: 10, src: vite, title: "Vite" },
  { id: 11, src: postman, title: "Postman" },
  { id: 12, src: docker, title: "Docker" },
  { id: 13, src: github, title: "GitHub" },
  
];

const Skills = () => {
  return (
    <div id="Skills" className="skills-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <i className="fa fa-cogs" aria-hidden="true"></i> Skills
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="skills-subtitle">These are the technologies I’ve worked with</p>
      </motion.div>
      

      <motion.div className="skills-grid" initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}>
        {skillsData.map(({ id, src, title }) => (
          <div key={id} className="skill-box">
            <img src={src} alt={title} className="skill-img" />
            <p>{title}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
