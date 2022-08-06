import type { IfEquals } from './IfEquals';

/**
 * Which keys of `T` are symmetrically compatible with type `V`
 *
 * ```ts
 * interface I {
 *   a: string;
 *   b?: string;
 *   c: number;
 *   d?: number | null;
 * }
 *
 * type I1 = CompatibleKeys<I, string>;
 * // 'a'
 *
 * type I2 = CompatibleKeys<I, string | undefined>;
 * // 'b'
 *
 * type I3 = CompatibleKeys<I, undefined>;
 * // never
 *
 * type I4 = CompatibleKeys<I, number>;
 * // 'c'
 *
 * type I5 = CompatibleKeys<I, null>;
 * // never
 * ```
 */
export type CompatibleKeys<T, V> = {
  [K in keyof Required<T>]: IfEquals<T[K], V, K>;
}[keyof T];
