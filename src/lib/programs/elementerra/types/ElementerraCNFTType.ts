import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export type CrystalFields = {
  tier: types.CrystalTierKind
}
export type CrystalValue = {
  tier: types.CrystalTierKind
}

export interface CrystalJSON {
  kind: "Crystal"
  value: {
    tier: types.CrystalTierJSON
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
      tier: value.tier,
    }
  }

  toJSON(): CrystalJSON {
    return {
      kind: "Crystal",
      value: {
        tier: this.value.tier.toJSON(),
      },
    }
  }

  toEncodable() {
    return {
      Crystal: {
        tier: this.value.tier.toEncodable(),
      },
    }
  }
}

export type ElementFields = {
  name: types.ElementNameKind
}
export type ElementValue = {
  name: types.ElementNameKind
}

export interface ElementJSON {
  kind: "Element"
  value: {
    name: types.ElementNameJSON
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
      name: value.name,
    }
  }

  toJSON(): ElementJSON {
    return {
      kind: "Element",
      value: {
        name: this.value.name.toJSON(),
      },
    }
  }

  toEncodable() {
    return {
      Element: {
        name: this.value.name.toEncodable(),
      },
    }
  }
}

export type PackFields = {
  tier: types.TierKind
}
export type PackValue = {
  tier: types.TierKind
}

export interface PackJSON {
  kind: "Pack"
  value: {
    tier: types.TierJSON
  }
}

export class Pack {
  static readonly discriminator = 2
  static readonly kind = "Pack"
  readonly discriminator = 2
  readonly kind = "Pack"
  readonly value: PackValue

  constructor(value: PackFields) {
    this.value = {
      tier: value.tier,
    }
  }

  toJSON(): PackJSON {
    return {
      kind: "Pack",
      value: {
        tier: this.value.tier.toJSON(),
      },
    }
  }

  toEncodable() {
    return {
      Pack: {
        tier: this.value.tier.toEncodable(),
      },
    }
  }
}

export interface NoneJSON {
  kind: "None"
}

export class None {
  static readonly discriminator = 3
  static readonly kind = "None"
  readonly discriminator = 3
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
export function fromDecoded(obj: any): types.ElementerraCNFTTypeKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("Crystal" in obj) {
    const val = obj["Crystal"]
    return new Crystal({
      tier: types.CrystalTier.fromDecoded(val["tier"]),
    })
  }
  if ("Element" in obj) {
    const val = obj["Element"]
    return new Element({
      name: types.ElementName.fromDecoded(val["name"]),
    })
  }
  if ("Pack" in obj) {
    const val = obj["Pack"]
    return new Pack({
      tier: types.Tier.fromDecoded(val["tier"]),
    })
  }
  if ("None" in obj) {
    return new None()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(
  obj: types.ElementerraCNFTTypeJSON
): types.ElementerraCNFTTypeKind {
  switch (obj.kind) {
    case "Crystal": {
      return new Crystal({
        tier: types.CrystalTier.fromJSON(obj.value.tier),
      })
    }
    case "Element": {
      return new Element({
        name: types.ElementName.fromJSON(obj.value.name),
      })
    }
    case "Pack": {
      return new Pack({
        tier: types.Tier.fromJSON(obj.value.tier),
      })
    }
    case "None": {
      return new None()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([types.CrystalTier.layout("tier")], "Crystal"),
    borsh.struct([types.ElementName.layout("name")], "Element"),
    borsh.struct([types.Tier.layout("tier")], "Pack"),
    borsh.struct([], "None"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
