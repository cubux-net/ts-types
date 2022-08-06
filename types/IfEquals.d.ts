/**
 * Type equivalence check
 *
 * If types `X` and `Y` are equivalent, the results to type `Then`, otherwise
 * results to type `Else`.
 *
 * @see https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-421529650
 */
export type IfEquals<X, Y, Then = true, Else = never> = (<T>() => T extends X
  ? 1
  : 2) extends <T>() => T extends Y ? 1 : 2
  ? Then
  : Else;
