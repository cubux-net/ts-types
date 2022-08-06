import type { IfAssignable } from './IfAssignable';
import type { IfEquals } from './IfEquals';
import type { PartialSome } from './PartialSome';

it('type check', () => {
  interface I {
    x: number;
    y: string;
    z?: number;
  }

  type A = PartialSome<I, 'y'>;

  expect(true).toBe<IfAssignable<{ x: number }, A>>(true);

  expect(true).toBe<
    IfEquals<
      {
        x: number;
        y?: string | undefined;
        z?: number | undefined;
      },
      A
    >
  >(true);
});
