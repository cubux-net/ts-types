import type { IfEquals } from './IfEquals';

it('type check', () => {
  expect(true).toBe<IfEquals<never, never>>(true);
  expect(true).toBe<IfEquals<unknown, unknown>>(true);
  expect(true).toBe<IfEquals<any, any>>(true);

  expect(false).toBe<IfEquals<never, unknown, never, false>>(false);
  expect(false).toBe<IfEquals<never, any, never, false>>(false);
  expect(false).toBe<IfEquals<unknown, never, never, false>>(false);
  expect(false).toBe<IfEquals<unknown, any, never, false>>(false);
  expect(false).toBe<IfEquals<any, never, never, false>>(false);
  expect(false).toBe<IfEquals<any, unknown, never, false>>(false);
});
