import React from "react";
import { NavLink } from "./NavLink";
import styles from "/src/components/Navbar/index.module.css";

const pagesLeft = [
  { href: "/", name: "Home" },
  { href: "/vote", name: "Vote" },
];

const pagesRight = [{ href: "/leaderboard", name: "Leaderboard" }];

const Navbar = () => {
  return (
    <div className="container">
      <div className={styles.container}>
        <div className={styles.combined}>
          {pagesLeft.map((page) => (
            <NavLink key={page.href} href={page.href} className={styles.link}>
              {page.name}
            </NavLink>
          ))}
        </div>
        {pagesRight.map((page) => (
          <NavLink key={page.href} href={page.href} className={styles.link}>
            {page.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
