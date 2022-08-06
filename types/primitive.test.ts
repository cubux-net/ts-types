import type { IfAssignable } from './IfAssignable';
import type {
  AnyCode,
  AnyId,
  AnyKey,
  AnyUuid,
  CodeOf,
  IdOf,
  NominalType,
  NominalTypeFormat,
  UuidOf,
} from './primitive';

it('NominalType', () => {
  type NumA = NominalType<number, 'a'>;
  type NumB = NominalType<number, 'b'>;
  type NumAny = NominalType<number, string>;

  expect(true).toBe<IfAssignable<number, NumA>>(true);
  expect(true).toBe<IfAssignable<NumA, NumA>>(true);
  expect(true).toBe<IfAssignable<NumAny, NumA>>(true);
  expect(true).toBe<IfAssignable<AnyKey, NumA>>(true);

  expect(false).toBe<IfAssignable<NumA, number, never, false>>(false);
  expect(false).toBe<IfAssignable<NumA, NumB, never, false>>(false);
  expect(false).toBe<IfAssignable<NumA, NumAny, never, false>>(false);
  expect(false).toBe<IfAssignable<NumA, AnyKey, never, false>>(false);
});

it('NominalTypeFormat', () => {
  type NumAP = NominalTypeFormat<number, 'a', 'p'>;
  type NumAN = NominalTypeFormat<number, 'a', 'n'>;
  type NumA = NominalType<number, 'a'>;
  type NumB = NominalType<number, 'b'>;
  type NumAny = NominalTypeFormat<number, string, string>;

  expect(true).toBe<IfAssignable<number, NumAP>>(true);
  expect(true).toBe<IfAssignable<number, NumAN>>(true);
  expect(true).toBe<IfAssignable<NumAP, NumAP>>(true);
  expect(true).toBe<IfAssignable<NumAN, NumAN>>(true);
  expect(true).toBe<IfAssignable<NumA, NumAP>>(true);
  expect(true).toBe<IfAssignable<NumA, NumAN>>(true);
  expect(true).toBe<IfAssignable<NumAny, NumAP>>(true);
  expect(true).toBe<IfAssignable<NumAny, NumAN>>(true);
  expect(true).toBe<IfAssignable<AnyKey, NumAP>>(true);
  expect(true).toBe<IfAssignable<AnyKey, NumAN>>(true);

  expect(false).toBe<IfAssignable<NumAP, number, never, false>>(false);
  expect(false).toBe<IfAssignable<NumAN, number, never, false>>(false);
  expect(false).toBe<IfAssignable<NumAP, NumA, never, false>>(false);
  expect(false).toBe<IfAssignable<NumAN, NumA, never, false>>(false);
  expect(false).toBe<IfAssignable<NumAP, NumB, never, false>>(false);
  expect(false).toBe<IfAssignable<NumAN, NumB, never, false>>(false);
  expect(false).toBe<IfAssignable<NumB, NumAP, never, false>>(false);
  expect(false).toBe<IfAssignable<NumB, NumAN, never, false>>(false);
  expect(false).toBe<IfAssignable<NumAP, NumAN, never, false>>(false);
  expect(false).toBe<IfAssignable<NumAN, NumAP, never, false>>(false);
  expect(false).toBe<IfAssignable<NumAP, NumAny, never, false>>(false);
  expect(false).toBe<IfAssignable<NumAN, NumAny, never, false>>(false);
  expect(false).toBe<IfAssignable<NumAP, AnyKey, never, false>>(false);
  expect(false).toBe<IfAssignable<NumAN, AnyKey, never, false>>(false);
});

it('IdOf', () => {
  type AId = IdOf<'a'>;
  type BId = IdOf<'b'>;

  expect(true).toBe<IfAssignable<number, AId>>(true);
  expect(true).toBe<IfAssignable<AId, AId>>(true);
  expect(true).toBe<IfAssignable<AnyId, AId>>(true);
  expect(true).toBe<IfAssignable<AnyKey, AId>>(true);

  expect(false).toBe<IfAssignable<AId, number, never, false>>(false);
  expect(false).toBe<IfAssignable<AId, BId, never, false>>(false);
  expect(false).toBe<IfAssignable<AId, AnyId, never, false>>(false);
  expect(false).toBe<IfAssignable<AId, AnyKey, never, false>>(false);
});

it('UuidOf', () => {
  type AUuid = UuidOf<'a'>;
  type ACode = CodeOf<'a'>;
  type BUuid = UuidOf<'b'>;

  expect(true).toBe<IfAssignable<string, AUuid>>(true);
  expect(true).toBe<IfAssignable<AUuid, AUuid>>(true);
  expect(true).toBe<IfAssignable<AnyUuid, AUuid>>(true);
  expect(true).toBe<IfAssignable<AnyKey, AUuid>>(true);

  expect(false).toBe<IfAssignable<AUuid, string, never, false>>(false);
  expect(false).toBe<IfAssignable<AUuid, ACode, never, false>>(false);
  expect(false).toBe<IfAssignable<AUuid, BUuid, never, false>>(false);
  expect(false).toBe<IfAssignable<AUuid, AnyUuid, never, false>>(false);
  expect(false).toBe<IfAssignable<AUuid, AnyKey, never, false>>(false);
});

it('CodeOf', () => {
  type ACode = CodeOf<'a'>;
  type AUuid = UuidOf<'a'>;
  type BCode = CodeOf<'b'>;

  expect(true).toBe<IfAssignable<string, ACode>>(true);
  expect(true).toBe<IfAssignable<ACode, ACode>>(true);
  expect(true).toBe<IfAssignable<AnyCode, ACode>>(true);
  expect(true).toBe<IfAssignable<AnyKey, ACode>>(true);

  expect(false).toBe<IfAssignable<ACode, string, never, false>>(false);
  expect(false).toBe<IfAssignable<ACode, AUuid, never, false>>(false);
  expect(false).toBe<IfAssignable<ACode, BCode, never, false>>(false);
  expect(false).toBe<IfAssignable<ACode, AnyCode, never, false>>(false);
  expect(false).toBe<IfAssignable<ACode, AnyKey, never, false>>(false);
});

it('AnyKey', () => {
  expect(true).toBe<IfAssignable<AnyKey, number>>(true);
  expect(true).toBe<IfAssignable<AnyKey, string>>(true);
  expect(true).toBe<IfAssignable<AnyKey, AnyId>>(true);
  expect(true).toBe<IfAssignable<AnyKey, AnyUuid>>(true);
  expect(true).toBe<IfAssignable<AnyKey, AnyCode>>(true);

  expect(false).toBe<IfAssignable<number, AnyKey, never, false>>(false);
  expect(false).toBe<IfAssignable<string, AnyKey, never, false>>(false);
  expect(false).toBe<IfAssignable<AnyId, AnyKey, never, false>>(false);
  expect(false).toBe<IfAssignable<AnyUuid, AnyKey, never, false>>(false);
  expect(false).toBe<IfAssignable<AnyCode, AnyKey, never, false>>(false);
});
