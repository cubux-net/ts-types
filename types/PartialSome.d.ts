import type { ToObject } from './ToObject';

/**
 * Make given props optional and keep all the rest props as is
 *
 * ```ts
 * interface I {
 *   x: number;
 *   y: string;
 *   z?: number;
 * }
 *
 * type T = PartialSome<I, 'y'>;
 * // {
 * //   x: number;
 * //   y?: string | undefined;
 * //   z?: number | undefined;
 * // }
 * ```
 */
export type PartialSome<T, K extends keyof T> = ToObject<
  Partial<Pick<T, K>> & Omit<T, K>
>;
