import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export type ElementerraPnftFields = {
  collection: PublicKey
  criteria: types.ElementerraPNFTCriteriaKind
}
export type ElementerraPnftValue = {
  collection: PublicKey
  criteria: types.ElementerraPNFTCriteriaKind
}

export interface ElementerraPnftJSON {
  kind: "ElementerraPnft"
  value: {
    collection: string
    criteria: types.ElementerraPNFTCriteriaJSON
  }
}

export class ElementerraPnft {
  static readonly discriminator = 0
  static readonly kind = "ElementerraPnft"
  readonly discriminator = 0
  readonly kind = "ElementerraPnft"
  readonly value: ElementerraPnftValue

  constructor(value: ElementerraPnftFields) {
    this.value = {
      collection: value.collection,
      criteria: value.criteria,
    }
  }

  toJSON(): ElementerraPnftJSON {
    return {
      kind: "ElementerraPnft",
      value: {
        collection: this.value.collection.toString(),
        criteria: this.value.criteria.toJSON(),
      },
    }
  }

  toEncodable() {
    return {
      ElementerraPnft: {
        collection: this.value.collection,
        criteria: this.value.criteria.toEncodable(),
      },
    }
  }
}

export type TokenFields = {
  mint: PublicKey
  amount: BN
}
export type TokenValue = {
  mint: PublicKey
  amount: BN
}

export interface TokenJSON {
  kind: "Token"
  value: {
    mint: string
    amount: string
  }
}

export class Token {
  static readonly discriminator = 1
  static readonly kind = "Token"
  readonly discriminator = 1
  readonly kind = "Token"
  readonly value: TokenValue

  constructor(value: TokenFields) {
    this.value = {
      mint: value.mint,
      amount: value.amount,
    }
  }

  toJSON(): TokenJSON {
    return {
      kind: "Token",
      value: {
        mint: this.value.mint.toString(),
        amount: this.value.amount.toString(),
      },
    }
  }

  toEncodable() {
    return {
      Token: {
        mint: this.value.mint,
        amount: this.value.amount,
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
export function fromDecoded(obj: any): types.MissionRequirementKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("ElementerraPnft" in obj) {
    const val = obj["ElementerraPnft"]
    return new ElementerraPnft({
      collection: val["collection"],
      criteria: types.ElementerraPNFTCriteria.fromDecoded(val["criteria"]),
    })
  }
  if ("Token" in obj) {
    const val = obj["Token"]
    return new Token({
      mint: val["mint"],
      amount: val["amount"],
    })
  }
  if ("None" in obj) {
    return new None()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(
  obj: types.MissionRequirementJSON
): types.MissionRequirementKind {
  switch (obj.kind) {
    case "ElementerraPnft": {
      return new ElementerraPnft({
        collection: new PublicKey(obj.value.collection),
        criteria: types.ElementerraPNFTCriteria.fromJSON(obj.value.criteria),
      })
    }
    case "Token": {
      return new Token({
        mint: new PublicKey(obj.value.mint),
        amount: new BN(obj.value.amount),
      })
    }
    case "None": {
      return new None()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct(
      [
        borsh.publicKey("collection"),
        types.ElementerraPNFTCriteria.layout("criteria"),
      ],
      "ElementerraPnft"
    ),
    borsh.struct([borsh.publicKey("mint"), borsh.u64("amount")], "Token"),
    borsh.struct([], "None"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
