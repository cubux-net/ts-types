import type { DenyOverlappedKeys } from './DenyOverlappedKeys';
import type { IfEquals } from './IfEquals';

it('denies overlapping props', () => {
  interface A {
    x: number;
  }
  interface B {
    y: string;
  }
  interface Empty {}

  expect(true).toBe<IfEquals<A & B, DenyOverlappedKeys<A, B>>>(true);
  expect(true).toBe<IfEquals<A, DenyOverlappedKeys<A, Empty>>>(true);
  expect(true).toBe<IfEquals<A, DenyOverlappedKeys<A, {}>>>(true);
  expect(true).toBe<IfEquals<B, DenyOverlappedKeys<Empty, B>>>(true);
  expect(true).toBe<IfEquals<B, DenyOverlappedKeys<{}, B>>>(true);
  expect(true).toBe<IfEquals<Empty, DenyOverlappedKeys<Empty, Empty>>>(true);
  expect(true).toBe<IfEquals<{}, DenyOverlappedKeys<{}, {}>>>(true);

  expect(true).toBe<
    IfEquals<never, DenyOverlappedKeys<A, { x?: number; y: string }>>
  >(true);
});
