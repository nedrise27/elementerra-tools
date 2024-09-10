import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface AddRequirementParamsFields {
  missionRequirementIndex: number
  missionRequirement: types.MissionRequirementKind
}

export interface AddRequirementParamsJSON {
  missionRequirementIndex: number
  missionRequirement: types.MissionRequirementJSON
}

export class AddRequirementParams {
  readonly missionRequirementIndex: number
  readonly missionRequirement: types.MissionRequirementKind

  constructor(fields: AddRequirementParamsFields) {
    this.missionRequirementIndex = fields.missionRequirementIndex
    this.missionRequirement = fields.missionRequirement
  }

  static layout(property?: string) {
    return borsh.struct(
      [
        borsh.u8("missionRequirementIndex"),
        types.MissionRequirement.layout("missionRequirement"),
      ],
      property
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new AddRequirementParams({
      missionRequirementIndex: obj.missionRequirementIndex,
      missionRequirement: types.MissionRequirement.fromDecoded(
        obj.missionRequirement
      ),
    })
  }

  static toEncodable(fields: AddRequirementParamsFields) {
    return {
      missionRequirementIndex: fields.missionRequirementIndex,
      missionRequirement: fields.missionRequirement.toEncodable(),
    }
  }

  toJSON(): AddRequirementParamsJSON {
    return {
      missionRequirementIndex: this.missionRequirementIndex,
      missionRequirement: this.missionRequirement.toJSON(),
    }
  }

  static fromJSON(obj: AddRequirementParamsJSON): AddRequirementParams {
    return new AddRequirementParams({
      missionRequirementIndex: obj.missionRequirementIndex,
      missionRequirement: types.MissionRequirement.fromJSON(
        obj.missionRequirement
      ),
    })
  }

  toEncodable() {
    return AddRequirementParams.toEncodable(this)
  }
}
