import React, { ReactNode } from "react";
import styles from "./index.module.css";

interface LoaderProps {
  children?: ReactNode | string;
}

const Loader: React.FC<LoaderProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <span />
        <span />
        <span />
      </div>
      {children}
    </div>
  );
};

export default Loader;
