import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export type CrystalFields = {
  crystal: types.CrystalTierKind
}
export type CrystalValue = {
  crystal: types.CrystalTierKind
}

export interface CrystalJSON {
  kind: "Crystal"
  value: {
    crystal: types.CrystalTierJSON
  }
}

export class Crystal {
  static readonly discriminator = 0
  static readonly kind = "Crystal"
  readonly discriminator = 0
  readonly kind = "Crystal"
  readonly value: CrystalValue

  constructor(value: CrystalFields) {
    this.value = {
      crystal: value.crystal,
    }
  }

  toJSON(): CrystalJSON {
    return {
      kind: "Crystal",
      value: {
        crystal: this.value.crystal.toJSON(),
      },
    }
  }

  toEncodable() {
    return {
      Crystal: {
        crystal: this.value.crystal.toEncodable(),
      },
    }
  }
}

export type ElementFields = {
  element: types.ElementNameKind
}
export type ElementValue = {
  element: types.ElementNameKind
}

export interface ElementJSON {
  kind: "Element"
  value: {
    element: types.ElementNameJSON
  }
}

export class Element {
  static readonly discriminator = 1
  static readonly kind = "Element"
  readonly discriminator = 1
  readonly kind = "Element"
  readonly value: ElementValue

  constructor(value: ElementFields) {
    this.value = {
      element: value.element,
    }
  }

  toJSON(): ElementJSON {
    return {
      kind: "Element",
      value: {
        element: this.value.element.toJSON(),
      },
    }
  }

  toEncodable() {
    return {
      Element: {
        element: this.value.element.toEncodable(),
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
export function fromDecoded(obj: any): types.CnftToBurnKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("Crystal" in obj) {
    const val = obj["Crystal"]
    return new Crystal({
      crystal: types.CrystalTier.fromDecoded(val["crystal"]),
    })
  }
  if ("Element" in obj) {
    const val = obj["Element"]
    return new Element({
      element: types.ElementName.fromDecoded(val["element"]),
    })
  }
  if ("None" in obj) {
    return new None()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(obj: types.CnftToBurnJSON): types.CnftToBurnKind {
  switch (obj.kind) {
    case "Crystal": {
      return new Crystal({
        crystal: types.CrystalTier.fromJSON(obj.value.crystal),
      })
    }
    case "Element": {
      return new Element({
        element: types.ElementName.fromJSON(obj.value.element),
      })
    }
    case "None": {
      return new None()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([types.CrystalTier.layout("crystal")], "Crystal"),
    borsh.struct([types.ElementName.layout("element")], "Element"),
    borsh.struct([], "None"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
