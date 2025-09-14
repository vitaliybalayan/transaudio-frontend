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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type JobModel = {
  __typename?: 'JobModel';
  createdAt: Scalars['DateTime']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  status: JobStatus;
  transcriptionText?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum JobStatus {
  Created = 'CREATED',
  Error = 'ERROR',
  Success = 'SUCCESS'
}

export type Mutation = {
  __typename?: 'Mutation';
  createTranscriptionJob: Scalars['String']['output'];
};


export type MutationCreateTranscriptionJobArgs = {
  audio: Scalars['Upload']['input'];
};

export type Query = {
  __typename?: 'Query';
  getJobs: Array<JobModel>;
};

export type CreateTranscriptionJobMutationVariables = Exact<{
  audio: Scalars['Upload']['input'];
}>;


export type CreateTranscriptionJobMutation = { __typename?: 'Mutation', createTranscriptionJob: string };

export type GetAllJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllJobsQuery = { __typename?: 'Query', getJobs: Array<{ __typename?: 'JobModel', id: string, filename: string, status: JobStatus, updatedAt: any, transcriptionText?: string | null }> };


export const CreateTranscriptionJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTranscriptionJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"audio"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTranscriptionJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"audio"},"value":{"kind":"Variable","name":{"kind":"Name","value":"audio"}}}]}]}}]} as unknown as DocumentNode<CreateTranscriptionJobMutation, CreateTranscriptionJobMutationVariables>;
export const GetAllJobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getJobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transcriptionText"}}]}}]}}]} as unknown as DocumentNode<GetAllJobsQuery, GetAllJobsQueryVariables>;