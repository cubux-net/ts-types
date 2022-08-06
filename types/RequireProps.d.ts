import type { ExplicitProps } from './ExplicitProps';
import type { ToObject } from './ToObject';

/**
 * Make the given properties required and keep all the rest as is
 *
 * ```ts
 * interface I {
 *   x?: number;
 *   y?: string | undefined;
 *   z: number;
 *   t: string | undefined;
 * }
 *
 * type A = RequireProps<I, 'x'>;
 * // {
 * //   x: number | undefined;
 * //   y?: string | undefined;
 * //   z: number;
 * //   t: string | undefined;
 * // }
 *
 * type B = RequireProps<I, 'y'>;
 * // {
 * //   x?: number;
 * //   y: string | undefined;
 * //   z: number;
 * //   t: string | undefined;
 * // }
 *
 * type C = RequireProps<I, 'x' | 'y'>;
 * // {
 * //   x: number | undefined;
 * //   y: string | undefined;
 * //   z: number;
 * //   t: string | undefined;
 * // }
 * ```
 */
export type RequireProps<T, K extends keyof T> = ToObject<
  ExplicitProps<T, K> & Omit<T, K>
>;
