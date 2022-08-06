import type { IfAssignable } from './IfAssignable';
import type { IfEquals } from './IfEquals';
import type { UnionToIntersection } from './UnionToIntersection';

it('type check', () => {
  interface A {
    a: number;
  }
  interface B {
    b: string;
  }

  type U = A | B;
  type I = UnionToIntersection<U>;

  expect(true).toBe<IfEquals<A & B, I>>(true);
  expect(true).toBe<IfAssignable<U, A>>(true);
  expect(true).toBe<IfAssignable<U, B>>(true);
  expect(true).toBe<IfAssignable<A, I>>(true);
  expect(true).toBe<IfAssignable<B, I>>(true);
});
