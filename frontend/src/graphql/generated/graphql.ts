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

export type Comment = {
  __typename?: 'Comment';
  comment?: Maybe<Scalars['String']['output']>;
  commentParentId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  postId: Scalars['ID']['output'];
  userId: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  deletePost?: Maybe<Post>;
  registerUser: User;
  updatePost: Post;
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
  comments?: Maybe<Array<Maybe<Comment>>>;
  me?: Maybe<User>;
  posts?: Maybe<Array<Maybe<Post>>>;
  profiles?: Maybe<Array<Maybe<Profile>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryUserArgs = {
  uid: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  comments?: Maybe<Array<Maybe<Comment>>>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  followedBy?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  id: Scalars['ID']['output'];
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


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string, postContent?: string | null } };

export type DeletePostMutationVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost?: { __typename?: 'Post', id: string } | null };

export type UpdatePostMutationVariables = Exact<{
  postId: Scalars['ID']['input'];
  post: PostInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: string } };

export type RegisterUserMutationVariables = Exact<{
  user: UserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'User', email?: string | null, id: string, uid?: string | null } };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', me?: { __typename?: 'User', uid?: string | null, firstName?: string | null, lastName?: string | null } | null };

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Post', id: string, images?: Array<string | null> | null, postContent?: string | null, postParentId?: string | null, videos?: Array<string | null> | null, updatedAt?: any | null, createdAt?: any | null, user?: { __typename?: 'User', id: string, uid?: string | null, firstName?: string | null, lastName?: string | null } | null } | null> | null };

export type GetUserQueryVariables = Exact<{
  uid: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', firstName?: string | null, email?: string | null, followedBy?: Array<{ __typename?: 'User', uid?: string | null } | null> | null, following?: Array<{ __typename?: 'User', uid?: string | null } | null> | null, profile?: { __typename?: 'Profile', profilePicture?: string | null, cover_photo?: string | null, id: string, userId: string } | null } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', firstName?: string | null, lastName?: string | null } | null> | null };


export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"post"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"post"},"value":{"kind":"Variable","name":{"kind":"Name","value":"post"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"postContent"}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const DeletePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeletePostMutation, DeletePostMutationVariables>;
export const UpdatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"post"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"Argument","name":{"kind":"Name","value":"post"},"value":{"kind":"Variable","name":{"kind":"Name","value":"post"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdatePostMutation, UpdatePostMutationVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registerUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const GetMeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<GetMeQuery, GetMeQueryVariables>;
export const GetPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"postContent"}},{"kind":"Field","name":{"kind":"Name","value":"postParentId"}},{"kind":"Field","name":{"kind":"Name","value":"videos"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetPostsQuery, GetPostsQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"followedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"following"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"cover_photo"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;