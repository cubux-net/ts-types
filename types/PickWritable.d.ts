import type { WritableKeys } from './WritableKeys';

/**
 * Pick writable properties of T
 *
 * Returns properties of `T` which are writable, t.i. has no `readonly`
 * attribute.
 *
 * ```ts
 * interface A {
 *   readonly x: number;
 *   readonly y: number;
 *   z: number;
 *   t: number;
 * }
 *
 * type T = PickWritable<A>;
 * // {
 * //   z: number;
 * //   t: number;
 * // }
 * ```
 *
 * @see https://stackoverflow.com/a/52473108
 */
export type PickWritable<T> = Pick<T, WritableKeys<T>>;
