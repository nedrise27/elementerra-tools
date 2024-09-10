import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface RemoveRequirementParamsFields {
  missionRequirementIndex: number
}

export interface RemoveRequirementParamsJSON {
  missionRequirementIndex: number
}

export class RemoveRequirementParams {
  readonly missionRequirementIndex: number

  constructor(fields: RemoveRequirementParamsFields) {
    this.missionRequirementIndex = fields.missionRequirementIndex
  }

  static layout(property?: string) {
    return borsh.struct([borsh.u8("missionRequirementIndex")], property)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new RemoveRequirementParams({
      missionRequirementIndex: obj.missionRequirementIndex,
    })
  }

  static toEncodable(fields: RemoveRequirementParamsFields) {
    return {
      missionRequirementIndex: fields.missionRequirementIndex,
    }
  }

  toJSON(): RemoveRequirementParamsJSON {
    return {
      missionRequirementIndex: this.missionRequirementIndex,
    }
  }

  static fromJSON(obj: RemoveRequirementParamsJSON): RemoveRequirementParams {
    return new RemoveRequirementParams({
      missionRequirementIndex: obj.missionRequirementIndex,
    })
  }

  toEncodable() {
    return RemoveRequirementParams.toEncodable(this)
  }
}
