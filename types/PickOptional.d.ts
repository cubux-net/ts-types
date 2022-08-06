import type { RequiredKeys } from './RequiredKeys';

/**
 * Pick only optional props
 *
 * ```ts
 * interface I {
 *   x: number;
 *   y: string;
 *   z?: boolean;
 *   t?: Date | null;
 * }
 *
 * type A = PickOptional<I>;
 * // {
 * //   z?: boolean | undefined;
 * //   t?: Date | null | undefined;
 * // }
 * ```
 */
export type PickOptional<T> = Omit<T, RequiredKeys<T>>;
