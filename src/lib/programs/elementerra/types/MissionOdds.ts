import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface MissionOddsFields {
  lowerBound: number
  upperBound: number
}

export interface MissionOddsJSON {
  lowerBound: number
  upperBound: number
}

export class MissionOdds {
  readonly lowerBound: number
  readonly upperBound: number

  constructor(fields: MissionOddsFields) {
    this.lowerBound = fields.lowerBound
    this.upperBound = fields.upperBound
  }

  static layout(property?: string) {
    return borsh.struct(
      [borsh.u32("lowerBound"), borsh.u32("upperBound")],
      property
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new MissionOdds({
      lowerBound: obj.lowerBound,
      upperBound: obj.upperBound,
    })
  }

  static toEncodable(fields: MissionOddsFields) {
    return {
      lowerBound: fields.lowerBound,
      upperBound: fields.upperBound,
    }
  }

  toJSON(): MissionOddsJSON {
    return {
      lowerBound: this.lowerBound,
      upperBound: this.upperBound,
    }
  }

  static fromJSON(obj: MissionOddsJSON): MissionOdds {
    return new MissionOdds({
      lowerBound: obj.lowerBound,
      upperBound: obj.upperBound,
    })
  }

  toEncodable() {
    return MissionOdds.toEncodable(this)
  }
}
