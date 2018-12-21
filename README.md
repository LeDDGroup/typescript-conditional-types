# typescript-conditional-types

[![npm version](https://img.shields.io/npm/v/typescript-conditional-types.svg)](https://www.npmjs.com/package/typescript-conditional-types)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Helpers for typescript generic types

**Table of Contents**

- [Motivation](#motivation)
- [Install](#install)
- [Type Helper List](#type-helper-list)
- [Usage Example](#usage-example)

## Motivation

Creating complex types with conditional types ( `T extends U ? X : Y` ) could be a little verbose. This package aims to simplify code and make it more readable.


## Install

```bash
$ npm install typescript-conditional-types
```

You'll probably want to save it in the _devDependencies_

## Type Helper List

- _If<Condition, Then, Else>_: If _Condition_ is `true` resulting type is _Then_ else _Else_
- _And<A, B>_: `true` if _A_ and _B_ are both `true` else `false`
- _Or<A, B>_: `true` if _A_ or _B_ are `true` else `false`
- _Not<A>_: Negate _A_
- _Extends<A, B>_: `true` if _A_ extends _B_ like in `A extends B ? true : false`
- _Extends<A, B, Then, Else_: Equivalent to `If<Extends<A, B>, Then, Else>`

## Usage Example

```ts
import { If } from "typescript-conditional-types";

type BooleanToString<T extends boolean> = If<T, "true", "false">

BooleanToString<true> // "true"
BooleanToString<false> // "false"
```
