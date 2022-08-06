import type { IfEquals } from './IfEquals';

/**
 * Get those keys of `T` which don't have `readonly` attribute
 *
 * ```ts
 * interface A {
 *   readonly x: number;
 *   readonly y: number;
 *   z: number;
 *   t: number;
 * }
 *
 * type T = WritableKeys<A>;
 * // 'z' | 't'
 * ```
 *
 * @see https://stackoverflow.com/a/52473108
 */
export type WritableKeys<T> = {
  [P in keyof Required<T>]: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    P
  >;
}[keyof T];
