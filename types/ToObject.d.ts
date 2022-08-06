/**
 * Try to map given type into single object type. This can help in some cases,
 * for example with conjunction type `A & B`.
 *
 * ```ts
 * interface A {
 *   a: number;
 * }
 * interface B {
 *   b: string;
 * }
 *
 * type C = ToObject<A & B>;
 * // {
 * //   a: number;
 * //   b: string;
 * // }
 * ```
 */
export type ToObject<T> = { [K in keyof T]: T[K] };
