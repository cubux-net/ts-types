/**
 * Intersection of two types denying overlapping keys
 *
 * ```ts
 * interface A {
 *   x: number;
 * }
 * interface B {
 *   y: string;
 * }
 *
 * type A = DenyOverlappedKeys<A, B>;
 * // A & B
 *
 * type B = DenyOverlappedKeys<A, { y: string, x?: number }>;
 * // never
 * ```
 */
export type DenyOverlappedKeys<A, B> = keyof A extends never
  ? B
  : keyof B extends never
  ? A
  : keyof A & keyof B extends never
  ? A & B
  : never;
