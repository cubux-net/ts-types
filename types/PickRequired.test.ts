import type { IfAssignable } from './IfAssignable';
import type { IfEquals } from './IfEquals';
import type { PickRequired } from './PickRequired';

it('type check', () => {
  interface I {
    x: number;
    y: number | undefined;
    z?: number;
  }

  type R = PickRequired<I>;

  expect(true).toBe<
    IfAssignable<
      {
        x: number;
        y: number | undefined;
      },
      R
    >
  >(true);

  expect(true).toBe<
    IfEquals<
      {
        x: number;
        y: number | undefined;
      },
      R
    >
  >(true);
});
