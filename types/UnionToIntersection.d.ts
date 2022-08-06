/**
 * Convert Union to Intersection
 *
 * ```ts
 * type C = UnionToIntersection<A | B>;
 * // A & B
 * ```
 *
 * @see https://github.com/microsoft/TypeScript/issues/29594 Declaration
 * @see https://github.com/microsoft/TypeScript/issues/29594#issuecomment-477068575 Explanation
 */
export type UnionToIntersection<U> = (
  U extends any ? (u: U) => void : never
) extends (u: infer I) => void
  ? I
  : never;
