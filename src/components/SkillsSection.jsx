import React from "react";
import styles from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/components/SkillsSection.module.css";
import pylogo from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/images/pylogo.png";
import jslogo from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/images/jslogo.png";
import cplusplus from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/images/cplusplus.png";
import javalogo from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/images/javalogo.png";
import htmllogo from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/images/htmllogo.png";
import csslogo from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/images/csslogo.png";
import reactlogo from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/images/reactlogo.png";

function SkillsSection() {
  return (
    <div
      id="skillssection"
      style={{
        backgroundColor: "#7695ff",
        padding: "20px",
        borderBottom: "1px solid #9dbdff",
      }}
    >
      <h1 style={{ color: "#ff9874", textAlign: "center" }}>SKILLS</h1>
      <h2 className={styles.h2}>Programming Languages</h2>
      <div className={styles.container}>
        <div
          className={styles.boxes}
          style={{ backgroundImage: `url(${pylogo})` }}
        >
          Python Intermediate
        </div>
        <div
          className={styles.boxes}
          style={{ backgroundImage: `url(${jslogo})` }}
        >
          Javascript Advanced
        </div>
        <div
          className={styles.boxes}
          style={{ backgroundImage: `url(${cplusplus})` }}
        >
          C++ Beginner
        </div>
        <div
          className={styles.boxes}
          style={{ backgroundImage: `url(${javalogo})` }}
        >
          Java Beginner
        </div>
      </div>
      <h2 className={styles.h2}>Markup and Style</h2>
      <div className={styles.container}>
        <div
          className={styles.boxes}
          style={{ backgroundImage: `url(${htmllogo})` }}
        >
          HTML
        </div>
        <div
          className={styles.boxes}
          style={{ backgroundImage: `url(${csslogo})` }}
        >
          CSS
        </div>
      </div>
      <h2 className={styles.h2}>Libraries</h2>

      <div className={styles.container}>
        <div
          className={styles.boxes}
          style={{ backgroundImage: `url(${reactlogo})` }}
        >
          React
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
