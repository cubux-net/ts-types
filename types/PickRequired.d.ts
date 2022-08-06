import type { RequiredKeys } from './RequiredKeys';

/**
 * Pick properties which are required
 *
 * ```ts
 * interface I {
 *   x: number;
 *   y: number | undefined;
 *   z?: number;
 * }
 *
 * type R = PickRequired<I>;
 * //  {
 * //    x: number;
 * //    y: number | undefined;
 * //  }
 * ```
 */
export type PickRequired<T> = Pick<T, RequiredKeys<T>>;
