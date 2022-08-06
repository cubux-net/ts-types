# `@cubux/types`

[![NPM latest](https://img.shields.io/npm/v/@cubux/types.svg)](https://www.npmjs.com/package/@cubux/types)

Utility types.

## Install

```sh
npm i @cubux/types
```

## API

### `AnyCode`

Base "catch all" code identifier for `CodeOf`.

```ts
type CountryCode = CodeOf<'Country'>;
interface Country {
  readonly code: CountryCode;
}

function f(code: AnyCode) {}

function fCountry(country: Country) {
  f(country.code);
}
```

### `AnyId`

Base "catch all" numeric identifier for `IdOf`.

```ts
type UserId = IdOf<'User'>;
interface User {
  readonly id: UserId;
}

function f(id: AnyId) {}

function fUser(user: User) {
  f(user.id);
}
```

### `AnyKey`

Base "catch all" key-like identifier to be compatible with React key type,
`AnyId`, `AnyUuid`, `AnyCode` and `NominalType`.

### `AnyUuid`

Base "catch all" UUID for `UuidOf`.

```ts
type UserUuid = UuidOf<'User'>;
interface User {
  readonly uuid: UserUuid;
}

function f(uuid: AnyUuid) {}

function fUser(user: User) {
  f(user.uuid);
}
```

### `AssignableKeys<T, V>`

Get keys of `T` which `V` value can be assigned to.

Example:

```ts
interface I {
  N: null;
  i: number;
  si?: number | string;
  b?: boolean;
}

type TN = AssignableKeys<I, null>;
// "N"

type Tn = AssignableKeys<I, number>;
// "i" | "si"

type Ts = AssignableKeys<I, string>;
// "si"

type Tb = AssignableKeys<I, boolean>;
// "b"

type Tu = AssignableKeys<I, undefined>;
// "si" | "b"

type Tsn = AssignableKeys<I, string | number>;
// "si"

type TuN = AssignableKeys<I, undefined | null>;
// never
```

### `CompatibleKeys<T, V>`

Which keys of `T` are symmetrically compatible with type `V`.

```ts
interface I {
  a: string;
  b?: string;
  c: number;
  d?: number | null;
}

type I1 = CompatibleKeys<I, string>;
// 'a'

type I2 = CompatibleKeys<I, string | undefined>;
// 'b'

type I3 = CompatibleKeys<I, undefined>;
// never

type I4 = CompatibleKeys<I, number>;
// 'c'

type I5 = CompatibleKeys<I, null>;
// never
```

### `CodeOf<T extends string>`

String code identifier generic.

```ts
type CountryCode = CodeOf<'Country'>;
```

### `DenyKeys<T, P extends keyof any>`

Template type guard helper to deny given keys `P` in given type `T`.

Example:

```ts
function foo<T extends object & DenyKeys<T, 'x' | 'y'>>(data: T) {
  return null;
}

foo(42);
//  ~~
// TS2345: Argument of type 'number' is not assignable to parameter of
// type 'never'.

foo({ a: 1, b: 2, x: 42 });
//                ~
// TS2322: Type 'number' is not assignable to
// type 'readonly [never, "Property is Denied", "x"]'.

foo({ a: 1, b: 2, x: null, y: undefined });
//                ~        ~
// TS2322: Type 'null' is not assignable to
// type 'readonly [never, "Property is Denied", "x"]'.
// TS2322: Type 'undefined' is not assignable to
// type 'readonly [never, "Property is Denied", "y"]'.
```

### `DenyOverlappedKeys<A, B>`

Intersection of two types denying overlapping keys.

```ts
interface A {
  x: number;
}
interface B {
  y: string;
}

type A = DenyOverlappedKeys<A, B>;
// A & B

type B = DenyOverlappedKeys<A, { y: string, x?: number }>;
// never
```

### `ExplicitProps<T, K extends keyof T = keyof T>`

Create new type from `T` with only given keys `K` making all explicit. This
differs from `Required<Pick<T, K>>` so optional keys `x?: V` become
`x: V | undefined` instead of `x: V` as `Required` does.

```ts
interface I {
  x?: number;
  y?: string | undefined;
  z: boolean;
}

type A = ExplicitProps<I>;
// {
//   x: number | undefined;
//   y: string | undefined;
//   z: boolean;
// }

type B = ExplicitProps<I, 'x'>;
// { x: number | undefined; }

type C = ExplicitProps<I, 'y' | 'z'>;
// {
//   y: string | undefined;
//   z: boolean;
// }
```

### `Falsy`

All possible types which equals to `false` in Boolean context.

### `HasRequiredKeys<T>`

Whether the given type `T` has any required keys.

```ts
type A = HasRequiredKeys<{ x?: number }>;
// false

type B = HasRequiredKeys<{ x?: number; y: number | undefined }>;
// true
```

### `IdOf<T extends string>`

Numeric identifier generic.

```ts
type UserId = IdOf<'User'>;
```

### `IfAssignable<Receiver, Value, Then = true, Else = never>`

If a value of type `Value` can be assigned to a receiver of type `Receiver`,
then results to type `Then`, otherwise to type `Else`.

```ts
type A = IfAssignable<number | string, number>;
// true

type B = IfAssignable<number | string, string>;
// true

type C = IfAssignable<number | string, boolean>;
// never

type D = IfAssignable<number, number | string>;
// never
```

### `IfEquals<X, Y, Then = true, Else = never>`

Type equivalence check.

If types `X` and `Y` are equivalent, the results to type `Then`, otherwise
results to type `Else`.

### `NominalType<Base, Subject extends string>`

Generic nominal type.

```ts
type UserId = NominalType<number, 'User'>;
```

### `NominalTypeFormat<Base, Subject extends string, Format extends string | symbol>`

Generic nominal type with distinct format.

```ts
type UserEmail = NominalTypeFormat<string, 'User', 'email'>;
```

### `ObjectEntries<T>`

The type that `Object.entries(o: T)` should to return in some cases.

```ts
interface I {
  a: number;
  b?: string;
}

type E = ObjectEntries<I>;
// readonly (
//   | readonly ["a", number]
//   | readonly ["b", string | undefined]
// )[]
```

### `PartialRest<T, Keep extends keyof T>`

Keep given props as is and make all the rest props optional.

```ts
interface I {
  x: number;
  y: string;
  z?: number;
}

type T = PartialRest<I, 'x'>;
// {
//   x: number;
//   y?: string | undefined;
//   z?: number | undefined;
// }
```

### `PartialSome<T, K extends keyof T>`

Make given props optional and keep all the rest props as is.

```ts
interface I {
  x: number;
  y: string;
  z?: number;
}

type T = PartialSome<I, 'y'>;
// {
//   x: number;
//   y?: string | undefined;
//   z?: number | undefined;
// }
```

### `PickOptional<T>`

Pick only optional props.

```ts
interface I {
  x: number;
  y: string;
  z?: boolean;
  t?: Date | null;
}

type A = PickOptional<I>;
// {
//   z?: boolean | undefined;
//   t?: Date | null | undefined;
// }
```

### `PickRequired<T>`

Pick properties which are required.

```ts
interface I {
  x: number;
  y: number | undefined;
  z?: number;
}

type R = PickRequired<I>;
//  {
//    x: number;
//    y: number | undefined;
//  }
```

### `PickWritable<T>`

Pick writable properties of T.

Returns properties of `T` which are writable, t.i. has no `readonly`
attribute.

```ts
interface A {
  readonly x: number;
  readonly y: number;
  z: number;
  t: number;
}

type T = PickWritable<A>;
// {
//   z: number;
//   t: number;
// }
```

### `RequiredKeys<T, K extends keyof T = keyof T>`

Pick keys which are required.

```ts
interface I {
  x: number;
  y: number | undefined;
  z?: number;
}

type R = RequiredKeys<I>;
// 'x' | 'y'
```

### `RequireProps<T, K extends keyof T>`

Make the given properties required and keep all the rest as is.

```ts
interface I {
  x?: number;
  y?: string | undefined;
  z: number;
  t: string | undefined;
}

type A = RequireProps<I, 'x'>;
// {
//   x: number | undefined;
//   y?: string | undefined;
//   z: number;
//   t: string | undefined;
// }

type B = RequireProps<I, 'y'>;
// {
//   x?: number;
//   y: string | undefined;
//   z: number;
//   t: string | undefined;
// }

type C = RequireProps<I, 'x' | 'y'>;
// {
//   x: number | undefined;
//   y: string | undefined;
//   z: number;
//   t: string | undefined;
// }
```

### `ToObject<T>`

Try to map given type into single object type. This can help in some cases,
for example with conjunction type `A & B`.

```ts
interface A {
  a: number;
}
interface B {
  b: string;
}

type C = ToObject<A & B>;
// {
//   a: number;
//   b: string;
// }
```

### `UnionToIntersection<U>`

Convert Union to Intersection.

```ts
type C = UnionToIntersection<A | B>;
// A & B
```

### `UuidOf<T extends string>`

UUID generic.

```ts
type UserUuid = UuidOf<'User'>;
```

### `WritableKeys<T>`

Get those keys of `T` which don't have `readonly` attribute.

```ts
interface A {
  readonly x: number;
  readonly y: number;
  z: number;
  t: number;
}

type T = WritableKeys<A>;
// 'z' | 't'
```
