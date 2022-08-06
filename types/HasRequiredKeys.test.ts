import type { HasRequiredKeys } from './HasRequiredKeys';

it('type check', () => {
  expect(true).toBe<HasRequiredKeys<{ x: number }>>(true);
  expect(true).toBe<HasRequiredKeys<{ x: number; y?: string }>>(true);

  expect(false).toBe<HasRequiredKeys<{ x?: number; y?: string }>>(false);
  expect(false).toBe<HasRequiredKeys<{}>>(false);
});
