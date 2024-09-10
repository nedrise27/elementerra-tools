import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface TicketJSON {
  kind: "Ticket"
}

export class Ticket {
  static readonly discriminator = 0
  static readonly kind = "Ticket"
  readonly discriminator = 0
  readonly kind = "Ticket"

  toJSON(): TicketJSON {
    return {
      kind: "Ticket",
    }
  }

  toEncodable() {
    return {
      Ticket: {},
    }
  }
}

export type CNFTFields = {
  cnftType: types.ElementerraCNFTTypeKind
}
export type CNFTValue = {
  cnftType: types.ElementerraCNFTTypeKind
}

export interface CNFTJSON {
  kind: "CNFT"
  value: {
    cnftType: types.ElementerraCNFTTypeJSON
  }
}

export class CNFT {
  static readonly discriminator = 1
  static readonly kind = "CNFT"
  readonly discriminator = 1
  readonly kind = "CNFT"
  readonly value: CNFTValue

  constructor(value: CNFTFields) {
    this.value = {
      cnftType: value.cnftType,
    }
  }

  toJSON(): CNFTJSON {
    return {
      kind: "CNFT",
      value: {
        cnftType: this.value.cnftType.toJSON(),
      },
    }
  }

  toEncodable() {
    return {
      CNFT: {
        cnft_type: this.value.cnftType.toEncodable(),
      },
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDecoded(obj: any): types.NFTRewardTypeKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("Ticket" in obj) {
    return new Ticket()
  }
  if ("CNFT" in obj) {
    const val = obj["CNFT"]
    return new CNFT({
      cnftType: types.ElementerraCNFTType.fromDecoded(val["cnft_type"]),
    })
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(
  obj: types.NFTRewardTypeJSON
): types.NFTRewardTypeKind {
  switch (obj.kind) {
    case "Ticket": {
      return new Ticket()
    }
    case "CNFT": {
      return new CNFT({
        cnftType: types.ElementerraCNFTType.fromJSON(obj.value.cnftType),
      })
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([], "Ticket"),
    borsh.struct([types.ElementerraCNFTType.layout("cnft_type")], "CNFT"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
