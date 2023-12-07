import React from "react";
import styles from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

function SearchBar({ placeholder }) {
  return (
    <div className={styles.searchBar}>
      <CiSearch />
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default SearchBar;
