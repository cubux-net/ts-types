import type { IfAssignable } from './IfAssignable';
import type { IfEquals } from './IfEquals';
import type { PickWritable } from './PickWritable';

it('type check', () => {
  interface I {
    readonly x: number;
    readonly y: number;
    z: number;
    t: number;
  }

  type A = PickWritable<I>;

  expect(true).toBe<IfAssignable<{ z: number; t: number }, A>>(true);

  expect(true).toBe<
    IfEquals<
      {
        z: number;
        t: number;
      },
      A
    >
  >(true);
});
