import React from "react";
import styles from "./index.module.css";

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return <h2 className={styles.title}>{text}</h2>;
};

export default Header;
