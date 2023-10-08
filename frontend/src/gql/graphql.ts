/* eslint-disable */
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
};

export type Comment = {
  __typename?: 'Comment';
  comment?: Maybe<Scalars['String']['output']>;
  commentParentId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  postId: Scalars['ID']['output'];
  userId: Scalars['ID']['output'];
};

export type Error = {
  __typename?: 'Error';
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  postCreate: PostPayload;
  postDelete?: Maybe<PostPayload>;
  postUpdate: PostPayload;
  registerUser: UserPayload;
};


export type MutationPostCreateArgs = {
  post: PostInput;
};


export type MutationPostDeleteArgs = {
  postId: Scalars['ID']['input'];
};


export type MutationPostUpdateArgs = {
  post: PostInput;
  postId: Scalars['ID']['input'];
};


export type MutationRegisterUserArgs = {
  user: UserInput;
};

export type Post = {
  __typename?: 'Post';
  comments: Array<Comment>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  postContent?: Maybe<Scalars['String']['output']>;
  postParentId: Scalars['ID']['output'];
  userId: Scalars['ID']['output'];
  videos?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PostInput = {
  postContent?: InputMaybe<Scalars['String']['input']>;
};

export type PostPayload = {
  __typename?: 'PostPayload';
  error: Array<Error>;
  post?: Maybe<Post>;
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
  comments: Array<Comment>;
  posts: Array<Post>;
  profiles: Array<Profile>;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  followedBy: Array<User>;
  following: Array<User>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
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

export type UserPayload = {
  __typename?: 'UserPayload';
  error: Array<Error>;
  user?: Maybe<User>;
};
