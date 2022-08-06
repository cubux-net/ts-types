import type { DenyKeys } from './DenyKeys';
import type { IfEquals } from './IfEquals';

it('direct', () => {
  interface Valid {
    a: number;
    b?: string;
  }
  interface Invalid {
    a: number;
    x: number;
    y?: string;
  }

  type WithValid = DenyKeys<Valid, 'x' | 'y'>;
  type WithInvalid = DenyKeys<Invalid, 'x' | 'y'>;

  expect(true).toBe<IfEquals<Valid, WithValid>>(true);
  expect(true).toBe<
    IfEquals<
      {
        a: number;
        x: readonly [never, 'Property is denied', 'x'];
        y?: readonly [never, 'Property is denied', 'y'];
      },
      WithInvalid
    >
  >(true);
});

it('type guard', () => {
  function foo<T extends object & DenyKeys<T, 'x' | 'y'>>(_: T) {
    return null;
  }

  expect(
    foo(
      // @ts-expect-error
      42
    )
  ).toBe(null);

  expect(
    foo({
      a: 1,
      b: 2,
      // @ts-expect-error
      x: 42,
    })
  ).toBe(null);

  expect(
    foo({
      a: 1,
      b: 2,
      // @ts-expect-error
      x: null,
      // @ts-expect-error
      y: undefined,
    })
  ).toBe(null);
});
