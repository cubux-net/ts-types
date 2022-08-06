import type { IfAssignable } from './IfAssignable';
import type { IfEquals } from './IfEquals';
import type { ToObject } from './ToObject';

it('type check', () => {
  interface A {
    a: number;
    b?: string;
  }
  interface B {
    c: boolean;
    d?: null;
  }

  expect(true).toBe<
    IfAssignable<
      {
        a: number;
        c: boolean;
      },
      A & B
    >
  >(true);

  expect(true).toBe<
    IfEquals<
      {
        a: number;
        b?: string;
        c: boolean;
        d?: null;
      },
      ToObject<A & B>
    >
  >(true);
});
