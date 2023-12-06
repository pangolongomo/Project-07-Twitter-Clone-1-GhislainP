import React from "react";
import styles from './Avatar.module.css'

function Avatar({ avatarClass, image, description }) {
  return (
    <div className={styles[avatarClass]}>
      <img src={image} alt={`logo ${description}`} />
    </div>
  );
}

export default Avatar;
