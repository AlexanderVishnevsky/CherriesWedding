import { ReactNode } from 'react';

export type JSXChild = { children?: ReactNode };

/**
 * Nullable check
 */
export type NUL<T> = T | null;

/**
 * Undefined check
 */
export type EMP<T> = T | undefined;

/**
 * Nullable & Undefined check
 */
export type EMP_NUL<T> = NUL<T> | undefined;
