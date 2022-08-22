import React from "react";
import ItemCard from "@/components/UI/ItemCard";
import gamesVotingImage from "/public/PreviewImages/games-voting.jpg";
import filmsVotingImage from "/public/PreviewImages/films-voting.jpg";
import Header from "@/components/UI/Header";

const leaderboard = () => {
  return (
    <>
      <Header text="Leaderboard Categories" />
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
