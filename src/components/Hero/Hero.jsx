import React from "react"

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils"

export const Hero = () =>{
    const handleDownloadClick = () => {
        window.open('public/Dilka_Sithari.pdf', '_blank');
    };
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Dilka sithari</h1>
            
            <p className={styles.description}>Enthusiastic undergraduate with a strong work ethic, passionate about learning and teamwork. Dedicated to achieving goals through hard work and collaboration, Committed to pursuing a career in Software Engineering </p>
            <div className={styles.icon}>
           <a href="mailto:sitharidilka@gmail.com" target="_blank"> <img className={styles.iconImg}   src={getImageUrl("contact/email.png")} alt="Email Icon" /></a>
           <a href="https://www.linkedin.com/in/dilka-sithari/" target="_blank"> <img className={styles.iconImg}  src={getImageUrl("contact/linkedin.png")} alt="LinkedIn Icon" /></a>
            <a href="https://github.com/DilkaSithari" target="_blank"> <img className={styles.iconImg}  src={getImageUrl("contact/github.png")} alt="GitHub Icon" /></a>
            <a href="https://www.instagram.com/dilka_sithari/" target="_blank"> <img className={styles.iconImg}  src={getImageUrl("contact/instagram.png")} alt="Instagram Icon" /></a>
            <a href="https://sitharihmd-19.medium.com/" target="_blank"> <img className={styles.iconImg}  src={getImageUrl("contact/medium.png")} alt="Medium Icon" /></a>
            </div>
            <div className={styles.resumeButton}>
        <button class={styles.btn} onClick={handleDownloadClick}>Click to view my Resume</button>
      </div>
            {/* <a className={styles.contactBtn} href="mailto:sitharidilka@gmail.com">Contact Me</a> */}
        </div>
        <img className={styles.heroImg}  src={getImageUrl("hero/myImage.jpg")} alt="Hero image of me" />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
}