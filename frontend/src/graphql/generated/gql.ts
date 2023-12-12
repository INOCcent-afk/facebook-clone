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
    "\n\tmutation createPost($post: PostInput!) {\n\t\tcreatePost(post: $post) {\n\t\t\tvideos\n\t\t\tid\n\t\t\timages\n\t\t\tcreatedAt\n\t\t\tpostContent\n\t\t\tpostParentId\n\t\t}\n\t}\n": types.CreatePostDocument,
    "\n\tmutation deletePost($postId: ID!) {\n\t\tdeletePost(postId: $postId) {\n\t\t\tid\n\t\t}\n\t}\n": types.DeletePostDocument,
    "\n\tmutation updatePost($postId: ID!, $post: PostInput!) {\n\t\tupdatePost(postId: $postId, post: $post) {\n\t\t\tid\n\t\t}\n\t}\n": types.UpdatePostDocument,
    "\n\tmutation addFriend($receiverUid: String!) {\n\t\taddFriend(receiverUid: $receiverUid) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\treceiverUid\n\t\t\tsenderUid\n\t\t}\n\t}\n": types.AddFriendDocument,
    "\n\tmutation cancelFriendRequest($userUid: String!) {\n\t\tcancelFriendRequest(userUid: $userUid) {\n\t\t\tid\n\t\t}\n\t}\n": types.CancelFriendRequestDocument,
    "\n\tmutation confirmFriendRequest($userUid: String!) {\n\t\tconfirmFriendRequest(userUid: $userUid) {\n\t\t\tid\n\t\t}\n\t}\n": types.ConfirmFriendRequestDocument,
    "\n\tmutation registerUser($user: UserInput!) {\n\t\tregisterUser(user: $user) {\n\t\t\temail\n\t\t\tid\n\t\t\tuid\n\t\t}\n\t}\n": types.RegisterUserDocument,
    "\n\tmutation rejectFriendRequest($userUid: String!) {\n\t\trejectFriendRequest(userUid: $userUid) {\n\t\t\tid\n\t\t}\n\t}\n": types.RejectFriendRequestDocument,
    "\n\tmutation unfriend($userUid: String!) {\n\t\tunfriend(userUid: $userUid) {\n\t\t\tid\n\t\t}\n\t}\n": types.UnfriendDocument,
    "\n\tquery getMe {\n\t\tme {\n\t\t\tid\n\t\t\tuid\n\t\t\temail\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tfriendsCount\n\t\t\tprofile {\n\t\t\t\tcover_photo\n\t\t\t\tprofilePicture\n\t\t\t\tid\n\t\t\t\tuserId\n\t\t\t}\n\t\t\tfriendRequestsReceiver {\n\t\t\t\tUser {\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t\tuid\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t\tfriendRequestsSender {\n\t\t\t\tUser {\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t\tuid\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetMeDocument,
    "\n\tquery getPosts {\n\t\tposts {\n\t\t\tid\n\t\t\timages\n\t\t\tpostContent\n\t\t\tpostParentId\n\t\t\tvideos\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tupdatedAt\n\t\t\tcreatedAt\n\t\t}\n\t}\n": types.GetPostsDocument,
    "\n\tquery userPosts($id: Int) {\n\t\tuserPosts(id: $id) {\n\t\t\tid\n\t\t\timages\n\t\t\tpostContent\n\t\t\tpostParentId\n\t\t\tvideos\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tuserId\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": types.UserPostsDocument,
    "\n\tquery getUser($uid: String!) {\n\t\tuser(uid: $uid) {\n\t\t\tid\n\t\t\tuid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\temail\n\t\t\tprofile {\n\t\t\t\tcover_photo\n\t\t\t\tprofilePicture\n\t\t\t\tid\n\t\t\t\tuserId\n\t\t\t}\n\t\t\tfriendsCount\n\t\t\tisFriends\n\t\t\tisInFriendRequests\n\t\t\tisRequestingToBeFriend\n\t\t}\n\t}\n": types.GetUserDocument,
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
export function graphql(source: "\n\tmutation createPost($post: PostInput!) {\n\t\tcreatePost(post: $post) {\n\t\t\tvideos\n\t\t\tid\n\t\t\timages\n\t\t\tcreatedAt\n\t\t\tpostContent\n\t\t\tpostParentId\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation createPost($post: PostInput!) {\n\t\tcreatePost(post: $post) {\n\t\t\tvideos\n\t\t\tid\n\t\t\timages\n\t\t\tcreatedAt\n\t\t\tpostContent\n\t\t\tpostParentId\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation deletePost($postId: ID!) {\n\t\tdeletePost(postId: $postId) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation deletePost($postId: ID!) {\n\t\tdeletePost(postId: $postId) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation updatePost($postId: ID!, $post: PostInput!) {\n\t\tupdatePost(postId: $postId, post: $post) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation updatePost($postId: ID!, $post: PostInput!) {\n\t\tupdatePost(postId: $postId, post: $post) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation addFriend($receiverUid: String!) {\n\t\taddFriend(receiverUid: $receiverUid) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\treceiverUid\n\t\t\tsenderUid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation addFriend($receiverUid: String!) {\n\t\taddFriend(receiverUid: $receiverUid) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\treceiverUid\n\t\t\tsenderUid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation cancelFriendRequest($userUid: String!) {\n\t\tcancelFriendRequest(userUid: $userUid) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation cancelFriendRequest($userUid: String!) {\n\t\tcancelFriendRequest(userUid: $userUid) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation confirmFriendRequest($userUid: String!) {\n\t\tconfirmFriendRequest(userUid: $userUid) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation confirmFriendRequest($userUid: String!) {\n\t\tconfirmFriendRequest(userUid: $userUid) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation registerUser($user: UserInput!) {\n\t\tregisterUser(user: $user) {\n\t\t\temail\n\t\t\tid\n\t\t\tuid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation registerUser($user: UserInput!) {\n\t\tregisterUser(user: $user) {\n\t\t\temail\n\t\t\tid\n\t\t\tuid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation rejectFriendRequest($userUid: String!) {\n\t\trejectFriendRequest(userUid: $userUid) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation rejectFriendRequest($userUid: String!) {\n\t\trejectFriendRequest(userUid: $userUid) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation unfriend($userUid: String!) {\n\t\tunfriend(userUid: $userUid) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation unfriend($userUid: String!) {\n\t\tunfriend(userUid: $userUid) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getMe {\n\t\tme {\n\t\t\tid\n\t\t\tuid\n\t\t\temail\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tfriendsCount\n\t\t\tprofile {\n\t\t\t\tcover_photo\n\t\t\t\tprofilePicture\n\t\t\t\tid\n\t\t\t\tuserId\n\t\t\t}\n\t\t\tfriendRequestsReceiver {\n\t\t\t\tUser {\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t\tuid\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t\tfriendRequestsSender {\n\t\t\t\tUser {\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t\tuid\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getMe {\n\t\tme {\n\t\t\tid\n\t\t\tuid\n\t\t\temail\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tfriendsCount\n\t\t\tprofile {\n\t\t\t\tcover_photo\n\t\t\t\tprofilePicture\n\t\t\t\tid\n\t\t\t\tuserId\n\t\t\t}\n\t\t\tfriendRequestsReceiver {\n\t\t\t\tUser {\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t\tuid\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t\tfriendRequestsSender {\n\t\t\t\tUser {\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t\tuid\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getPosts {\n\t\tposts {\n\t\t\tid\n\t\t\timages\n\t\t\tpostContent\n\t\t\tpostParentId\n\t\t\tvideos\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tupdatedAt\n\t\t\tcreatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getPosts {\n\t\tposts {\n\t\t\tid\n\t\t\timages\n\t\t\tpostContent\n\t\t\tpostParentId\n\t\t\tvideos\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tupdatedAt\n\t\t\tcreatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery userPosts($id: Int) {\n\t\tuserPosts(id: $id) {\n\t\t\tid\n\t\t\timages\n\t\t\tpostContent\n\t\t\tpostParentId\n\t\t\tvideos\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tuserId\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery userPosts($id: Int) {\n\t\tuserPosts(id: $id) {\n\t\t\tid\n\t\t\timages\n\t\t\tpostContent\n\t\t\tpostParentId\n\t\t\tvideos\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tuserId\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getUser($uid: String!) {\n\t\tuser(uid: $uid) {\n\t\t\tid\n\t\t\tuid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\temail\n\t\t\tprofile {\n\t\t\t\tcover_photo\n\t\t\t\tprofilePicture\n\t\t\t\tid\n\t\t\t\tuserId\n\t\t\t}\n\t\t\tfriendsCount\n\t\t\tisFriends\n\t\t\tisInFriendRequests\n\t\t\tisRequestingToBeFriend\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getUser($uid: String!) {\n\t\tuser(uid: $uid) {\n\t\t\tid\n\t\t\tuid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\temail\n\t\t\tprofile {\n\t\t\t\tcover_photo\n\t\t\t\tprofilePicture\n\t\t\t\tid\n\t\t\t\tuserId\n\t\t\t}\n\t\t\tfriendsCount\n\t\t\tisFriends\n\t\t\tisInFriendRequests\n\t\t\tisRequestingToBeFriend\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getUsers {\n\t\tusers {\n\t\t\tfirstName\n\t\t\tlastName\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getUsers {\n\t\tusers {\n\t\t\tfirstName\n\t\t\tlastName\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;