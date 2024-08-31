import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./AppNavigation.module.css"; // Adjusted to use relative path

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.nav}>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link
            to="homesection"
            smooth={true}
            duration={500}
            style={{
              color: "#ffd7c4",
              cursor: "pointer",
              fontWeight: "bold",
              WebkitTextStrokeWidth: "0px",
            }}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="aboutsection"
            smooth={true}
            duration={500}
            style={{
              color: "#ffd7c4",
              cursor: "pointer",
              fontWeight: "bold",
              WebkitTextStrokeWidth: "0px",
            }}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="skillssection"
            smooth={true}
            duration={500}
            style={{
              color: "#ffd7c4",
              cursor: "pointer",
              fontWeight: "bold",
              WebkitTextStrokeWidth: "0px",
            }}
          >
            SKILLS
          </Link>
        </li>
        <li>
          <Link
            to="projectssection"
            smooth={true}
            duration={500}
            style={{
              color: "#ffd7c4",
              cursor: "pointer",
              fontWeight: "bold",
              WebkitTextStrokeWidth: "0px",
            }}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            to="contactsection"
            smooth={true}
            duration={500}
            style={{
              color: "#ffd7c4",
              cursor: "pointer",
              fontWeight: "bold",
              WebkitTextStrokeWidth: "0px",
            }}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
