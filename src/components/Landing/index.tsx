import React from "react";
import styles from "./index.module.css";
import Button from "@/components/UI/Button";
import { BsArrowRight } from "react-icons/all";
import { NavLink } from "@/components/Navbar/NavLink";

const Landing = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.info}>
        <div className={styles.title}>
          Vote. <br />
          <span className={styles.secondary}>&</span>
          <br /> See Statistics.
        </div>
        <Button variant="white">
          <NavLink href={"/vote"}>Vote</NavLink>
          <BsArrowRight size={20} />
        </Button>
      </h1>
    </div>
  );
};

export default Landing;
