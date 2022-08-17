import React from "react";
import { NextPage } from "next";
import ItemCard from "@/components/UI/ItemCard";
import gamesVotingImage from "/public/PreviewImages/games-voting.webp";
import filmsVotingImage from "/public/PreviewImages/films-voting.jpg";

const vote: NextPage = () => {
  return (
    <>
      <ItemCard href="/vote/games" image={gamesVotingImage}>
        Games
      </ItemCard>
      <ItemCard href="/vote/films" image={filmsVotingImage}>
        Films
      </ItemCard>
    </>
  );
};

export default vote;
