import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    console.log("Form Data:", formData);
  };

  return (
    <footer id="contact" className={styles.container}>
    <h2 className={styles.title}>Contact</h2>
      <form action="https://api.web3forms.com/submit" method="POST" id="form">
        <fieldset>
          <legend className={styles.legend}>Contact Form</legend>
          <input type="hidden" name="access_key" value="6aa9e52a-bbec-4edd-a2f3-6775bd8259d5" />
          <input type="hidden" name="subject" value="New Submission from Web3Forms" />
          <input type="hidden" name="redirect" value="https://web3forms.com/success" />
          <input type="checkbox" name="botcheck" id="" style={{ display: "none" }} />
          <div>
            <label className={styles.label} htmlFor="name">Full Name</label><br />
            <input type="text" name="name" id="name" placeholder="" required /><br /><br />
          </div>
          <div>
            <label className={styles.label} htmlFor="email">Email Address</label><br />
            <input type="email" name="email" id="email" placeholder="" required /><br /><br />
          </div>
          <div>
            <label className={styles.label} htmlFor="phone">Phone Number</label><br />
            <input type="text" name="phone" id="phone" placeholder=" " required /><br /><br />
          </div>
          <div>
            <label className={styles.label} htmlFor="message">Your Message</label><br />
            <textarea rows="5" name="message" id="message" placeholder="" required></textarea><br /><br />
          </div>
          <button className={styles.btn} type="submit">Send Message</button>
        </fieldset>
      </form>
    </footer>
  );
};
