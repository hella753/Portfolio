import styles from "C:/Users/Kristine/Desktop/portfolio/portfolio/src/components/ContactSection.module.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactSection() {
  const SERVICEID = import.meta.env.VITE_SERVICEID;
  const TEMPLATEID = import.meta.env.VITE_TEMPLATEID;
  const EMAILKEY = import.meta.env.VITE_EMAILKEY;

  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      from_name: "",
      email: "",
      subject: "",
      message: "",
    });
    emailjs.send(SERVICEID, TEMPLATEID, formData, EMAILKEY).then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Error sending message, please try again.");
      }
    );
  };

  return (
    <div
      id="contactsection"
      style={{ padding: "20px", backgroundColor: "#ffeae3" }}
    >
      <h1 style={{ color: "#ff9874", textAlign: "center" }}>CONTACT</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="from_name"
          name="from_name"
          placeholder="Your name"
          value={formData.from_name}
          onChange={handleChange}
        />

        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
        />

        <textarea
          id="message"
          name="message"
          placeholder="Write something"
          style={{ height: "200px" }}
          onChange={handleChange}
          value={formData.message}
        ></textarea>

        <div style={{ textAlign: "center" }} className={styles.buttonContainer}>
          <input type="submit" value="Send a Message" />
        </div>
      </form>
    </div>
  );
}

export default ContactSection;
