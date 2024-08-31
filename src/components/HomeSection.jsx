import React from "react";
import myImage from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/images/image.png";
import styles from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/components/HomeSection.module.css";
function HomeSection() {
  return (
    <div id="homesection" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h3 className={styles.greeting}>HELLO! </h3>
          <h2 className={styles.introText}>
            I am{" "}
            <span className={styles.highlight}>
              Kristine Gaphrindashvili, programming enthusiast, 4th year comp
              sci student.
            </span>{" "}
            I am looking for internships and entry-level jobs in tech.
          </h2>
        </div>
        <div className={styles.imageSection}>
          <img src={myImage} className={styles.image} alt="Kristine" />
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
