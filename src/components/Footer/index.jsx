import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
        <span>Imprint</span>
        <span>Ads info</span>
        <span>More ...</span>
        <span>&copy;2021 Twitter, Inc.</span>
      </p>
    </footer>
  );
}

export default Footer;
