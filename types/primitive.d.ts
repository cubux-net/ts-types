// nominal types
// https://github.com/microsoft/TypeScript/issues/202
// https://github.com/microsoft/TypeScript/issues/202#issuecomment-246507970
// https://github.com/microsoft/TypeScript/issues/202#issuecomment-961853101

declare const SUBJECT: unique symbol;
declare const FORMAT: unique symbol;

/**
 * Generic nominal type
 *
 * ```ts
 * type UserId = NominalType<number, 'User'>;
 * ```
 */
export type NominalType<Base, Subject extends string> = Base & {
  readonly [SUBJECT]: Subject;
};

/**
 * Generic nominal type with distinct format
 *
 * ```ts
 * type UserEmail = NominalTypeFormat<string, 'User', 'email'>;
 * ```
 */
export type NominalTypeFormat<
  Base,
  Subject extends string,
  Format extends string | symbol
> = Base & {
  readonly [SUBJECT]: Subject;
  readonly [FORMAT]: Format;
};

/**
 * Numeric identifier generic
 *
 * ```ts
 * type UserId = IdOf<'User'>;
 * ```
 */
export type IdOf<T extends string> = NominalType<number, T>;

declare const UUID: unique symbol;
/**
 * UUID generic
 *
 * ```ts
 * type UserUuid = UuidOf<'User'>;
 * ```
 */
export type UuidOf<T extends string> = NominalTypeFormat<
  string,
  T,
  typeof UUID
>;

declare const CODE: unique symbol;
/**
 * String code identifier generic
 *
 * ```ts
 * type CountryCode = CodeOf<'Country'>;
 * ```
 */
export type CodeOf<T extends string> = NominalTypeFormat<
  string,
  T,
  typeof CODE
>;

/**
 * Base "catch all" numeric identifier for `IdOf`
 *
 * ```ts
 * type UserId = IdOf<'User'>;
 * interface User {
 *   readonly id: UserId;
 * }
 *
 * function f(id: AnyId) {}
 *
 * function fUser(user: User) {
 *   f(user.id);
 * }
 * ```
 */
export type AnyId = IdOf<string>;

/**
 * Base "catch all" UUID for `UuidOf`
 *
 * ```ts
 * type UserUuid = UuidOf<'User'>;
 * interface User {
 *   readonly uuid: UserUuid;
 * }
 *
 * function f(uuid: AnyUuid) {}
 *
 * function fUser(user: User) {
 *   f(user.uuid);
 * }
 * ```
 */
export type AnyUuid = UuidOf<string>;

/**
 * Base "catch all" code identifier for `CodeOf`
 *
 * ```ts
 * type CountryCode = CodeOf<'Country'>;
 * interface Country {
 *   readonly code: CountryCode;
 * }
 *
 * function f(code: AnyCode) {}
 *
 * function fCountry(country: Country) {
 *   f(country.code);
 * }
 * ```
 */
export type AnyCode = CodeOf<string>;

/**
 * Base "catch all" key-like identifier to be compatible with React key type,
 * `AnyId`, `AnyUuid`, `AnyCode` and `NominalType`.
 */
export type AnyKey = number | string | NominalType<number | string, string>;
