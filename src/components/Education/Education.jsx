import React from "react";
import { motion } from "framer-motion";
import "./EducationCSS.css";

const Education = () => {
  return (
    <div id="Education" className="education-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <i className="fa-solid fa-user-graduate"></i> Education
      </motion.h2>

      <motion.div
        className="education-item"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <div className="education-row">
          <span className="institute">Galgotias College Of Engineering and Technology</span>
          <span className="location">Greater Noida, India</span>
        </div>
        <div className="education-row">
          <span className="degree">B.Tech in Computer Science Engineering</span>
          <span className="year">2021 – 2025</span>
        </div>
      </motion.div>

      <motion.div
        className="education-item"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <div className="education-row">
          <span className="institute">R L Bai Mem School</span>
          <span className="location">Indira Nagar, Lucknow, India</span>
        </div>
        <div className="education-row">
          <span className="degree">12th Grade</span>
          <span className="year"> May 2020</span>
        </div>
      </motion.div>

      <motion.div
        className="education-item"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <div className="education-row">
          <span className="institute">R L Bai Mem School</span>
          <span className="location">Indira Nagar, Lucknow, India</span>
        </div>
        <div className="education-row">
          <span className="degree">10th Grade</span>
          <span className="year">May 2018</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
