import type { IfAssignable } from './IfAssignable';
import type { IfEquals } from './IfEquals';
import type { RequireProps } from './RequireProps';

describe('type check', () => {
  interface I {
    x?: number;
    y?: string | undefined;
    z: number;
    t: string | undefined;
  }

  it('x', () => {
    type A = RequireProps<I, 'x'>;

    expect(true).toBe<
      IfAssignable<
        {
          x: number | undefined;
          z: number;
          t: string | undefined;
        },
        A
      >
    >(true);

    expect(true).toBe<
      IfEquals<
        {
          x: number | undefined;
          y?: string | undefined;
          z: number;
          t: string | undefined;
        },
        A
      >
    >(true);
  });

  it('y', () => {
    type B = RequireProps<I, 'y'>;

    expect(true).toBe<
      IfAssignable<
        {
          y: string | undefined;
          z: number;
          t: string | undefined;
        },
        B
      >
    >(true);

    expect(true).toBe<
      IfEquals<
        {
          x?: number;
          y: string | undefined;
          z: number;
          t: string | undefined;
        },
        B
      >
    >(true);
  });

  it('x | y', () => {
    type C = RequireProps<I, 'x' | 'y'>;

    expect(true).toBe<
      IfAssignable<
        {
          x: number | undefined;
          y: string | undefined;
          z: number;
          t: string | undefined;
        },
        C
      >
    >(true);

    expect(true).toBe<
      IfEquals<
        {
          x: number | undefined;
          y: string | undefined;
          z: number;
          t: string | undefined;
        },
        C
      >
    >(true);
  });
});
