/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query ExtractSkills($text: String!, $threshold: Float!) {\n    extractSkills(text: $text, threshold: $threshold) {\n      name\n      value\n      mine\n    }\n  }\n": types.ExtractSkillsDocument,
};

export function graphql(source: "\n  query ExtractSkills($text: String!, $threshold: Float!) {\n    extractSkills(text: $text, threshold: $threshold) {\n      name\n      value\n      mine\n    }\n  }\n"): (typeof documents)["\n  query ExtractSkills($text: String!, $threshold: Float!) {\n    extractSkills(text: $text, threshold: $threshold) {\n      name\n      value\n      mine\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;