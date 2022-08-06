/**
 * The type that `Object.entries(o: T)` should to return in some cases
 *
 * ```ts
 * interface I {
 *   a: number;
 *   b?: string;
 * }
 *
 * type E = ObjectEntries<I>;
 * // readonly (
 * //   | readonly ["a", number]
 * //   | readonly ["b", string | undefined]
 * // )[]
 * ```
 */
export type ObjectEntries<T> = readonly {
  [K in keyof Required<T>]: readonly [K, T[K]];
}[keyof T][];
