import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>


        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                  <h3 className={styles.historyItem}>
                    <img
                      src={getImageUrl(historyItem.imageSrc)}
                      alt={`${historyItem.organization} Logo`}
                      className={styles.historyItemImage}
                    />
                    {`${historyItem.role}`}
                  </h3>
                  <h3>{historyItem.organization}</h3>
                  <p>{`${historyItem.start_date} - ${historyItem.end_date}`}</p>
                  <ul>
                    {historyItem.experience.map((experience, id) => {
                      return (
                        <li key={id} className={styles.experience}>
                          {experience}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                    className={styles.skillImage}
                  />
                </div>

                <p className={styles.skillTitle}>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
