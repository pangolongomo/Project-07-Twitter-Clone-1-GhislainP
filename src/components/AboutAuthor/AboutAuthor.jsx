import React from "react";
import { Link } from "react-router-dom";
import styles from "./AboutAuthor.module.css";

function AboutAuthor({ name, otherDetails, IconDesc, userName }) {
  return (
    <div className={styles.aboutAuthor}>
      <Link to={`/${userName}`}>
        <div className={styles.tweetTitleAuthor}>
          <span>{name}</span> {IconDesc && <IconDesc />}
        </div>
        <div className={styles.tweetTitleDetails}>
          {otherDetails || `@${userName}`}
        </div>
      </Link>
    </div>
  );
}

export default AboutAuthor;
