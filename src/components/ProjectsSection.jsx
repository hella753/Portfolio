import React from "react";
import styles from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/components/ProjectsSection.module.css";
import weatherapp from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/images/weather-app.jpg";
import bbaccounting from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/images/bbaccounting.jpg";
import legalrightsgeorgia from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/images/legalrightsgeorgia.jpg";
import plantarium from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/images/plantarium.jpg";
import bricks from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/images/bricks.jpg";
import paint from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/images/paint.jpg";
import flashcards from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/images/flashcards.jpg";

function ProjectsSection() {
  return (
    <div
      id="projectssection"
      style={{
        backgroundColor: "#7695ff",
        padding: "20px",
        borderBottom: "1px solid #9dbdff",
      }}
    >
      <h1 style={{ color: "#ff9874", textAlign: "center" }}>PROJECTS</h1>
      <div className={styles.container}>
        <a
          className={styles.box}
          href="https://rad-basbousa-5a4025.netlify.app/"
          target="blank"
        >
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${weatherapp})` }}
          ></div>
          <div style={{ color: "white" }}>Weather App</div>
        </a>
        <a
          className={styles.box}
          href="https://accountingbb.com/"
          target="blank"
        >
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${bbaccounting})` }}
          ></div>
          <div style={{ color: "white" }}>BB Accounting</div>
        </a>
        <a
          className={styles.box}
          href="https://hella753.github.io/legalrightsgeorgia-js/"
          target="blank"
        >
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${legalrightsgeorgia})` }}
          ></div>
          <div style={{ color: "white" }}>Legal Rights Georgia</div>
        </a>
        <a
          className={styles.box}
          href="https://hella753.github.io/plantarium-js/"
          target="blank"
        >
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${plantarium})` }}
          ></div>
          <div style={{ color: "white" }}>Plantarium</div>
        </a>
        <a
          className={styles.box}
          href="https://github.com/hella753/BricksGame-java"
          target="blank"
        >
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${bricks})` }}
          ></div>
          <div style={{ color: "white" }}>Bricks Game</div>
        </a>
        <a
          href="https://github.com/hella753/flashcards"
          className={styles.box}
          target="blank"
        >
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${flashcards})` }}
          ></div>
          <div style={{ color: "white" }}>DE to GE Flashcards</div>
        </a>
      </div>
    </div>
  );
}

export default ProjectsSection;
