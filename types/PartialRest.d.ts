import type { ToObject } from './ToObject';

/**
 * Keep given props as is and make all the rest props optional
 *
 * ```ts
 * interface I {
 *   x: number;
 *   y: string;
 *   z?: number;
 * }
 *
 * type T = PartialRest<I, 'x'>;
 * // {
 * //   x: number;
 * //   y?: string | undefined;
 * //   z?: number | undefined;
 * // }
 * ```
 */
export type PartialRest<T, Keep extends keyof T> = ToObject<
  Pick<T, Keep> & Partial<Omit<T, Keep>>
>;
