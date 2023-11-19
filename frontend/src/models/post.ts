import { Post } from "@/graphql/generated/graphql";

export type MyLatestPost = Pick<
	Post,
	| "id"
	| "images"
	| "createdAt"
	| "postContent"
	| "postParentId"
	| "user"
	| "videos"
>;
