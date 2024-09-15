import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface LevelUpRequirementsFields {
  cnftToBurn: types.CnftToBurnKind
}

export interface LevelUpRequirementsJSON {
  cnftToBurn: types.CnftToBurnJSON
}

export class LevelUpRequirements {
  readonly cnftToBurn: types.CnftToBurnKind

  constructor(fields: LevelUpRequirementsFields) {
    this.cnftToBurn = fields.cnftToBurn
  }

  static layout(property?: string) {
    return borsh.struct([types.CnftToBurn.layout("cnftToBurn")], property)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new LevelUpRequirements({
      cnftToBurn: types.CnftToBurn.fromDecoded(obj.cnftToBurn),
    })
  }

  static toEncodable(fields: LevelUpRequirementsFields) {
    return {
      cnftToBurn: fields.cnftToBurn.toEncodable(),
    }
  }

  toJSON(): LevelUpRequirementsJSON {
    return {
      cnftToBurn: this.cnftToBurn.toJSON(),
    }
  }

  static fromJSON(obj: LevelUpRequirementsJSON): LevelUpRequirements {
    return new LevelUpRequirements({
      cnftToBurn: types.CnftToBurn.fromJSON(obj.cnftToBurn),
    })
  }

  toEncodable() {
    return LevelUpRequirements.toEncodable(this)
  }
}
