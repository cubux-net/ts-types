import type { IfAssignable } from './IfAssignable';
import type { IfEquals } from './IfEquals';
import type { PartialRest } from './PartialRest';

it('type check', () => {
  interface I {
    x: number;
    y: string;
    z?: number;
  }

  type X = PartialRest<I, 'x'>;

  expect(true).toBe<IfAssignable<{ x: number }, X>>(true);

  expect(true).toBe<
    IfEquals<
      {
        x: number;
        y?: string | undefined;
        z?: number | undefined;
      },
      X
    >
  >(true);
});
