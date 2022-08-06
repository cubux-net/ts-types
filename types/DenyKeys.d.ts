/**
 * Template type guard helper to deny given keys `P` in given type `T`
 *
 * Example:
 *
 * ```ts
 * function foo<T extends object & DenyKeys<T, 'x' | 'y'>>(data: T) {
 *   return null;
 * }
 *
 * foo(42);
 * //  ~~
 * // TS2345: Argument of type 'number' is not assignable to parameter of
 * // type 'never'.
 *
 * foo({ a: 1, b: 2, x: 42 });
 * //                ~
 * // TS2322: Type 'number' is not assignable to
 * // type 'readonly [never, "Property is Denied", "x"]'.
 *
 * foo({ a: 1, b: 2, x: null, y: undefined });
 * //                ~        ~
 * // TS2322: Type 'null' is not assignable to
 * // type 'readonly [never, "Property is Denied", "x"]'.
 * // TS2322: Type 'undefined' is not assignable to
 * // type 'readonly [never, "Property is Denied", "y"]'.
 * ```
 */
export type DenyKeys<T, P extends keyof any> = {
  [K in keyof T]: K extends P
    ? readonly [never, 'Property is denied', K]
    : T[K];
};
