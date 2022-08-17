import React, { ReactNode } from "react";
import styles from "./index.module.css";
import Image, { StaticImageData } from "next/image";
import { NavLink } from "@/components/Navbar/NavLink";
import classNames from "classnames";

interface ItemCardProps {
  image: string | StaticImageData;
  children: ReactNode | string;
  href?: string;
  size?: "sm" | "md";
}

const ItemCard: React.FC<ItemCardProps> = ({ image, children, href, size }) => {
  const body = (
    <div className={styles.container}>
      <div
        className={classNames(
          styles.imageContainer,
          size === "sm" && styles.sm
        )}
      >
        <Image
          className={styles.image}
          layout="responsive"
          src={image}
          objectFit="cover"
          alt="card"
          width={1200}
          height={size === "sm" ? 100 : 200}
        />
      </div>
      <p className={styles.text}>{children}</p>
    </div>
  );

  if (href) {
    return <NavLink href={href}>{body}</NavLink>;
  }

  return body;
};

export default ItemCard;
