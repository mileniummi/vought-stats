import React from "react";
import ItemCard from "@/components/UI/ItemCard";
import gamesVotingImage from "../../../public/PreviewImages/games-voting.webp";
import filmsVotingImage from "../../../public/PreviewImages/films-voting.jpg";

const leaderboard = () => {
  return (
    <>
      <ItemCard href="/leaderboard/games" image={gamesVotingImage}>
        Games
      </ItemCard>
      <ItemCard href="/leaderboard/films" image={filmsVotingImage}>
        Films
      </ItemCard>
    </>
  );
};

export default leaderboard;
