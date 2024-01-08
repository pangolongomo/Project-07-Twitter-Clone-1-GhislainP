import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styles from "./BackToPreviousRoot.module.css";

function BackToPreviousRoot() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className={styles.back}>
      <BiArrowBack />
    </button>
  );
}

export default BackToPreviousRoot;
