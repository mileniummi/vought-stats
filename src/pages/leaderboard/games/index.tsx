import React from "react";
import { GetServerSideProps } from "next";
import { trpc } from "@/utils/trpc";
import { AsyncReturnType } from "@/utils/getAsyncFuncReturn";
import ItemCard from "@/components/UI/ItemCard";
import LeaderboardRow from "@/components/Leaderboard/Row";

// interface GamesLeaderBoardProps {
//   orderedGames: AsyncReturnType<typeof getOrderedGames>;
// }

const GamesLeaderboard = () => {
  const { data: orderedGames } = trpc.useQuery(["get-ordered-games"]);

  return (
    <>
      {orderedGames ? (
        orderedGames.map((game, index) => (
          <ItemCard size="sm" key={index} image={game.imageUrl}>
            <LeaderboardRow place={index + 1} object={game} />
          </ItemCard>
        ))
      ) : (
        <>No Results yet...</>
      )}
    </>
  );
};
//
// const getOrderedGames = async () => {
//   const { data: games } = trpc.useQuery(["get-ordered-games"]);
//   return games;
// };
//
// export const getStaticProps: GetServerSideProps = async () => {
//   const orderedGames = getOrderedGames();
//   return { props: { orderedGames }, revalidate: 300 };
// };

export default GamesLeaderboard;
