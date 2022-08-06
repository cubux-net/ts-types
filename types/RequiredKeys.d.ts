/**
 * Pick keys which are required
 *
 * ```ts
 * interface I {
 *   x: number;
 *   y: number | undefined;
 *   z?: number;
 * }
 *
 * type R = RequiredKeys<I>;
 * // 'x' | 'y'
 * ```
 */
export type RequiredKeys<T, K extends keyof T = keyof T> = K extends any
  ? {} extends Pick<T, K>
    ? never
    : K
  : never;
