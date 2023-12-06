import { BsStars } from "react-icons/bs";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className="page-title">Home</h1>
      <BsStars />
    </header>
  );
}

export default Header;
