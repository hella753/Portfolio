import styles from "./Footer.module.css";
import image1 from "../images/github.png";
import image2 from "../images/linkedin.png";

function Footer() {
  return (
    <footer className={styles.container}>
      <a href="https://github.com/hella753" target="blank">
        <img src={image1} className={styles.images} />
      </a>
      <a
        href="https://www.linkedin.com/in/kristine-gaphrindashvili/"
        target="blank"
      >
        <img src={image2} className={styles.images} />
      </a>
    </footer>
  );
}

export default Footer;
