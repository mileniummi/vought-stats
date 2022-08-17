import React from "react";
import styles from "./index.module.css";

interface RowProps {
  object: { _count: { VoteFor: number; VoteAgainst: number }; name: string };
  place: number;
}

const LeaderboardRow: React.FC<RowProps> = ({ object, place }) => {
  return (
    <div className={styles.container}>
      <h3>#{place}</h3>
      <h2>{object.name}</h2>
      <div>Votes For: {object._count.VoteFor}</div>
      <div>Votes Against: {object._count.VoteAgainst}</div>
    </div>
  );
};

export default LeaderboardRow;
