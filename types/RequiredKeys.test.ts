import type { IfEquals } from './IfEquals';
import type { RequiredKeys } from './RequiredKeys';

it('type check', () => {
  interface I {
    x: number;
    y: number | undefined;
    z?: number;
  }

  expect(true).toBe<IfEquals<'x' | 'y', RequiredKeys<I>>>(true);
});
