import { useRouter } from "next/router";
import Link from "next/link";
import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "/src/components/Navbar/index.module.css";

export { NavLink };

interface NavLinkProps {
  href: string;
  className?: string;
  exact?: boolean;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  className,
  exact = "true",
  children,
}) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href}>
      <a className={classNames(className, isActive && styles.active)}>
        {children}
      </a>
    </Link>
  );
};
