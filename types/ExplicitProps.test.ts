import type { ExplicitProps } from './ExplicitProps';
import type { IfEquals } from './IfEquals';

it('type check', () => {
  interface I {
    x?: number;
    y?: string | undefined;
    z: boolean;
  }

  expect(true).toBe<
    IfEquals<
      {
        x: number | undefined;
        y: string | undefined;
        z: boolean;
      },
      ExplicitProps<I>
    >
  >(true);

  expect(true).toBe<
    IfEquals<
      {
        x: number | undefined;
      },
      ExplicitProps<I, 'x'>
    >
  >(true);

  expect(true).toBe<
    IfEquals<
      {
        y: string | undefined;
        z: boolean;
      },
      ExplicitProps<I, 'y' | 'z'>
    >
  >(true);
});
