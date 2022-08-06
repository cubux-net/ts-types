import type { IfAssignable } from './IfAssignable';

/**
 * Get keys of `T` which `V` value can be assigned to
 *
 * Example:
 *
 * ```ts
 * interface I {
 *   N: null;
 *   i: number;
 *   si?: number | string;
 *   b?: boolean;
 * }
 *
 * type TN = AssignableKeys<I, null>;
 * // "N"
 *
 * type Tn = AssignableKeys<I, number>;
 * // "i" | "si"
 *
 * type Ts = AssignableKeys<I, string>;
 * // "si"
 *
 * type Tb = AssignableKeys<I, boolean>;
 * // "b"
 *
 * type Tu = AssignableKeys<I, undefined>;
 * // "si" | "b"
 *
 * type Tsn = AssignableKeys<I, string | number>;
 * // "si"
 *
 * type TuN = AssignableKeys<I, undefined | null>;
 * // never
 * ```
 */
export type AssignableKeys<T, V> = {
  [K in keyof Required<T>]: IfAssignable<T[K], V, K>;
}[keyof T];
