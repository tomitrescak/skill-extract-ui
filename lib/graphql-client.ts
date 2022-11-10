'use client';

import { GraphQLClient, RequestDocument, Variables } from 'graphql-request';
import { useCallback, useState } from 'react';

import { TypedDocumentNode } from '@graphql-typed-document-node/core';

export const graphqlClient = new GraphQLClient('https://jobfit-api.trescak.co');

// export function useLazyQuery<T = any, V = Variables>(
//   document: RequestDocument | TypedDocumentNode<T, V>,
//   ..._variablesAndRequestHeaders: V extends Record<any, never>
//     ? [variables?: V, requestHeaders?: Dom.RequestInit['headers']]
//     : keyof RemoveIndex<V> extends never
//     ? [variables?: V, requestHeaders?: Dom.RequestInit['headers']]
//     : [variables: V, requestHeaders?: Dom.RequestInit['headers']]
// ): [(v: { variables: V }) => Promise<T>, { data: T | null; loading: boolean }] {

export function useLazyQuery<T = any, V = Variables>(
  document: RequestDocument | TypedDocumentNode<T, V>,
): [(v: { variables: V }) => Promise<T>, { data: T | null; loading: boolean }] {
  // export function useLazyQuery<T = any, V = Variables>(
  //   options: RequestOptions<V>,
  // ): Promise<T>;
  // export function useLazyQuery(...args: any[]): Promise<T>
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const cb = useCallback(({ variables }: { variables: V }) => {
    return new Promise<T>((resolve, reject) => {
      setLoading(true);

      graphqlClient
        //@ts-ignore
        .request(document, variables)
        .then((data) => {
          setData(data);
          setLoading(false);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
          setLoading(false);
        });
    });
  }, []);

  return [cb, { loading, data }];
}
