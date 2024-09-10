import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface NotClaimedJSON {
  kind: "NotClaimed"
}

export class NotClaimed {
  static readonly discriminator = 0
  static readonly kind = "NotClaimed"
  readonly discriminator = 0
  readonly kind = "NotClaimed"

  toJSON(): NotClaimedJSON {
    return {
      kind: "NotClaimed",
    }
  }

  toEncodable() {
    return {
      NotClaimed: {},
    }
  }
}

export interface InventorJSON {
  kind: "Inventor"
}

export class Inventor {
  static readonly discriminator = 1
  static readonly kind = "Inventor"
  readonly discriminator = 1
  readonly kind = "Inventor"

  toJSON(): InventorJSON {
    return {
      kind: "Inventor",
    }
  }

  toEncodable() {
    return {
      Inventor: {},
    }
  }
}

export interface RewardJSON {
  kind: "Reward"
}

export class Reward {
  static readonly discriminator = 2
  static readonly kind = "Reward"
  readonly discriminator = 2
  readonly kind = "Reward"

  toJSON(): RewardJSON {
    return {
      kind: "Reward",
    }
  }

  toEncodable() {
    return {
      Reward: {},
    }
  }
}

export interface NormalJSON {
  kind: "Normal"
}

export class Normal {
  static readonly discriminator = 3
  static readonly kind = "Normal"
  readonly discriminator = 3
  readonly kind = "Normal"

  toJSON(): NormalJSON {
    return {
      kind: "Normal",
    }
  }

  toEncodable() {
    return {
      Normal: {},
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDecoded(obj: any): types.PendingGuessStatusKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("NotClaimed" in obj) {
    return new NotClaimed()
  }
  if ("Inventor" in obj) {
    return new Inventor()
  }
  if ("Reward" in obj) {
    return new Reward()
  }
  if ("Normal" in obj) {
    return new Normal()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(
  obj: types.PendingGuessStatusJSON
): types.PendingGuessStatusKind {
  switch (obj.kind) {
    case "NotClaimed": {
      return new NotClaimed()
    }
    case "Inventor": {
      return new Inventor()
    }
    case "Reward": {
      return new Reward()
    }
    case "Normal": {
      return new Normal()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([], "NotClaimed"),
    borsh.struct([], "Inventor"),
    borsh.struct([], "Reward"),
    borsh.struct([], "Normal"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
