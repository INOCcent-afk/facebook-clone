import { Post } from "@/graphql/generated/graphql";

export type MyLatestPost = Pick<
	Post,
	"id" | "images" | "createdAt" | "postContent" | "user" | "videos"
>;
