type ExplicitPropsInner<T, K extends keyof T = keyof T> = {
  // https://github.com/microsoft/TypeScript/issues/31025
  [P in K & keyof any]-?: T[P];
};

/**
 * Create new type from `T` with only given keys `K` making all explicit. This
 * differs from `Required<Pick<T, K>>` so optional keys `x?: V` become
 * `x: V | undefined` instead of `x: V` as `Required` does.
 *
 * ```ts
 * interface I {
 *   x?: number;
 *   y?: string | undefined;
 *   z: boolean;
 * }
 *
 * type A = ExplicitProps<I>;
 * // {
 * //   x: number | undefined;
 * //   y: string | undefined;
 * //   z: boolean;
 * // }
 *
 * type B = ExplicitProps<I, 'x'>;
 * // { x: number | undefined; }
 *
 * type C = ExplicitProps<I, 'y' | 'z'>;
 * // {
 * //   y: string | undefined;
 * //   z: boolean;
 * // }
 * ```
 */
export type ExplicitProps<T, K extends keyof T = keyof T> = T extends any
  ? ExplicitPropsInner<T, K>
  : never;
