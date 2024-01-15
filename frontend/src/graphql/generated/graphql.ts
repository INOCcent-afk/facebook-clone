/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date custom scalar type */
  Date: { input: any; output: any; }
};

export type ChatRoom = {
  __typename?: 'ChatRoom';
  id: Scalars['ID']['output'];
  messages?: Maybe<Message>;
  name?: Maybe<Scalars['String']['output']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type Comment = {
  __typename?: 'Comment';
  comment?: Maybe<Scalars['String']['output']>;
  commentParentId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  postId: Scalars['ID']['output'];
  userId: Scalars['ID']['output'];
};

export type Friendship = {
  __typename?: 'Friendship';
  User?: Maybe<User>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  receiverUid?: Maybe<Scalars['String']['output']>;
  senderUid?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type Message = {
  __typename?: 'Message';
  chatRoomId: Scalars['ID']['output'];
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  timestamp?: Maybe<Scalars['Date']['output']>;
  userUid: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addFriend: Friendship;
  cancelFriendRequest: Friendship;
  confirmFriendRequest: User;
  createPost: Post;
  deletePost?: Maybe<Post>;
  registerUser: User;
  rejectFriendRequest: Friendship;
  unfriend: User;
  updatePost: Post;
};


export type MutationAddFriendArgs = {
  receiverUid: Scalars['String']['input'];
};


export type MutationCancelFriendRequestArgs = {
  userUid: Scalars['String']['input'];
};


export type MutationConfirmFriendRequestArgs = {
  userUid: Scalars['String']['input'];
};


export type MutationCreatePostArgs = {
  post: PostInput;
};


export type MutationDeletePostArgs = {
  postId: Scalars['ID']['input'];
};


export type MutationRegisterUserArgs = {
  user: UserInput;
};


export type MutationRejectFriendRequestArgs = {
  userUid: Scalars['String']['input'];
};


export type MutationUnfriendArgs = {
  userUid: Scalars['String']['input'];
};


export type MutationUpdatePostArgs = {
  post: PostInput;
  postId: Scalars['ID']['input'];
};

export type Post = {
  __typename?: 'Post';
  comments?: Maybe<Array<Maybe<Comment>>>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  postContent?: Maybe<Scalars['String']['output']>;
  postParentId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
  videos?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PostInput = {
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postContent?: InputMaybe<Scalars['String']['input']>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Profile = {
  __typename?: 'Profile';
  bio?: Maybe<Scalars['String']['output']>;
  cover_photo?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  profilePicture?: Maybe<Scalars['String']['output']>;
  userId: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  chat?: Maybe<ChatRoom>;
  chats?: Maybe<Array<Maybe<ChatRoom>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  friends?: Maybe<User>;
  me?: Maybe<User>;
  posts?: Maybe<Array<Maybe<Post>>>;
  profiles?: Maybe<Array<Maybe<Profile>>>;
  user?: Maybe<User>;
  userPosts?: Maybe<Array<Maybe<Post>>>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryChatArgs = {
  receiverUid: Scalars['String']['input'];
  senderUid: Scalars['String']['input'];
};


export type QueryChatsArgs = {
  uid: Scalars['String']['input'];
};


export type QueryFriendsArgs = {
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
};


export type QueryUserArgs = {
  uid: Scalars['String']['input'];
};


export type QueryUserPostsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  __typename?: 'User';
  comments?: Maybe<Array<Maybe<Comment>>>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  friendRequestsReceiver?: Maybe<Array<Maybe<Friendship>>>;
  friendRequestsSender?: Maybe<Array<Maybe<Friendship>>>;
  friends?: Maybe<Array<Maybe<User>>>;
  friendsCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isFriends?: Maybe<Scalars['Boolean']['output']>;
  isInFriendRequests?: Maybe<Scalars['Boolean']['output']>;
  isRequestingToBeFriend?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Maybe<Post>>>;
  profile?: Maybe<Profile>;
  uid?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePostMutationVariables = Exact<{
  post: PostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', videos?: Array<string | null> | null, id: string, images?: Array<string | null> | null, createdAt?: any | null, postContent?: string | null, postParentId?: string | null } };

export type DeletePostMutationVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost?: { __typename?: 'Post', id: string } | null };

export type UpdatePostMutationVariables = Exact<{
  postId: Scalars['ID']['input'];
  post: PostInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: string } };

export type AddFriendMutationVariables = Exact<{
  receiverUid: Scalars['String']['input'];
}>;


export type AddFriendMutation = { __typename?: 'Mutation', addFriend: { __typename?: 'Friendship', id?: number | null, createdAt?: any | null, receiverUid?: string | null, senderUid?: string | null } };

export type CancelFriendRequestMutationVariables = Exact<{
  userUid: Scalars['String']['input'];
}>;


export type CancelFriendRequestMutation = { __typename?: 'Mutation', cancelFriendRequest: { __typename?: 'Friendship', id?: number | null } };

export type ConfirmFriendRequestMutationVariables = Exact<{
  userUid: Scalars['String']['input'];
}>;


export type ConfirmFriendRequestMutation = { __typename?: 'Mutation', confirmFriendRequest: { __typename?: 'User', id: string } };

export type RegisterUserMutationVariables = Exact<{
  user: UserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'User', email?: string | null, id: string, uid?: string | null } };

export type RejectFriendRequestMutationVariables = Exact<{
  userUid: Scalars['String']['input'];
}>;


export type RejectFriendRequestMutation = { __typename?: 'Mutation', rejectFriendRequest: { __typename?: 'Friendship', id?: number | null } };

export type UnfriendMutationVariables = Exact<{
  userUid: Scalars['String']['input'];
}>;


export type UnfriendMutation = { __typename?: 'Mutation', unfriend: { __typename?: 'User', id: string } };

export type GetChatQueryVariables = Exact<{
  senderUid: Scalars['String']['input'];
  receiverUid: Scalars['String']['input'];
}>;


export type GetChatQuery = { __typename?: 'Query', chat?: { __typename?: 'ChatRoom', id: string, messages?: { __typename?: 'Message', id: string, content?: string | null, userUid: string } | null, users?: Array<{ __typename?: 'User', uid?: string | null, firstName?: string | null, lastName?: string | null } | null> | null } | null };

export type GetChatsQueryVariables = Exact<{
  uid: Scalars['String']['input'];
}>;


export type GetChatsQuery = { __typename?: 'Query', chats?: Array<{ __typename?: 'ChatRoom', id: string, name?: string | null, messages?: { __typename?: 'Message', id: string, content?: string | null, userUid: string } | null, users?: Array<{ __typename?: 'User', uid?: string | null, firstName?: string | null, lastName?: string | null } | null> | null } | null> | null };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, uid?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, friendsCount?: number | null, profile?: { __typename?: 'Profile', cover_photo?: string | null, profilePicture?: string | null, id: string, userId: string } | null, friendRequestsReceiver?: Array<{ __typename?: 'Friendship', User?: { __typename?: 'User', firstName?: string | null, lastName?: string | null, uid?: string | null, id: string } | null } | null> | null, friendRequestsSender?: Array<{ __typename?: 'Friendship', User?: { __typename?: 'User', firstName?: string | null, lastName?: string | null, uid?: string | null, id: string } | null } | null> | null } | null };

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Post', id: string, images?: Array<string | null> | null, postContent?: string | null, postParentId?: string | null, videos?: Array<string | null> | null, updatedAt?: any | null, createdAt?: any | null, user?: { __typename?: 'User', id: string, uid?: string | null, firstName?: string | null, lastName?: string | null } | null } | null> | null };

export type UserPostsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UserPostsQuery = { __typename?: 'Query', userPosts?: Array<{ __typename?: 'Post', id: string, images?: Array<string | null> | null, postContent?: string | null, postParentId?: string | null, videos?: Array<string | null> | null, userId: string, createdAt?: any | null, updatedAt?: any | null, user?: { __typename?: 'User', id: string, uid?: string | null, firstName?: string | null, lastName?: string | null } | null } | null> | null };

export type GetUserQueryVariables = Exact<{
  uid: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, uid?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, friendsCount?: number | null, isFriends?: boolean | null, isInFriendRequests?: boolean | null, isRequestingToBeFriend?: boolean | null, profile?: { __typename?: 'Profile', cover_photo?: string | null, profilePicture?: string | null, id: string, userId: string } | null } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', firstName?: string | null, lastName?: string | null } | null> | null };


export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"post"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"post"},"value":{"kind":"Variable","name":{"kind":"Name","value":"post"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"videos"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"postContent"}},{"kind":"Field","name":{"kind":"Name","value":"postParentId"}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const DeletePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeletePostMutation, DeletePostMutationVariables>;
export const UpdatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"post"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"Argument","name":{"kind":"Name","value":"post"},"value":{"kind":"Variable","name":{"kind":"Name","value":"post"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdatePostMutation, UpdatePostMutationVariables>;
export const AddFriendDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addFriend"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"receiverUid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addFriend"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"receiverUid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"receiverUid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"receiverUid"}},{"kind":"Field","name":{"kind":"Name","value":"senderUid"}}]}}]}}]} as unknown as DocumentNode<AddFriendMutation, AddFriendMutationVariables>;
export const CancelFriendRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cancelFriendRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userUid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelFriendRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userUid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userUid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CancelFriendRequestMutation, CancelFriendRequestMutationVariables>;
export const ConfirmFriendRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"confirmFriendRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userUid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmFriendRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userUid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userUid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ConfirmFriendRequestMutation, ConfirmFriendRequestMutationVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registerUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const RejectFriendRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"rejectFriendRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userUid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rejectFriendRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userUid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userUid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RejectFriendRequestMutation, RejectFriendRequestMutationVariables>;
export const UnfriendDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"unfriend"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userUid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unfriend"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userUid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userUid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UnfriendMutation, UnfriendMutationVariables>;
export const GetChatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getChat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"senderUid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"receiverUid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"senderUid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"senderUid"}}},{"kind":"Argument","name":{"kind":"Name","value":"receiverUid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"receiverUid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"userUid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetChatQuery, GetChatQueryVariables>;
export const GetChatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getChats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chats"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"userUid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetChatsQuery, GetChatsQueryVariables>;
export const GetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"friendsCount"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cover_photo"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"friendRequestsReceiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"friendRequestsSender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
export const GetPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"postContent"}},{"kind":"Field","name":{"kind":"Name","value":"postParentId"}},{"kind":"Field","name":{"kind":"Name","value":"videos"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetPostsQuery, GetPostsQueryVariables>;
export const UserPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"postContent"}},{"kind":"Field","name":{"kind":"Name","value":"postParentId"}},{"kind":"Field","name":{"kind":"Name","value":"videos"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UserPostsQuery, UserPostsQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cover_photo"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"friendsCount"}},{"kind":"Field","name":{"kind":"Name","value":"isFriends"}},{"kind":"Field","name":{"kind":"Name","value":"isInFriendRequests"}},{"kind":"Field","name":{"kind":"Name","value":"isRequestingToBeFriend"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;