import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface MissionFields {
  bump: number
  seasonNumber: number
  missionId: number
  numberOfPeopleCurrentlyInMission: number
  numberOfSuccesses: number
  numberOfFailures: number
  numberOfHoursToComplete: number
  requirements: Array<types.MissionRequirementKind>
  potentialRewards: Array<types.MissionRewardKind>
  odds: Array<types.MissionOddsFields>
}

export interface MissionJSON {
  bump: number
  seasonNumber: number
  missionId: number
  numberOfPeopleCurrentlyInMission: number
  numberOfSuccesses: number
  numberOfFailures: number
  numberOfHoursToComplete: number
  requirements: Array<types.MissionRequirementJSON>
  potentialRewards: Array<types.MissionRewardJSON>
  odds: Array<types.MissionOddsJSON>
}

/** PDA ["mission_", season_number, mission_id ] */
export class Mission {
  readonly bump: number
  readonly seasonNumber: number
  readonly missionId: number
  readonly numberOfPeopleCurrentlyInMission: number
  readonly numberOfSuccesses: number
  readonly numberOfFailures: number
  readonly numberOfHoursToComplete: number
  readonly requirements: Array<types.MissionRequirementKind>
  readonly potentialRewards: Array<types.MissionRewardKind>
  readonly odds: Array<types.MissionOdds>

  static readonly discriminator = Buffer.from([
    170, 56, 116, 75, 24, 11, 109, 12,
  ])

  static readonly layout = borsh.struct([
    borsh.u8("bump"),
    borsh.u8("seasonNumber"),
    borsh.u16("missionId"),
    borsh.u32("numberOfPeopleCurrentlyInMission"),
    borsh.u32("numberOfSuccesses"),
    borsh.u32("numberOfFailures"),
    borsh.u16("numberOfHoursToComplete"),
    borsh.array(types.MissionRequirement.layout(), 4, "requirements"),
    borsh.array(types.MissionReward.layout(), 6, "potentialRewards"),
    borsh.array(types.MissionOdds.layout(), 6, "odds"),
  ])

  constructor(fields: MissionFields) {
    this.bump = fields.bump
    this.seasonNumber = fields.seasonNumber
    this.missionId = fields.missionId
    this.numberOfPeopleCurrentlyInMission =
      fields.numberOfPeopleCurrentlyInMission
    this.numberOfSuccesses = fields.numberOfSuccesses
    this.numberOfFailures = fields.numberOfFailures
    this.numberOfHoursToComplete = fields.numberOfHoursToComplete
    this.requirements = fields.requirements
    this.potentialRewards = fields.potentialRewards
    this.odds = fields.odds.map((item) => new types.MissionOdds({ ...item }))
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<Mission | null> {
    const info = await c.getAccountInfo(address)

    if (info === null) {
      return null
    }
    if (!info.owner.equals(programId)) {
      throw new Error("account doesn't belong to this program")
    }

    return this.decode(info.data)
  }

  static async fetchMultiple(
    c: Connection,
    addresses: PublicKey[],
    programId: PublicKey = PROGRAM_ID
  ): Promise<Array<Mission | null>> {
    const infos = await c.getMultipleAccountsInfo(addresses)

    return infos.map((info) => {
      if (info === null) {
        return null
      }
      if (!info.owner.equals(programId)) {
        throw new Error("account doesn't belong to this program")
      }

      return this.decode(info.data)
    })
  }

  static decode(data: Buffer): Mission {
    if (!data.slice(0, 8).equals(Mission.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = Mission.layout.decode(data.slice(8))

    return new Mission({
      bump: dec.bump,
      seasonNumber: dec.seasonNumber,
      missionId: dec.missionId,
      numberOfPeopleCurrentlyInMission: dec.numberOfPeopleCurrentlyInMission,
      numberOfSuccesses: dec.numberOfSuccesses,
      numberOfFailures: dec.numberOfFailures,
      numberOfHoursToComplete: dec.numberOfHoursToComplete,
      requirements: dec.requirements.map(
        (
          item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */
        ) => types.MissionRequirement.fromDecoded(item)
      ),
      potentialRewards: dec.potentialRewards.map(
        (
          item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */
        ) => types.MissionReward.fromDecoded(item)
      ),
      odds: dec.odds.map(
        (
          item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */
        ) => types.MissionOdds.fromDecoded(item)
      ),
    })
  }

  toJSON(): MissionJSON {
    return {
      bump: this.bump,
      seasonNumber: this.seasonNumber,
      missionId: this.missionId,
      numberOfPeopleCurrentlyInMission: this.numberOfPeopleCurrentlyInMission,
      numberOfSuccesses: this.numberOfSuccesses,
      numberOfFailures: this.numberOfFailures,
      numberOfHoursToComplete: this.numberOfHoursToComplete,
      requirements: this.requirements.map((item) => item.toJSON()),
      potentialRewards: this.potentialRewards.map((item) => item.toJSON()),
      odds: this.odds.map((item) => item.toJSON()),
    }
  }

  static fromJSON(obj: MissionJSON): Mission {
    return new Mission({
      bump: obj.bump,
      seasonNumber: obj.seasonNumber,
      missionId: obj.missionId,
      numberOfPeopleCurrentlyInMission: obj.numberOfPeopleCurrentlyInMission,
      numberOfSuccesses: obj.numberOfSuccesses,
      numberOfFailures: obj.numberOfFailures,
      numberOfHoursToComplete: obj.numberOfHoursToComplete,
      requirements: obj.requirements.map((item) =>
        types.MissionRequirement.fromJSON(item)
      ),
      potentialRewards: obj.potentialRewards.map((item) =>
        types.MissionReward.fromJSON(item)
      ),
      odds: obj.odds.map((item) => types.MissionOdds.fromJSON(item)),
    })
  }
}
