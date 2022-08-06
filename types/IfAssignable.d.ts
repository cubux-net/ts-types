/**
 * If a value of type `Value` can be assigned to a receiver of type `Receiver`,
 * then results to type `Then`, otherwise to type `Else`.
 *
 * ```ts
 * type A = IfAssignable<number | string, number>;
 * // true
 *
 * type B = IfAssignable<number | string, string>;
 * // true
 *
 * type C = IfAssignable<number | string, boolean>;
 * // never
 *
 * type D = IfAssignable<number, number | string>;
 * // never
 * ```
 */
export type IfAssignable<
  Receiver,
  Value,
  Then = true,
  Else = never
> = (() => Value) extends () => Receiver ? Then : Else;
