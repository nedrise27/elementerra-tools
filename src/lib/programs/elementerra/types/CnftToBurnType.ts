import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export type ElementFields = [types.ElementNameKind]
export type ElementValue = [types.ElementNameKind]

export interface ElementJSON {
  kind: "Element"
  value: [types.ElementNameJSON]
}

export class Element {
  static readonly discriminator = 0
  static readonly kind = "Element"
  readonly discriminator = 0
  readonly kind = "Element"
  readonly value: ElementValue

  constructor(value: ElementFields) {
    this.value = [value[0]]
  }

  toJSON(): ElementJSON {
    return {
      kind: "Element",
      value: [this.value[0].toJSON()],
    }
  }

  toEncodable() {
    return {
      Element: {
        _0: this.value[0].toEncodable(),
      },
    }
  }
}

export type CrystalFields = [types.CrystalTierKind]
export type CrystalValue = [types.CrystalTierKind]

export interface CrystalJSON {
  kind: "Crystal"
  value: [types.CrystalTierJSON]
}

export class Crystal {
  static readonly discriminator = 1
  static readonly kind = "Crystal"
  readonly discriminator = 1
  readonly kind = "Crystal"
  readonly value: CrystalValue

  constructor(value: CrystalFields) {
    this.value = [value[0]]
  }

  toJSON(): CrystalJSON {
    return {
      kind: "Crystal",
      value: [this.value[0].toJSON()],
    }
  }

  toEncodable() {
    return {
      Crystal: {
        _0: this.value[0].toEncodable(),
      },
    }
  }
}

export interface NoneJSON {
  kind: "None"
}

export class None {
  static readonly discriminator = 2
  static readonly kind = "None"
  readonly discriminator = 2
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
export function fromDecoded(obj: any): types.CnftToBurnTypeKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("Element" in obj) {
    const val = obj["Element"]
    return new Element([types.ElementName.fromDecoded(val["_0"])])
  }
  if ("Crystal" in obj) {
    const val = obj["Crystal"]
    return new Crystal([types.CrystalTier.fromDecoded(val["_0"])])
  }
  if ("None" in obj) {
    return new None()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(
  obj: types.CnftToBurnTypeJSON
): types.CnftToBurnTypeKind {
  switch (obj.kind) {
    case "Element": {
      return new Element([types.ElementName.fromJSON(obj.value[0])])
    }
    case "Crystal": {
      return new Crystal([types.CrystalTier.fromJSON(obj.value[0])])
    }
    case "None": {
      return new None()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([types.ElementName.layout("_0")], "Element"),
    borsh.struct([types.CrystalTier.layout("_0")], "Crystal"),
    borsh.struct([], "None"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
