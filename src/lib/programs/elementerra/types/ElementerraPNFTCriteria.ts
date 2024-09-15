import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export type RabbitFields = {
  level: number
}
export type RabbitValue = {
  level: number
}

export interface RabbitJSON {
  kind: "Rabbit"
  value: {
    level: number
  }
}

export class Rabbit {
  static readonly discriminator = 0
  static readonly kind = "Rabbit"
  readonly discriminator = 0
  readonly kind = "Rabbit"
  readonly value: RabbitValue

  constructor(value: RabbitFields) {
    this.value = {
      level: value.level,
    }
  }

  toJSON(): RabbitJSON {
    return {
      kind: "Rabbit",
      value: {
        level: this.value.level,
      },
    }
  }

  toEncodable() {
    return {
      Rabbit: {
        level: this.value.level,
      },
    }
  }
}

export type InventorFields = {
  level: number
}
export type InventorValue = {
  level: number
}

export interface InventorJSON {
  kind: "Inventor"
  value: {
    level: number
  }
}

export class Inventor {
  static readonly discriminator = 1
  static readonly kind = "Inventor"
  readonly discriminator = 1
  readonly kind = "Inventor"
  readonly value: InventorValue

  constructor(value: InventorFields) {
    this.value = {
      level: value.level,
    }
  }

  toJSON(): InventorJSON {
    return {
      kind: "Inventor",
      value: {
        level: this.value.level,
      },
    }
  }

  toEncodable() {
    return {
      Inventor: {
        level: this.value.level,
      },
    }
  }
}

export type FamiliarFields = {
  level: number
  name: types.FamiliarTypeKind
}
export type FamiliarValue = {
  level: number
  name: types.FamiliarTypeKind
}

export interface FamiliarJSON {
  kind: "Familiar"
  value: {
    level: number
    name: types.FamiliarTypeJSON
  }
}

export class Familiar {
  static readonly discriminator = 2
  static readonly kind = "Familiar"
  readonly discriminator = 2
  readonly kind = "Familiar"
  readonly value: FamiliarValue

  constructor(value: FamiliarFields) {
    this.value = {
      level: value.level,
      name: value.name,
    }
  }

  toJSON(): FamiliarJSON {
    return {
      kind: "Familiar",
      value: {
        level: this.value.level,
        name: this.value.name.toJSON(),
      },
    }
  }

  toEncodable() {
    return {
      Familiar: {
        level: this.value.level,
        name: this.value.name.toEncodable(),
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
export function fromDecoded(obj: any): types.ElementerraPNFTCriteriaKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("Rabbit" in obj) {
    const val = obj["Rabbit"]
    return new Rabbit({
      level: val["level"],
    })
  }
  if ("Inventor" in obj) {
    const val = obj["Inventor"]
    return new Inventor({
      level: val["level"],
    })
  }
  if ("Familiar" in obj) {
    const val = obj["Familiar"]
    return new Familiar({
      level: val["level"],
      name: types.FamiliarType.fromDecoded(val["name"]),
    })
  }
  if ("None" in obj) {
    return new None()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(
  obj: types.ElementerraPNFTCriteriaJSON
): types.ElementerraPNFTCriteriaKind {
  switch (obj.kind) {
    case "Rabbit": {
      return new Rabbit({
        level: obj.value.level,
      })
    }
    case "Inventor": {
      return new Inventor({
        level: obj.value.level,
      })
    }
    case "Familiar": {
      return new Familiar({
        level: obj.value.level,
        name: types.FamiliarType.fromJSON(obj.value.name),
      })
    }
    case "None": {
      return new None()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([borsh.u16("level")], "Rabbit"),
    borsh.struct([borsh.u16("level")], "Inventor"),
    borsh.struct(
      [borsh.u16("level"), types.FamiliarType.layout("name")],
      "Familiar"
    ),
    borsh.struct([], "None"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
