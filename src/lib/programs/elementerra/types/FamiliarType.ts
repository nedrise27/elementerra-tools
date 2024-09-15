import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface CatJSON {
  kind: "Cat"
}

export class Cat {
  static readonly discriminator = 0
  static readonly kind = "Cat"
  readonly discriminator = 0
  readonly kind = "Cat"

  toJSON(): CatJSON {
    return {
      kind: "Cat",
    }
  }

  toEncodable() {
    return {
      Cat: {},
    }
  }
}

export interface RaccoonJSON {
  kind: "Raccoon"
}

export class Raccoon {
  static readonly discriminator = 1
  static readonly kind = "Raccoon"
  readonly discriminator = 1
  readonly kind = "Raccoon"

  toJSON(): RaccoonJSON {
    return {
      kind: "Raccoon",
    }
  }

  toEncodable() {
    return {
      Raccoon: {},
    }
  }
}

export interface RhinoJSON {
  kind: "Rhino"
}

export class Rhino {
  static readonly discriminator = 2
  static readonly kind = "Rhino"
  readonly discriminator = 2
  readonly kind = "Rhino"

  toJSON(): RhinoJSON {
    return {
      kind: "Rhino",
    }
  }

  toEncodable() {
    return {
      Rhino: {},
    }
  }
}

export interface DogJSON {
  kind: "Dog"
}

export class Dog {
  static readonly discriminator = 3
  static readonly kind = "Dog"
  readonly discriminator = 3
  readonly kind = "Dog"

  toJSON(): DogJSON {
    return {
      kind: "Dog",
    }
  }

  toEncodable() {
    return {
      Dog: {},
    }
  }
}

export interface FoxJSON {
  kind: "Fox"
}

export class Fox {
  static readonly discriminator = 4
  static readonly kind = "Fox"
  readonly discriminator = 4
  readonly kind = "Fox"

  toJSON(): FoxJSON {
    return {
      kind: "Fox",
    }
  }

  toEncodable() {
    return {
      Fox: {},
    }
  }
}

export interface DragonJSON {
  kind: "Dragon"
}

export class Dragon {
  static readonly discriminator = 5
  static readonly kind = "Dragon"
  readonly discriminator = 5
  readonly kind = "Dragon"

  toJSON(): DragonJSON {
    return {
      kind: "Dragon",
    }
  }

  toEncodable() {
    return {
      Dragon: {},
    }
  }
}

export interface MouseJSON {
  kind: "Mouse"
}

export class Mouse {
  static readonly discriminator = 6
  static readonly kind = "Mouse"
  readonly discriminator = 6
  readonly kind = "Mouse"

  toJSON(): MouseJSON {
    return {
      kind: "Mouse",
    }
  }

  toEncodable() {
    return {
      Mouse: {},
    }
  }
}

export interface DeerJSON {
  kind: "Deer"
}

export class Deer {
  static readonly discriminator = 7
  static readonly kind = "Deer"
  readonly discriminator = 7
  readonly kind = "Deer"

  toJSON(): DeerJSON {
    return {
      kind: "Deer",
    }
  }

  toEncodable() {
    return {
      Deer: {},
    }
  }
}

export interface BearJSON {
  kind: "Bear"
}

export class Bear {
  static readonly discriminator = 8
  static readonly kind = "Bear"
  readonly discriminator = 8
  readonly kind = "Bear"

  toJSON(): BearJSON {
    return {
      kind: "Bear",
    }
  }

  toEncodable() {
    return {
      Bear: {},
    }
  }
}

export interface GriffinJSON {
  kind: "Griffin"
}

export class Griffin {
  static readonly discriminator = 9
  static readonly kind = "Griffin"
  readonly discriminator = 9
  readonly kind = "Griffin"

  toJSON(): GriffinJSON {
    return {
      kind: "Griffin",
    }
  }

  toEncodable() {
    return {
      Griffin: {},
    }
  }
}

export interface SheepJSON {
  kind: "Sheep"
}

export class Sheep {
  static readonly discriminator = 10
  static readonly kind = "Sheep"
  readonly discriminator = 10
  readonly kind = "Sheep"

  toJSON(): SheepJSON {
    return {
      kind: "Sheep",
    }
  }

  toEncodable() {
    return {
      Sheep: {},
    }
  }
}

export interface MonkeyJSON {
  kind: "Monkey"
}

export class Monkey {
  static readonly discriminator = 11
  static readonly kind = "Monkey"
  readonly discriminator = 11
  readonly kind = "Monkey"

  toJSON(): MonkeyJSON {
    return {
      kind: "Monkey",
    }
  }

  toEncodable() {
    return {
      Monkey: {},
    }
  }
}

export interface NoneJSON {
  kind: "None"
}

export class None {
  static readonly discriminator = 12
  static readonly kind = "None"
  readonly discriminator = 12
  readonly kind = "None"

  toJSON(): NoneJSON {
    return {
      kind: "None",
    }
  }

  toEncodable() {
    return {
      None: {},
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDecoded(obj: any): types.FamiliarTypeKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("Cat" in obj) {
    return new Cat()
  }
  if ("Raccoon" in obj) {
    return new Raccoon()
  }
  if ("Rhino" in obj) {
    return new Rhino()
  }
  if ("Dog" in obj) {
    return new Dog()
  }
  if ("Fox" in obj) {
    return new Fox()
  }
  if ("Dragon" in obj) {
    return new Dragon()
  }
  if ("Mouse" in obj) {
    return new Mouse()
  }
  if ("Deer" in obj) {
    return new Deer()
  }
  if ("Bear" in obj) {
    return new Bear()
  }
  if ("Griffin" in obj) {
    return new Griffin()
  }
  if ("Sheep" in obj) {
    return new Sheep()
  }
  if ("Monkey" in obj) {
    return new Monkey()
  }
  if ("None" in obj) {
    return new None()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(obj: types.FamiliarTypeJSON): types.FamiliarTypeKind {
  switch (obj.kind) {
    case "Cat": {
      return new Cat()
    }
    case "Raccoon": {
      return new Raccoon()
    }
    case "Rhino": {
      return new Rhino()
    }
    case "Dog": {
      return new Dog()
    }
    case "Fox": {
      return new Fox()
    }
    case "Dragon": {
      return new Dragon()
    }
    case "Mouse": {
      return new Mouse()
    }
    case "Deer": {
      return new Deer()
    }
    case "Bear": {
      return new Bear()
    }
    case "Griffin": {
      return new Griffin()
    }
    case "Sheep": {
      return new Sheep()
    }
    case "Monkey": {
      return new Monkey()
    }
    case "None": {
      return new None()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([], "Cat"),
    borsh.struct([], "Raccoon"),
    borsh.struct([], "Rhino"),
    borsh.struct([], "Dog"),
    borsh.struct([], "Fox"),
    borsh.struct([], "Dragon"),
    borsh.struct([], "Mouse"),
    borsh.struct([], "Deer"),
    borsh.struct([], "Bear"),
    borsh.struct([], "Griffin"),
    borsh.struct([], "Sheep"),
    borsh.struct([], "Monkey"),
    borsh.struct([], "None"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
