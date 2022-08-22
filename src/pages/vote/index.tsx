import React from "react";
import { NextPage } from "next";
import ItemCard from "@/components/UI/ItemCard";
import gamesVotingImage from "/public/PreviewImages/games-voting.jpg";
import filmsVotingImage from "/public/PreviewImages/films-voting.jpg";
import Header from "@/components/UI/Header";

const Vote: NextPage = () => {
  return (
    <div>
      <Header text="Vote Categories" />
      <ItemCard href="/vote/games" image={gamesVotingImage}>
        Games
      </ItemCard>
      <ItemCard href="/vote/films" image={filmsVotingImage}>
        Films
      </ItemCard>
    </div>
  );
};

export default Vote;
