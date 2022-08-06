import type { AssignableKeys } from './AssignableKeys';
import type { IfEquals } from './IfEquals';

it('type check', () => {
  interface I {
    N: null;
    i: number;
    si?: number | string;
    b?: boolean;
  }

  expect(true).toBe<IfEquals<'N', AssignableKeys<I, null>>>(true);
  expect(true).toBe<IfEquals<'i' | 'si', AssignableKeys<I, number>>>(true);
  expect(true).toBe<IfEquals<'si', AssignableKeys<I, string>>>(true);
  expect(true).toBe<IfEquals<'b', AssignableKeys<I, boolean>>>(true);
  expect(true).toBe<IfEquals<'si' | 'b', AssignableKeys<I, undefined>>>(true);
  expect(true).toBe<IfEquals<'si', AssignableKeys<I, string | number>>>(true);
  expect(true).toBe<IfEquals<never, AssignableKeys<I, null | undefined>>>(true);
});
