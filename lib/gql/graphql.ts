/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Date: any;
};

export type CombinationsResult = {
  __typename?: 'CombinationsResult';
  combinations: Array<Array<Scalars['Int']>>;
  handbook: Array<Handbook>;
  totalCombinations?: Maybe<Scalars['Float']>;
};

export type EmbedResult = {
  __typename?: 'EmbedResult';
  id?: Maybe<Scalars['Int']>;
  max?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  values: Array<EmbedValue>;
};

export type EmbedValue = {
  __typename?: 'EmbedValue';
  source?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type Handbook = {
  __typename?: 'Handbook';
  credits?: Maybe<Scalars['Int']>;
  flagged?: Maybe<Scalars['Boolean']>;
  folder?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  index?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  maxNumber?: Maybe<Scalars['Int']>;
  nodeId: Scalars['Int'];
  number?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  programId?: Maybe<Scalars['Int']>;
  reference?: Maybe<Scalars['Int']>;
  selection?: Maybe<Selection>;
  selector?: Maybe<Scalars['String']>;
  specialisationId?: Maybe<Scalars['Int']>;
  subjectCode?: Maybe<Scalars['String']>;
  subjectName?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  type: NodeType;
};

export type HandbookInput = {
  collection?: InputMaybe<Scalars['Int']>;
  credits?: InputMaybe<Scalars['Int']>;
  flagged?: InputMaybe<Scalars['Boolean']>;
  folder?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  index?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  maxNumber?: InputMaybe<Scalars['Int']>;
  nodeId: Scalars['Int'];
  number?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  reference?: InputMaybe<Scalars['Int']>;
  selection?: InputMaybe<Selection>;
  selector?: InputMaybe<Scalars['String']>;
  subjectCode?: InputMaybe<Scalars['String']>;
  subjectName?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  type: NodeType;
};

export type Job = {
  __typename?: 'Job';
  Skills: Array<JobSkills>;
  anzscoCode?: Maybe<Scalars['Int']>;
  anzscoMinorId?: Maybe<Scalars['Int']>;
  anzscoRoleId?: Maybe<Scalars['Int']>;
  anzscoUnitId?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['Date']>;
  domain?: Maybe<Scalars['String']>;
  domainId?: Maybe<Scalars['String']>;
  duplicateId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  employer?: Maybe<Scalars['String']>;
  expiryDate?: Maybe<Scalars['Date']>;
  id: Scalars['Int'];
  intermediary?: Maybe<Scalars['String']>;
  jobId?: Maybe<Scalars['BigInt']>;
  jobReferenceId?: Maybe<Scalars['String']>;
  jobType?: Maybe<Scalars['String']>;
  maxAnnualSalary?: Maybe<Scalars['Float']>;
  maxExperience?: Maybe<Scalars['Float']>;
  maxHourlySalary?: Maybe<Scalars['Float']>;
  maximumDegree?: Maybe<Scalars['String']>;
  minAnnualSalary?: Maybe<Scalars['Float']>;
  minExperience?: Maybe<Scalars['Float']>;
  minHourlySalary?: Maybe<Scalars['Float']>;
  minimumDegree?: Maybe<Scalars['String']>;
  otherDegrees?: Maybe<Scalars['String']>;
  preferredDegrees?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  requiredDegrees?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  standardMajor?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type JobInfo = {
  __typename?: 'JobInfo';
  info?: Maybe<Job>;
  rating: Array<Scalars['Float']>;
  relatedSkills: Array<SkillInfo>;
  skills: Array<SkillInfo>;
};

export type JobRecommendation = {
  __typename?: 'JobRecommendation';
  currentRole: Array<JobInfo>;
  parentRole: Array<JobInfo>;
};

export type JobSkills = {
  __typename?: 'JobSkills';
  Skill?: Maybe<SkillCluster>;
  job?: Maybe<Job>;
  jobId?: Maybe<Scalars['Int']>;
  skillId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Float']>;
};

export type Keyword = {
  __typename?: 'Keyword';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  saveSkill: Skill;
};


export type MutationSaveSkillArgs = {
  skill: SkillInput;
};

export enum NodeType {
  Collection = 'Collection',
  ConstraintProgram = 'ConstraintProgram',
  ConstraintProgramNot = 'ConstraintProgramNot',
  Folder = 'Folder',
  Info = 'Info',
  LinkCollection = 'LinkCollection',
  LinkElective = 'LinkElective',
  LinkMajor = 'LinkMajor',
  LinkMinor = 'LinkMinor',
  LinkProgram = 'LinkProgram',
  Program = 'Program',
  Sequence = 'Sequence',
  Structure = 'Structure',
  Subject = 'Subject'
}

export type OptionsInfo = {
  __typename?: 'OptionsInfo';
  match: Scalars['Float'];
  rating: Array<Scalars['Float']>;
  skills: Array<SkillInfo>;
  specialisations: Array<SpecialisationInfo>;
};

export type ProgramRecommendation = {
  __typename?: 'ProgramRecommendation';
  description?: Maybe<Scalars['String']>;
  options: Array<OptionsInfo>;
  programId: Scalars['Int'];
  programName: Scalars['String'];
  rating: Array<Scalars['Float']>;
  skillMatch: Scalars['Float'];
  skills: Array<SkillInfo>;
};

export type Query = {
  __typename?: 'Query';
  allCombinations?: Maybe<CombinationsResult>;
  checkEmbeddings?: Maybe<EmbedResult>;
  extractSkills: Array<SkillInfo>;
  keywords: Array<Keyword>;
  programHandbook: Array<Handbook>;
  recommendJobsForPerson: Array<JobInfo>;
  recommendJobsForProgram?: Maybe<JobRecommendation>;
  recommendJobsForSubject: Array<JobInfo>;
  recommendProgramForRoles: Array<ProgramRecommendation>;
  recommendRolesForPerson: Array<Scalars['Int']>;
  recommendSubjectsForRoles: Array<SubjectRecommendation>;
  resolveConstraints: Array<Handbook>;
  skill?: Maybe<Skill>;
  skillClusters: Array<SkillCluster>;
  skills: Array<Skill>;
  stepFourResolveNodes?: Maybe<CombinationsResult>;
  stepOneExpandExternalLinks?: Maybe<CombinationsResult>;
  stepThreeExpandConditions?: Maybe<CombinationsResult>;
  stepTwoExpandExtremes?: Maybe<CombinationsResult>;
};


export type QueryAllCombinationsArgs = {
  handbook: Array<HandbookInput>;
  ownerId: Scalars['Int'];
  programId: Scalars['Int'];
};


export type QueryCheckEmbeddingsArgs = {
  description: Scalars['String'];
  skill: Scalars['String'];
};


export type QueryExtractSkillsArgs = {
  text: Scalars['String'];
  threshold: Scalars['Float'];
};


export type QueryProgramHandbookArgs = {
  programId: Scalars['Int'];
  specialisationId?: InputMaybe<Scalars['Int']>;
};


export type QueryRecommendJobsForPersonArgs = {
  skills: Array<SkillInfoInput>;
};


export type QueryRecommendJobsForProgramArgs = {
  optionIndex?: InputMaybe<Scalars['Int']>;
  programId: Scalars['Int'];
  roleId: Scalars['String'];
};


export type QueryRecommendJobsForSubjectArgs = {
  code?: InputMaybe<Scalars['String']>;
};


export type QueryRecommendProgramForRolesArgs = {
  code: Scalars['Int'];
  programLevel: Scalars['String'];
};


export type QueryRecommendRolesForPersonArgs = {
  skills: Array<SkillInfoInput>;
};


export type QueryRecommendSubjectsForRolesArgs = {
  code: Scalars['Int'];
};


export type QueryResolveConstraintsArgs = {
  handbook: Array<HandbookInput>;
  programId: Scalars['Int'];
};


export type QuerySkillArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryStepFourResolveNodesArgs = {
  handbook: Array<HandbookInput>;
  ownerId: Scalars['Int'];
  programId: Scalars['Int'];
};


export type QueryStepOneExpandExternalLinksArgs = {
  handbook: Array<HandbookInput>;
  ownerId: Scalars['Int'];
  programId: Scalars['Int'];
};


export type QueryStepThreeExpandConditionsArgs = {
  handbook: Array<HandbookInput>;
};


export type QueryStepTwoExpandExtremesArgs = {
  handbook: Array<HandbookInput>;
  ownerId: Scalars['Int'];
  programId: Scalars['Int'];
};

export type RoleRecommendation = {
  __typename?: 'RoleRecommendation';
  roleId: Scalars['Int'];
  roleName: Scalars['String'];
};

export enum Selection {
  And = 'AND',
  Or = 'OR'
}

export type Sequence = {
  __typename?: 'Sequence';
  handbook?: Maybe<Handbook>;
  id?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
};

export type Skill = {
  __typename?: 'Skill';
  clusters?: Maybe<Array<Scalars['Int']>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  keywords?: Maybe<Array<Scalars['Int']>>;
  name: Scalars['String'];
  uid?: Maybe<Scalars['Int']>;
};

export type SkillCategory = {
  __typename?: 'SkillCategory';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type SkillCluster = {
  __typename?: 'SkillCluster';
  categories?: Maybe<Array<Scalars['Int']>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type SkillInfo = {
  __typename?: 'SkillInfo';
  id?: Maybe<Scalars['Int']>;
  mine?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  values?: Maybe<Array<TextInfo>>;
};

export type SkillInfoInput = {
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type SkillInput = {
  clusters?: InputMaybe<Array<Scalars['Int']>>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  keywords?: InputMaybe<Array<Scalars['Int']>>;
  name: Scalars['String'];
};

export type SpecialisationInfo = {
  __typename?: 'SpecialisationInfo';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type SubjectRecommendation = {
  __typename?: 'SubjectRecommendation';
  match: Scalars['Float'];
  name: Scalars['String'];
  rating: Array<Scalars['Float']>;
  skills: Array<SkillInfo>;
  subjectCode: Scalars['String'];
  subjectId: Scalars['String'];
};

export type TextInfo = {
  __typename?: 'TextInfo';
  source?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type ExtractSkillsQueryVariables = Exact<{
  text: Scalars['String'];
  threshold: Scalars['Float'];
}>;


export type ExtractSkillsQuery = { __typename?: 'Query', extractSkills: Array<{ __typename?: 'SkillInfo', name?: string | null, value?: number | null, mine?: number | null }> };


export const ExtractSkillsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExtractSkills"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threshold"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"extractSkills"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}},{"kind":"Argument","name":{"kind":"Name","value":"threshold"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threshold"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"mine"}}]}}]}}]} as unknown as DocumentNode<ExtractSkillsQuery, ExtractSkillsQueryVariables>;