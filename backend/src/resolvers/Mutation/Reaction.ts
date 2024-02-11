import { Notification, Prisma, Reaction } from "@prisma/client";
import { Context } from "../../models";
import { GraphQLError } from "graphql";

interface CreateReactionArgs {
	emoji: Emoji;
	postId: number;
}

interface DeleteReactionArgs {
	postId: number;
}

enum Emoji {
	LIKE = "LIKE",
	HEART = "HEART",
	LAUGH = "LAUGH",
	SUPRISE = "SUPRISE",
	CRY = "CRY",
	ANGRY = "ANGRY",
}

type PostPayloadType =
	| null
	| Prisma.Prisma__PostClient<Reaction, never>
	| Reaction;

export const reactionResolvers = {
	createReaction: async (
		_: any,
		{ emoji, postId }: CreateReactionArgs,
		{ prisma, userInfo }: Context
	) => {
		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		if (!emoji || !postId) {
			throw new GraphQLError(
				"you must provide a emoji and postId to create a reaction"
			);
		}

		try {
			const existingReaction = await prisma.reaction.findFirst({
				where: {
					AND: [
						{
							postId: Number(postId),
						},
						{
							userUid: userInfo.userUid,
						},
					],
				},
			});

			if (existingReaction) {
				return await prisma.reaction.updateMany({
					data: { emoji: emoji },
					where: {
						AND: [
							{
								postId: Number(postId),
							},
							{
								userUid: userInfo.userUid,
							},
						],
					},
				});
			}

			return await prisma.reaction.create({
				data: {
					emoji: emoji,
					post: {
						connect: {
							id: Number(postId),
						},
					},
					user: {
						connect: {
							uid: userInfo.userUid,
						},
					},
				},
			});
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
	deleteReaction: async (
		_: any,
		{ postId }: DeleteReactionArgs,
		{ prisma, userInfo }: Context
	) => {
		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		if (!postId) {
			throw new GraphQLError(
				"you must provide a  postId to create a reaction"
			);
		}

		try {
			return await prisma.reaction.deleteMany({
				where: {
					AND: [
						{
							postId: Number(postId),
						},
						{
							userUid: userInfo.userUid,
						},
					],
				},
			});
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
	updateReaction: async (
		_: any,
		{ emoji, postId }: CreateReactionArgs,
		{ prisma, userInfo }: Context
	): Promise<PostPayloadType> => {
		if (!userInfo || (userInfo && !userInfo.userUid)) {
			throw new GraphQLError("Forbidden access (unauthenticated)");
		}

		if (!postId) {
			throw new GraphQLError(
				"you must provide a  postId to create a reaction"
			);
		}

		try {
			return await prisma.reaction.update({
				data: { emoji: emoji },
				where: {
					id: Number(postId),
				},
			});
		} catch (error) {
			throw new GraphQLError(JSON.stringify(error));
		}
	},
};
