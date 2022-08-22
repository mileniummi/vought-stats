import React from "react";
import Image from "next/image";
import styles from "../index.module.css";
import Button from "@/components/UI/Button";
import { trpc } from "@/utils/trpc";
import Loader from "@/components/UI/Loader";

interface CardProps {
  id: number;
  vote: (selected: number) => void;
}

const Card: React.FC<CardProps> = ({ id, vote }) => {
  const { data: game } = trpc.useQuery(["get-game-by-id", { id }]);

  if (game) {
    return (
      <div className={styles.card}>
        <h4 className={styles.title}>{game.name}</h4>
        <div className={styles.image}>
          <Image
            layout="responsive"
            height={500}
            width={500}
            objectFit={"cover"}
            src={game.imageUrl}
            alt="game"
          ></Image>
        </div>
        <Button onClick={() => vote(id)}>VOTE</Button>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <Loader>Loading Game</Loader>
    </div>
  );
};

export default Card;
