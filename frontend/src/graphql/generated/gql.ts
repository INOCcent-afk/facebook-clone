/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tmutation createPost($post: PostInput!) {\n\t\tcreatePost(post: $post) {\n\t\t\tid\n\t\t\tpostContent\n\t\t}\n\t}\n": types.CreatePostDocument,
    "\n\tmutation registerUser($user: UserInput!) {\n\t\tregisterUser(user: $user) {\n\t\t\temail\n\t\t\tid\n\t\t\tuid\n\t\t}\n\t}\n": types.RegisterUserDocument,
    "\n\tquery getMe {\n\t\tme {\n\t\t\tuid\n\t\t\tfirstName\n\t\t}\n\t}\n": types.GetMeDocument,
    "\n\tquery getUser($uid: String!) {\n\t\tuser(uid: $uid) {\n\t\t\tfirstName\n\t\t\temail\n\t\t\tfollowedBy {\n\t\t\t\tuid\n\t\t\t}\n\t\t\tfollowing {\n\t\t\t\tuid\n\t\t\t}\n\t\t\tprofile {\n\t\t\t\tprofilePicture\n\t\t\t\tcover_photo\n\t\t\t\tprofilePicture\n\t\t\t\tid\n\t\t\t\tuserId\n\t\t\t}\n\t\t}\n\t}\n": types.GetUserDocument,
    "\n\tquery getUsers {\n\t\tusers {\n\t\t\tfirstName\n\t\t\tlastName\n\t\t}\n\t}\n": types.GetUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation createPost($post: PostInput!) {\n\t\tcreatePost(post: $post) {\n\t\t\tid\n\t\t\tpostContent\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation createPost($post: PostInput!) {\n\t\tcreatePost(post: $post) {\n\t\t\tid\n\t\t\tpostContent\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation registerUser($user: UserInput!) {\n\t\tregisterUser(user: $user) {\n\t\t\temail\n\t\t\tid\n\t\t\tuid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation registerUser($user: UserInput!) {\n\t\tregisterUser(user: $user) {\n\t\t\temail\n\t\t\tid\n\t\t\tuid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getMe {\n\t\tme {\n\t\t\tuid\n\t\t\tfirstName\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getMe {\n\t\tme {\n\t\t\tuid\n\t\t\tfirstName\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getUser($uid: String!) {\n\t\tuser(uid: $uid) {\n\t\t\tfirstName\n\t\t\temail\n\t\t\tfollowedBy {\n\t\t\t\tuid\n\t\t\t}\n\t\t\tfollowing {\n\t\t\t\tuid\n\t\t\t}\n\t\t\tprofile {\n\t\t\t\tprofilePicture\n\t\t\t\tcover_photo\n\t\t\t\tprofilePicture\n\t\t\t\tid\n\t\t\t\tuserId\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getUser($uid: String!) {\n\t\tuser(uid: $uid) {\n\t\t\tfirstName\n\t\t\temail\n\t\t\tfollowedBy {\n\t\t\t\tuid\n\t\t\t}\n\t\t\tfollowing {\n\t\t\t\tuid\n\t\t\t}\n\t\t\tprofile {\n\t\t\t\tprofilePicture\n\t\t\t\tcover_photo\n\t\t\t\tprofilePicture\n\t\t\t\tid\n\t\t\t\tuserId\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getUsers {\n\t\tusers {\n\t\t\tfirstName\n\t\t\tlastName\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getUsers {\n\t\tusers {\n\t\t\tfirstName\n\t\t\tlastName\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;