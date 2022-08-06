/**
 * Whether the given type `T` has any required keys
 *
 * ```ts
 * type A = HasRequiredKeys<{ x?: number }>;
 * // false
 *
 * type B = HasRequiredKeys<{ x?: number; y: number | undefined }>;
 * // true
 * ```
 */
export type HasRequiredKeys<T> = {} extends T ? false : true;
