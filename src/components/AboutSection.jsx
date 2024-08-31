import React from "react";
import styles from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/components/AboutSection.module.css";
function AboutSection() {
  function handleDownload() {
    const pdfUrl = "../../public/CV_KristineGaphrindashvili.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;

    link.download = "CV_KristineGaphrindashvili.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div
      id="aboutsection"
      style={{
        padding: "20px",
        borderBottom: "1px solid #9dbdff",
        backgroundColor: "#7695ff",
      }}
    >
      <h1 className={styles.h1}>ABOUT ME</h1>
      <h3 className={styles.h3}>
        <p className={styles.p}>
          <span className={styles.span}>Name</span>: Kristine Gaphrindashvili
        </p>
        <p className={styles.p}>
          <span className={styles.span}>Date of birth</span>: September 17, 2003
        </p>
        <p className={styles.p}>
          <span className={styles.span}>Email</span>:
          kristigaphrindashvili@gmail.com
        </p>
        <p className={styles.p}>
          <span className={styles.span}>Phone</span>: +995 579 27 36 46
        </p>
      </h3>
      <div>
        <h2 className={styles.h2}>EDUCATION AND TRAINING</h2>

        <h3 className={styles.h3}>
          <span className={styles.span}>
            Computer Science, Caucasus University
          </span>
          <p style={{ color: "#ffd7c4" }}>09/2021-Current</p>
          <p style={{ color: "white" }}>City: Tbilisi</p>
          <p style={{ color: "white" }}>Country: Georgia</p>
        </h3>
      </div>
      <div>
        <h2 className={styles.h2}>LANGUAGE SKILLS</h2>
        <h3 style={{ color: "#ffd7c4" }} className={styles.h3}>
          English
        </h3>
        <p className={styles.p}>
          LISTENING C1 | READING B2 | WRITING B2 | SPOKEN PRODUCTION B2 | SPOKEN
          INTERACTION B2
        </p>
        <h3 style={{ color: "#ffd7c4" }} className={styles.h3}>
          Russian
        </h3>
        <p className={styles.p}>
          LISTENING B2 | READING B2 | WRITING B1 | SPOKEN PRODUCTION B2 | SPOKEN
          INTERACTION B2
        </p>
      </div>

      <div style={{ textAlign: "center" }}>
        <button className={styles.button} onClick={handleDownload}>
          Download My Resume
        </button>
      </div>
    </div>
  );
}

export default AboutSection;
