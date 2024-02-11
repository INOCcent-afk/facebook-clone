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
    "\n\tmutation updateChatViewed($roomId: String!) {\n\t\tupdateChatViewed(roomId: $roomId) {\n\t\t\tid\n\t\t}\n\t}\n": types.UpdateChatViewedDocument,
    "\n\tmutation updateChatUnviewed($roomId: String!) {\n\t\tupdateChatUnviewed(roomId: $roomId) {\n\t\t\tid\n\t\t}\n\t}\n": types.UpdateChatUnviewedDocument,
    "\n\tmutation createNotification(\n\t\t$notificationUrl: String!\n\t\t$notificationMessage: String!\n\t\t$createdFor: String!\n\t) {\n\t\tcreateNotification(\n\t\t\tnotificationUrl: $notificationUrl\n\t\t\tnotificationMessage: $notificationMessage\n\t\t\tcreatedFor: $createdFor\n\t\t) {\n\t\t\tcreatedFor\n\t\t\tid\n\t\t\tnotificationMessage\n\t\t\tnotificationUrl\n\t\t\tuser {\n\t\t\t\tuid\n\t\t\t}\n\t\t}\n\t}\n": types.CreateNotificationDocument,
    "\n\tmutation createPost($post: PostInput!, $images: [ImageInput]) {\n\t\tcreatePost(post: $post, images: $images) {\n\t\t\tid\n\t\t\timages {\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\timage\n\t\t\t}\n\t\t\tcreatedAt\n\t\t\tpostContent\n\t\t}\n\t}\n": types.CreatePostDocument,
    "\n\tmutation deletePost($postId: ID!) {\n\t\tdeletePost(postId: $postId) {\n\t\t\tid\n\t\t}\n\t}\n": types.DeletePostDocument,
    "\n\tmutation sharePost($post: PostInput!, $sharedPostId: Int!) {\n\t\tsharePost(post: $post, sharedPostId: $sharedPostId) {\n\t\t\tid\n\t\t\timages {\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\timage\n\t\t\t}\n\t\t\tcreatedAt\n\t\t\tpostContent\n\t\t\tsharedPost {\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\timages {\n\t\t\t\t\tid\n\t\t\t\t\tuserUid\n\t\t\t\t\timage\n\t\t\t\t}\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t}\n\t}\n": types.SharePostDocument,
    "\n\tmutation updatePost($postId: ID!, $post: PostInput!) {\n\t\tupdatePost(postId: $postId, post: $post) {\n\t\t\tid\n\t\t}\n\t}\n": types.UpdatePostDocument,
    "\n\tmutation updateProfile(\n\t\t$bio: String\n\t\t$coverPhoto: String\n\t\t$profilePicture: String\n\t) {\n\t\tupdateProfile(\n\t\t\tbio: $bio\n\t\t\tcoverPhoto: $coverPhoto\n\t\t\tprofilePicture: $profilePicture\n\t\t) {\n\t\t\tid\n\t\t\tbio\n\t\t\tprofilePicture\n\t\t\tcoverPhoto\n\t\t}\n\t}\n": types.UpdateProfileDocument,
    "\n\tmutation createReaction($emoji: Emoji!, $postId: ID!) {\n\t\tcreateReaction(emoji: $emoji, postId: $postId) {\n\t\t\tid\n\t\t}\n\t}\n": types.CreateReactionDocument,
    "\n\tmutation deleteReaction($postId: ID!) {\n\t\tdeleteReaction(postId: $postId) {\n\t\t\tid\n\t\t}\n\t}\n": types.DeleteReactionDocument,
    "\n\tmutation updateReaction($emoji: Emoji!, $postId: ID!) {\n\t\tupdateReaction(emoji: $emoji, postId: $postId) {\n\t\t\tid\n\t\t}\n\t}\n": types.UpdateReactionDocument,
    "\n\tmutation addFriend($receiverUid: String!) {\n\t\taddFriend(receiverUid: $receiverUid) {\n\t\t\tid\n\t\t\tcreatedAt\n\t\t\treceiverUid\n\t\t\tsenderUid\n\t\t}\n\t}\n": types.AddFriendDocument,
    "\n\tmutation cancelFriendRequest($userUid: String!) {\n\t\tcancelFriendRequest(userUid: $userUid) {\n\t\t\tid\n\t\t}\n\t}\n": types.CancelFriendRequestDocument,
    "\n\tmutation confirmFriendRequest($userUid: String!) {\n\t\tconfirmFriendRequest(userUid: $userUid) {\n\t\t\tid\n\t\t}\n\t}\n": types.ConfirmFriendRequestDocument,
    "\n\tmutation registerUser($user: UserInput!) {\n\t\tregisterUser(user: $user) {\n\t\t\temail\n\t\t\tid\n\t\t\tuid\n\t\t}\n\t}\n": types.RegisterUserDocument,
    "\n\tmutation rejectFriendRequest($userUid: String!) {\n\t\trejectFriendRequest(userUid: $userUid) {\n\t\t\tid\n\t\t}\n\t}\n": types.RejectFriendRequestDocument,
    "\n\tmutation unfriend($userUid: String!) {\n\t\tunfriend(userUid: $userUid) {\n\t\t\tid\n\t\t}\n\t}\n": types.UnfriendDocument,
    "\n\tquery getChat($senderUid: String!, $receiverUid: String!) {\n\t\tchat(senderUid: $senderUid, receiverUid: $receiverUid) {\n\t\t\tid\n\t\t\tmessages {\n\t\t\t\tid\n\t\t\t\tcontent\n\t\t\t\tuserUid\n\t\t\t}\n\t\t\tusers {\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t}\n\t}\n": types.GetChatDocument,
    "\n\tquery getChats($uid: String!) {\n\t\tchats(uid: $uid) {\n\t\t\tid\n\t\t\tmessages {\n\t\t\t\tid\n\t\t\t\tcontent\n\t\t\t\tuserUid\n\t\t\t}\n\t\t\tusers {\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tname\n\t\t\tviewers {\n\t\t\t\tuserUid\n\t\t\t}\n\t\t}\n\t}\n": types.GetChatsDocument,
    "\n\tquery getMe {\n\t\tme {\n\t\t\tid\n\t\t\tuid\n\t\t\temail\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tfriendsCount\n\t\t\tprofile {\n\t\t\t\tcoverPhoto\n\t\t\t\tprofilePicture\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\tbio\n\t\t\t}\n\t\t\tfriends {\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t\tprofile {\n\t\t\t\t\tprofilePicture\n\t\t\t\t}\n\t\t\t}\n\t\t\tfriendRequestsReceiver {\n\t\t\t\tUser {\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t\tuid\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t\tfriendRequestsSender {\n\t\t\t\tUser {\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t\tuid\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t\tphotos {\n\t\t\t\tid\n\t\t\t\timage\n\t\t\t}\n\t\t}\n\t}\n": types.GetMeDocument,
    "\n\tquery getNotifications($uid: String!) {\n\t\tnotifications(uid: $uid) {\n\t\t\tid\n\t\t\tcreatedFor\n\t\t\tnotificationMessage\n\t\t\tnotificationUrl\n\t\t\tviewed\n\t\t\tuser {\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t\tuid\n\t\t\t}\n\t\t}\n\t}\n": types.GetNotificationsDocument,
    "\n\tquery getPosts {\n\t\tposts {\n\t\t\tid\n\t\t\timage\n\t\t\timages {\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\timage\n\t\t\t}\n\t\t\tuserUid\n\t\t\tpostContent\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tsharedPost {\n\t\t\t\tid\n\t\t\t\timages {\n\t\t\t\t\tid\n\t\t\t\t\tuserUid\n\t\t\t\t\timage\n\t\t\t\t}\n\t\t\t\tuserUid\n\t\t\t\tuser {\n\t\t\t\t\tid\n\t\t\t\t\tuid\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t}\n\t\t\t\tpostContent\n\t\t\t\tupdatedAt\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t\tupdatedAt\n\t\t\tcreatedAt\n\t\t}\n\t}\n": types.GetPostsDocument,
    "\n\tquery userPosts($uid: String) {\n\t\tuserPosts(uid: $uid) {\n\t\t\tid\n\t\t\timages {\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\timage\n\t\t\t}\n\t\t\tpostContent\n\t\t\tuserUid\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tsharedPost {\n\t\t\t\tid\n\t\t\t\timages {\n\t\t\t\t\tid\n\t\t\t\t\tuserUid\n\t\t\t\t\timage\n\t\t\t\t}\n\t\t\t\tuserUid\n\t\t\t\tuser {\n\t\t\t\t\tid\n\t\t\t\t\tuid\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t}\n\t\t\t\tpostContent\n\t\t\t\tupdatedAt\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": types.UserPostsDocument,
    "\n\tquery getReactions($postId: ID!) {\n\t\treactions(postId: $postId) {\n\t\t\treactionCount\n\t\t\tselectedEmoji\n\t\t}\n\t}\n": types.GetReactionsDocument,
    "\n\tquery getUser($uid: String!) {\n\t\tuser(uid: $uid) {\n\t\t\tid\n\t\t\tuid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\temail\n\t\t\tprofile {\n\t\t\t\tcoverPhoto\n\t\t\t\tprofilePicture\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\tbio\n\t\t\t}\n\t\t\tfriends {\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t\tprofile {\n\t\t\t\t\tprofilePicture\n\t\t\t\t}\n\t\t\t}\n\t\t\tfriendsCount\n\t\t\tisFriends\n\t\t\tisInFriendRequests\n\t\t\tisRequestingToBeFriend\n\t\t\tphotos {\n\t\t\t\tid\n\t\t\t\timage\n\t\t\t}\n\t\t}\n\t}\n": types.GetUserDocument,
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
export function graphql(source: "\n\tmutation updateChatViewed($roomId: String!) {\n\t\tupdateChatViewed(roomId: $roomId) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation updateChatViewed($roomId: String!) {\n\t\tupdateChatViewed(roomId: $roomId) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation updateChatUnviewed($roomId: String!) {\n\t\tupdateChatUnviewed(roomId: $roomId) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation updateChatUnviewed($roomId: String!) {\n\t\tupdateChatUnviewed(roomId: $roomId) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation createNotification(\n\t\t$notificationUrl: String!\n\t\t$notificationMessage: String!\n\t\t$createdFor: String!\n\t) {\n\t\tcreateNotification(\n\t\t\tnotificationUrl: $notificationUrl\n\t\t\tnotificationMessage: $notificationMessage\n\t\t\tcreatedFor: $createdFor\n\t\t) {\n\t\t\tcreatedFor\n\t\t\tid\n\t\t\tnotificationMessage\n\t\t\tnotificationUrl\n\t\t\tuser {\n\t\t\t\tuid\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation createNotification(\n\t\t$notificationUrl: String!\n\t\t$notificationMessage: String!\n\t\t$createdFor: String!\n\t) {\n\t\tcreateNotification(\n\t\t\tnotificationUrl: $notificationUrl\n\t\t\tnotificationMessage: $notificationMessage\n\t\t\tcreatedFor: $createdFor\n\t\t) {\n\t\t\tcreatedFor\n\t\t\tid\n\t\t\tnotificationMessage\n\t\t\tnotificationUrl\n\t\t\tuser {\n\t\t\t\tuid\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation createPost($post: PostInput!, $images: [ImageInput]) {\n\t\tcreatePost(post: $post, images: $images) {\n\t\t\tid\n\t\t\timages {\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\timage\n\t\t\t}\n\t\t\tcreatedAt\n\t\t\tpostContent\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation createPost($post: PostInput!, $images: [ImageInput]) {\n\t\tcreatePost(post: $post, images: $images) {\n\t\t\tid\n\t\t\timages {\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\timage\n\t\t\t}\n\t\t\tcreatedAt\n\t\t\tpostContent\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation deletePost($postId: ID!) {\n\t\tdeletePost(postId: $postId) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation deletePost($postId: ID!) {\n\t\tdeletePost(postId: $postId) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation sharePost($post: PostInput!, $sharedPostId: Int!) {\n\t\tsharePost(post: $post, sharedPostId: $sharedPostId) {\n\t\t\tid\n\t\t\timages {\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\timage\n\t\t\t}\n\t\t\tcreatedAt\n\t\t\tpostContent\n\t\t\tsharedPost {\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\timages {\n\t\t\t\t\tid\n\t\t\t\t\tuserUid\n\t\t\t\t\timage\n\t\t\t\t}\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation sharePost($post: PostInput!, $sharedPostId: Int!) {\n\t\tsharePost(post: $post, sharedPostId: $sharedPostId) {\n\t\t\tid\n\t\t\timages {\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\timage\n\t\t\t}\n\t\t\tcreatedAt\n\t\t\tpostContent\n\t\t\tsharedPost {\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\timages {\n\t\t\t\t\tid\n\t\t\t\t\tuserUid\n\t\t\t\t\timage\n\t\t\t\t}\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation updatePost($postId: ID!, $post: PostInput!) {\n\t\tupdatePost(postId: $postId, post: $post) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation updatePost($postId: ID!, $post: PostInput!) {\n\t\tupdatePost(postId: $postId, post: $post) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation updateProfile(\n\t\t$bio: String\n\t\t$coverPhoto: String\n\t\t$profilePicture: String\n\t) {\n\t\tupdateProfile(\n\t\t\tbio: $bio\n\t\t\tcoverPhoto: $coverPhoto\n\t\t\tprofilePicture: $profilePicture\n\t\t) {\n\t\t\tid\n\t\t\tbio\n\t\t\tprofilePicture\n\t\t\tcoverPhoto\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation updateProfile(\n\t\t$bio: String\n\t\t$coverPhoto: String\n\t\t$profilePicture: String\n\t) {\n\t\tupdateProfile(\n\t\t\tbio: $bio\n\t\t\tcoverPhoto: $coverPhoto\n\t\t\tprofilePicture: $profilePicture\n\t\t) {\n\t\t\tid\n\t\t\tbio\n\t\t\tprofilePicture\n\t\t\tcoverPhoto\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation createReaction($emoji: Emoji!, $postId: ID!) {\n\t\tcreateReaction(emoji: $emoji, postId: $postId) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation createReaction($emoji: Emoji!, $postId: ID!) {\n\t\tcreateReaction(emoji: $emoji, postId: $postId) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation deleteReaction($postId: ID!) {\n\t\tdeleteReaction(postId: $postId) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation deleteReaction($postId: ID!) {\n\t\tdeleteReaction(postId: $postId) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation updateReaction($emoji: Emoji!, $postId: ID!) {\n\t\tupdateReaction(emoji: $emoji, postId: $postId) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation updateReaction($emoji: Emoji!, $postId: ID!) {\n\t\tupdateReaction(emoji: $emoji, postId: $postId) {\n\t\t\tid\n\t\t}\n\t}\n"];
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
export function graphql(source: "\n\tquery getChat($senderUid: String!, $receiverUid: String!) {\n\t\tchat(senderUid: $senderUid, receiverUid: $receiverUid) {\n\t\t\tid\n\t\t\tmessages {\n\t\t\t\tid\n\t\t\t\tcontent\n\t\t\t\tuserUid\n\t\t\t}\n\t\t\tusers {\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getChat($senderUid: String!, $receiverUid: String!) {\n\t\tchat(senderUid: $senderUid, receiverUid: $receiverUid) {\n\t\t\tid\n\t\t\tmessages {\n\t\t\t\tid\n\t\t\t\tcontent\n\t\t\t\tuserUid\n\t\t\t}\n\t\t\tusers {\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getChats($uid: String!) {\n\t\tchats(uid: $uid) {\n\t\t\tid\n\t\t\tmessages {\n\t\t\t\tid\n\t\t\t\tcontent\n\t\t\t\tuserUid\n\t\t\t}\n\t\t\tusers {\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tname\n\t\t\tviewers {\n\t\t\t\tuserUid\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getChats($uid: String!) {\n\t\tchats(uid: $uid) {\n\t\t\tid\n\t\t\tmessages {\n\t\t\t\tid\n\t\t\t\tcontent\n\t\t\t\tuserUid\n\t\t\t}\n\t\t\tusers {\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tname\n\t\t\tviewers {\n\t\t\t\tuserUid\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getMe {\n\t\tme {\n\t\t\tid\n\t\t\tuid\n\t\t\temail\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tfriendsCount\n\t\t\tprofile {\n\t\t\t\tcoverPhoto\n\t\t\t\tprofilePicture\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\tbio\n\t\t\t}\n\t\t\tfriends {\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t\tprofile {\n\t\t\t\t\tprofilePicture\n\t\t\t\t}\n\t\t\t}\n\t\t\tfriendRequestsReceiver {\n\t\t\t\tUser {\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t\tuid\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t\tfriendRequestsSender {\n\t\t\t\tUser {\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t\tuid\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t\tphotos {\n\t\t\t\tid\n\t\t\t\timage\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getMe {\n\t\tme {\n\t\t\tid\n\t\t\tuid\n\t\t\temail\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\tfriendsCount\n\t\t\tprofile {\n\t\t\t\tcoverPhoto\n\t\t\t\tprofilePicture\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\tbio\n\t\t\t}\n\t\t\tfriends {\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t\tprofile {\n\t\t\t\t\tprofilePicture\n\t\t\t\t}\n\t\t\t}\n\t\t\tfriendRequestsReceiver {\n\t\t\t\tUser {\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t\tuid\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t\tfriendRequestsSender {\n\t\t\t\tUser {\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t\tuid\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t}\n\t\t\tphotos {\n\t\t\t\tid\n\t\t\t\timage\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getNotifications($uid: String!) {\n\t\tnotifications(uid: $uid) {\n\t\t\tid\n\t\t\tcreatedFor\n\t\t\tnotificationMessage\n\t\t\tnotificationUrl\n\t\t\tviewed\n\t\t\tuser {\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t\tuid\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getNotifications($uid: String!) {\n\t\tnotifications(uid: $uid) {\n\t\t\tid\n\t\t\tcreatedFor\n\t\t\tnotificationMessage\n\t\t\tnotificationUrl\n\t\t\tviewed\n\t\t\tuser {\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t\tuid\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getPosts {\n\t\tposts {\n\t\t\tid\n\t\t\timage\n\t\t\timages {\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\timage\n\t\t\t}\n\t\t\tuserUid\n\t\t\tpostContent\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tsharedPost {\n\t\t\t\tid\n\t\t\t\timages {\n\t\t\t\t\tid\n\t\t\t\t\tuserUid\n\t\t\t\t\timage\n\t\t\t\t}\n\t\t\t\tuserUid\n\t\t\t\tuser {\n\t\t\t\t\tid\n\t\t\t\t\tuid\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t}\n\t\t\t\tpostContent\n\t\t\t\tupdatedAt\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t\tupdatedAt\n\t\t\tcreatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getPosts {\n\t\tposts {\n\t\t\tid\n\t\t\timage\n\t\t\timages {\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\timage\n\t\t\t}\n\t\t\tuserUid\n\t\t\tpostContent\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tsharedPost {\n\t\t\t\tid\n\t\t\t\timages {\n\t\t\t\t\tid\n\t\t\t\t\tuserUid\n\t\t\t\t\timage\n\t\t\t\t}\n\t\t\t\tuserUid\n\t\t\t\tuser {\n\t\t\t\t\tid\n\t\t\t\t\tuid\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t}\n\t\t\t\tpostContent\n\t\t\t\tupdatedAt\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t\tupdatedAt\n\t\t\tcreatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery userPosts($uid: String) {\n\t\tuserPosts(uid: $uid) {\n\t\t\tid\n\t\t\timages {\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\timage\n\t\t\t}\n\t\t\tpostContent\n\t\t\tuserUid\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tsharedPost {\n\t\t\t\tid\n\t\t\t\timages {\n\t\t\t\t\tid\n\t\t\t\t\tuserUid\n\t\t\t\t\timage\n\t\t\t\t}\n\t\t\t\tuserUid\n\t\t\t\tuser {\n\t\t\t\t\tid\n\t\t\t\t\tuid\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t}\n\t\t\t\tpostContent\n\t\t\t\tupdatedAt\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery userPosts($uid: String) {\n\t\tuserPosts(uid: $uid) {\n\t\t\tid\n\t\t\timages {\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\timage\n\t\t\t}\n\t\t\tpostContent\n\t\t\tuserUid\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t}\n\t\t\tsharedPost {\n\t\t\t\tid\n\t\t\t\timages {\n\t\t\t\t\tid\n\t\t\t\t\tuserUid\n\t\t\t\t\timage\n\t\t\t\t}\n\t\t\t\tuserUid\n\t\t\t\tuser {\n\t\t\t\t\tid\n\t\t\t\t\tuid\n\t\t\t\t\tfirstName\n\t\t\t\t\tlastName\n\t\t\t\t}\n\t\t\t\tpostContent\n\t\t\t\tupdatedAt\n\t\t\t\tcreatedAt\n\t\t\t}\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getReactions($postId: ID!) {\n\t\treactions(postId: $postId) {\n\t\t\treactionCount\n\t\t\tselectedEmoji\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getReactions($postId: ID!) {\n\t\treactions(postId: $postId) {\n\t\t\treactionCount\n\t\t\tselectedEmoji\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getUser($uid: String!) {\n\t\tuser(uid: $uid) {\n\t\t\tid\n\t\t\tuid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\temail\n\t\t\tprofile {\n\t\t\t\tcoverPhoto\n\t\t\t\tprofilePicture\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\tbio\n\t\t\t}\n\t\t\tfriends {\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t\tprofile {\n\t\t\t\t\tprofilePicture\n\t\t\t\t}\n\t\t\t}\n\t\t\tfriendsCount\n\t\t\tisFriends\n\t\t\tisInFriendRequests\n\t\t\tisRequestingToBeFriend\n\t\t\tphotos {\n\t\t\t\tid\n\t\t\t\timage\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getUser($uid: String!) {\n\t\tuser(uid: $uid) {\n\t\t\tid\n\t\t\tuid\n\t\t\tfirstName\n\t\t\tlastName\n\t\t\temail\n\t\t\tprofile {\n\t\t\t\tcoverPhoto\n\t\t\t\tprofilePicture\n\t\t\t\tid\n\t\t\t\tuserUid\n\t\t\t\tbio\n\t\t\t}\n\t\t\tfriends {\n\t\t\t\tuid\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t\tprofile {\n\t\t\t\t\tprofilePicture\n\t\t\t\t}\n\t\t\t}\n\t\t\tfriendsCount\n\t\t\tisFriends\n\t\t\tisInFriendRequests\n\t\t\tisRequestingToBeFriend\n\t\t\tphotos {\n\t\t\t\tid\n\t\t\t\timage\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery getUsers {\n\t\tusers {\n\t\t\tfirstName\n\t\t\tlastName\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getUsers {\n\t\tusers {\n\t\t\tfirstName\n\t\t\tlastName\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;