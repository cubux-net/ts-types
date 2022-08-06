import type { IfEquals } from './IfEquals';
import type { ObjectEntries } from './ObjectEntries';

declare const SYM: unique symbol;

it('type check', () => {
  interface I {
    a: number;
    b?: string;
    readonly c?: typeof SYM;
    [SYM]: 42;
  }

  expect(true).toBe<
    IfEquals<
      readonly (
        | readonly ['a', number]
        | readonly ['b', string | undefined]
        | readonly ['c', typeof SYM | undefined]
        | readonly [typeof SYM, 42]
      )[],
      ObjectEntries<I>
    >
  >(true);
});
