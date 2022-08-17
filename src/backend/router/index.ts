import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "@/backend/utils/prisma";

export const appRouter = trpc
  .router()
  .query("get-game-by-id", {
    input: z.object({ id: z.number() }),
    async resolve({ input }) {
      return await prisma.voteOption.findFirst({ where: { id: input.id } });
    },
  })
  .query("get-ordered-games", {
    async resolve() {
      return await prisma.voteOption.findMany({
        take: 10,
        orderBy: {
          VoteFor: {
            _count: "desc",
          },
        },
        select: {
          id: true,
          name: true,
          imageUrl: true,
          _count: {
            select: {
              VoteFor: true,
              VoteAgainst: true,
            },
          },
        },
      });
    },
  })
  .mutation("cast-vote", {
    input: z.object({
      votedFor: z.number(),
      votedAgainst: z.number(),
    }),
    async resolve({ input }) {
      const dbVote = await prisma.vote.create({
        data: {
          votedForId: input.votedFor,
          votedAgainstId: input.votedAgainst,
        },
      });
      return { success: true, vote: dbVote };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
