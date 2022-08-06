import type { CompatibleKeys } from './CompatibleKeys';
import type { IfEquals } from './IfEquals';

it('type check', () => {
  interface I {
    a: string;
    b?: string;
    c: number;
    d?: number | null;
  }

  expect(true).toBe<IfEquals<'a', CompatibleKeys<I, string>>>(true);
  expect(true).toBe<IfEquals<'b', CompatibleKeys<I, string | undefined>>>(true);
  expect(true).toBe<IfEquals<never, CompatibleKeys<I, undefined>>>(true);
  expect(true).toBe<IfEquals<'c', CompatibleKeys<I, number>>>(true);
  expect(true).toBe<IfEquals<never, CompatibleKeys<I, null>>>(true);
});
