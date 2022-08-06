import type { IfAssignable } from './IfAssignable';

it('type check', () => {
  expect(true).toBe<IfAssignable<number | string, number>>(true);
  expect(true).toBe<IfAssignable<number | string, string>>(true);
  expect(true).toBe<IfAssignable<number | string, number | string>>(true);

  expect(false).toBe<IfAssignable<number | string, null, never, false>>(false);
  expect(false).toBe<IfAssignable<number, number | string, never, false>>(
    false
  );
});
