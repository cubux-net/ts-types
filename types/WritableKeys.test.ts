import type { WritableKeys } from './WritableKeys';
import type { IfEquals } from './IfEquals';

it('type check', () => {
  interface I {
    readonly x: number;
    readonly y: number;
    z: number;
    t: number;
  }

  expect(true).toBe<IfEquals<'z' | 't', WritableKeys<I>>>(true);
});
