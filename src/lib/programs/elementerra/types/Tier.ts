import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface Tier0JSON {
  kind: "Tier0"
}

export class Tier0 {
  static readonly discriminator = 0
  static readonly kind = "Tier0"
  readonly discriminator = 0
  readonly kind = "Tier0"

  toJSON(): Tier0JSON {
    return {
      kind: "Tier0",
    }
  }

  toEncodable() {
    return {
      Tier0: {},
    }
  }
}

export interface Tier1JSON {
  kind: "Tier1"
}

export class Tier1 {
  static readonly discriminator = 1
  static readonly kind = "Tier1"
  readonly discriminator = 1
  readonly kind = "Tier1"

  toJSON(): Tier1JSON {
    return {
      kind: "Tier1",
    }
  }

  toEncodable() {
    return {
      Tier1: {},
    }
  }
}

export interface Tier2JSON {
  kind: "Tier2"
}

export class Tier2 {
  static readonly discriminator = 2
  static readonly kind = "Tier2"
  readonly discriminator = 2
  readonly kind = "Tier2"

  toJSON(): Tier2JSON {
    return {
      kind: "Tier2",
    }
  }

  toEncodable() {
    return {
      Tier2: {},
    }
  }
}

export interface Tier3JSON {
  kind: "Tier3"
}

export class Tier3 {
  static readonly discriminator = 3
  static readonly kind = "Tier3"
  readonly discriminator = 3
  readonly kind = "Tier3"

  toJSON(): Tier3JSON {
    return {
      kind: "Tier3",
    }
  }

  toEncodable() {
    return {
      Tier3: {},
    }
  }
}

export interface Tier4JSON {
  kind: "Tier4"
}

export class Tier4 {
  static readonly discriminator = 4
  static readonly kind = "Tier4"
  readonly discriminator = 4
  readonly kind = "Tier4"

  toJSON(): Tier4JSON {
    return {
      kind: "Tier4",
    }
  }

  toEncodable() {
    return {
      Tier4: {},
    }
  }
}

export interface Tier5JSON {
  kind: "Tier5"
}

export class Tier5 {
  static readonly discriminator = 5
  static readonly kind = "Tier5"
  readonly discriminator = 5
  readonly kind = "Tier5"

  toJSON(): Tier5JSON {
    return {
      kind: "Tier5",
    }
  }

  toEncodable() {
    return {
      Tier5: {},
    }
  }
}

export interface Tier6JSON {
  kind: "Tier6"
}

export class Tier6 {
  static readonly discriminator = 6
  static readonly kind = "Tier6"
  readonly discriminator = 6
  readonly kind = "Tier6"

  toJSON(): Tier6JSON {
    return {
      kind: "Tier6",
    }
  }

  toEncodable() {
    return {
      Tier6: {},
    }
  }
}

export interface Tier7JSON {
  kind: "Tier7"
}

export class Tier7 {
  static readonly discriminator = 7
  static readonly kind = "Tier7"
  readonly discriminator = 7
  readonly kind = "Tier7"

  toJSON(): Tier7JSON {
    return {
      kind: "Tier7",
    }
  }

  toEncodable() {
    return {
      Tier7: {},
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDecoded(obj: any): types.TierKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("Tier0" in obj) {
    return new Tier0()
  }
  if ("Tier1" in obj) {
    return new Tier1()
  }
  if ("Tier2" in obj) {
    return new Tier2()
  }
  if ("Tier3" in obj) {
    return new Tier3()
  }
  if ("Tier4" in obj) {
    return new Tier4()
  }
  if ("Tier5" in obj) {
    return new Tier5()
  }
  if ("Tier6" in obj) {
    return new Tier6()
  }
  if ("Tier7" in obj) {
    return new Tier7()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(obj: types.TierJSON): types.TierKind {
  switch (obj.kind) {
    case "Tier0": {
      return new Tier0()
    }
    case "Tier1": {
      return new Tier1()
    }
    case "Tier2": {
      return new Tier2()
    }
    case "Tier3": {
      return new Tier3()
    }
    case "Tier4": {
      return new Tier4()
    }
    case "Tier5": {
      return new Tier5()
    }
    case "Tier6": {
      return new Tier6()
    }
    case "Tier7": {
      return new Tier7()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([], "Tier0"),
    borsh.struct([], "Tier1"),
    borsh.struct([], "Tier2"),
    borsh.struct([], "Tier3"),
    borsh.struct([], "Tier4"),
    borsh.struct([], "Tier5"),
    borsh.struct([], "Tier6"),
    borsh.struct([], "Tier7"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
