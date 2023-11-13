import Router from 'next/router';
import { ParsedUrlQueryInput } from 'node:querystring';
import type { UrlObject as NativeUrlObject } from 'node:url';

export type UrlQuery = string | null | ParsedUrlQueryInput | undefined;

export type NextUrl = NativeUrlObject | string;
export type UrlObject<TQuery = UrlQuery> = NativeUrlObject & { query: TQuery };

// :shrug: https://github.com/vercel/next.js/pull/31706
export type NextTransitionOptions = Parameters<typeof Router.push>[2];
