import type { Falsy } from './Falsy';
import type { IfEquals } from './IfEquals';

it('type check', () => {
  expect(false).toBe<Falsy>(false);
  expect(null).toBe<Falsy>(null);
  expect(undefined).toBe<Falsy>(undefined);
  expect(0).toBe<Falsy>(0);
  expect('').toBe<Falsy>('');

  expect(true).toBe<IfEquals<true, Exclude<boolean, Falsy>>>(true);
  expect(true).toBe<IfEquals<number, Exclude<number | null, Falsy>>>(true);
  expect(true).toBe<IfEquals<number, Exclude<number | undefined, Falsy>>>(true);
  expect(true).toBe<IfEquals<42, Exclude<42 | 0, Falsy>>>(true);
  expect(true).toBe<IfEquals<'ok', Exclude<'ok' | '', Falsy>>>(true);
});
