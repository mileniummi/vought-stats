import React, { Dispatch, SetStateAction } from "react";
import { NavLink } from "./NavLink";
import styles from "/src/components/Navbar/index.module.css";
import Switch from "react-switch";

const pagesLeft = [
  { href: "/", name: "Home" },
  { href: "/vote", name: "Vote" },
];

const pagesRight = [{ href: "/leaderboard", name: "Leaderboard" }];

const Navbar: React.FC<{
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}> = ({ theme, setTheme }) => {
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
        <div className={styles.combined}>
          {pagesRight.map((page) => (
            <NavLink key={page.href} href={page.href} className={styles.link}>
              {page.name}
            </NavLink>
          ))}
          <Switch
            onChange={() =>
              setTheme((prevState) => (prevState === "dark" ? "light" : "dark"))
            }
            checked={theme === "dark"}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
