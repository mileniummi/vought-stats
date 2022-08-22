import React, { useState } from "react";
import { getVoteOptions } from "@/utils/getRandomIndex";
import Card from "@/components/Vote/GamesVote/Card";
import styles from "@/components/Vote/index.module.css";
import { trpc } from "@/utils/trpc";
import Button from "@/components/UI/Button";
import { BsArrowRight } from "react-icons/all";

const GamesVote = () => {
  const [ids, updateIds] = useState(() => getVoteOptions());
  const [firstId, secondId] = ids;

  const voteMutation = trpc.useMutation(["cast-vote"]);
  const Vote = (selected: number) => {
    if (selected === firstId) {
      voteMutation.mutate({ votedFor: firstId, votedAgainst: secondId });
    } else if (selected === secondId) {
      voteMutation.mutate({ votedFor: secondId, votedAgainst: firstId });
    }
    updateIds(getVoteOptions());
  };

  const skip = () => {
    updateIds(getVoteOptions());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Card vote={Vote} id={firstId} />
        <Card vote={Vote} id={secondId} />
      </div>
      <Button onClick={skip} variant="white">
        Skip
        <BsArrowRight size={20} color="inherit"></BsArrowRight>
      </Button>
    </div>
  );
};

export default GamesVote;
