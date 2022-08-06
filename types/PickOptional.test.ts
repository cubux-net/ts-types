import type { IfAssignable } from './IfAssignable';
import type { IfEquals } from './IfEquals';
import type { PickOptional } from './PickOptional';

it('type check', () => {
  interface I {
    x: number;
    y: string;
    z?: boolean;
    t?: Date | null;
  }

  type A = PickOptional<I>;

  expect(true).toBe<IfAssignable<{}, A>>(true);

  expect(true).toBe<
    IfEquals<
      {
        z?: boolean | undefined;
        t?: Date | null | undefined;
      },
      A
    >
  >(true);
});
