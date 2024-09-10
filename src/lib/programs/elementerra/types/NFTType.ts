import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface NormalJSON {
  kind: "Normal"
}

export class Normal {
  static readonly discriminator = 0
  static readonly kind = "Normal"
  readonly discriminator = 0
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

export interface PNFTJSON {
  kind: "PNFT"
}

export class PNFT {
  static readonly discriminator = 1
  static readonly kind = "PNFT"
  readonly discriminator = 1
  readonly kind = "PNFT"

  toJSON(): PNFTJSON {
    return {
      kind: "PNFT",
    }
  }

  toEncodable() {
    return {
      PNFT: {},
    }
  }
}

export interface CNFTJSON {
  kind: "CNFT"
}

export class CNFT {
  static readonly discriminator = 2
  static readonly kind = "CNFT"
  readonly discriminator = 2
  readonly kind = "CNFT"

  toJSON(): CNFTJSON {
    return {
      kind: "CNFT",
    }
  }

  toEncodable() {
    return {
      CNFT: {},
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDecoded(obj: any): types.NFTTypeKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("Normal" in obj) {
    return new Normal()
  }
  if ("PNFT" in obj) {
    return new PNFT()
  }
  if ("CNFT" in obj) {
    return new CNFT()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(obj: types.NFTTypeJSON): types.NFTTypeKind {
  switch (obj.kind) {
    case "Normal": {
      return new Normal()
    }
    case "PNFT": {
      return new PNFT()
    }
    case "CNFT": {
      return new CNFT()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([], "Normal"),
    borsh.struct([], "PNFT"),
    borsh.struct([], "CNFT"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
