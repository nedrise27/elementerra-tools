import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface PlayerMissionFields {
  bump: number
  seasonNumber: number
  player: PublicKey
  mission: PublicKey
  result: number
  numberOfRequirementsLeftToComplete: number
  requirementsFilled: Array<PublicKey>
  startedAt: BN
  status: types.MissionStatusKind
  authority: PublicKey
  request: PublicKey
  completed: boolean
}

export interface PlayerMissionJSON {
  bump: number
  seasonNumber: number
  player: string
  mission: string
  result: number
  numberOfRequirementsLeftToComplete: number
  requirementsFilled: Array<string>
  startedAt: string
  status: types.MissionStatusJSON
  authority: string
  request: string
  completed: boolean
}

/** PDA ["player_mission_", season_number, mission pub, player pub ] */
export class PlayerMission {
  readonly bump: number
  readonly seasonNumber: number
  readonly player: PublicKey
  readonly mission: PublicKey
  readonly result: number
  readonly numberOfRequirementsLeftToComplete: number
  readonly requirementsFilled: Array<PublicKey>
  readonly startedAt: BN
  readonly status: types.MissionStatusKind
  readonly authority: PublicKey
  readonly request: PublicKey
  readonly completed: boolean

  static readonly discriminator = Buffer.from([
    92, 53, 224, 173, 241, 39, 182, 72,
  ])

  static readonly layout = borsh.struct([
    borsh.u8("bump"),
    borsh.u8("seasonNumber"),
    borsh.publicKey("player"),
    borsh.publicKey("mission"),
    borsh.u32("result"),
    borsh.u8("numberOfRequirementsLeftToComplete"),
    borsh.array(borsh.publicKey(), 6, "requirementsFilled"),
    borsh.i64("startedAt"),
    types.MissionStatus.layout("status"),
    borsh.publicKey("authority"),
    borsh.publicKey("request"),
    borsh.bool("completed"),
  ])

  constructor(fields: PlayerMissionFields) {
    this.bump = fields.bump
    this.seasonNumber = fields.seasonNumber
    this.player = fields.player
    this.mission = fields.mission
    this.result = fields.result
    this.numberOfRequirementsLeftToComplete =
      fields.numberOfRequirementsLeftToComplete
    this.requirementsFilled = fields.requirementsFilled
    this.startedAt = fields.startedAt
    this.status = fields.status
    this.authority = fields.authority
    this.request = fields.request
    this.completed = fields.completed
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<PlayerMission | null> {
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
  ): Promise<Array<PlayerMission | null>> {
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

  static decode(data: Buffer): PlayerMission {
    if (!data.slice(0, 8).equals(PlayerMission.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = PlayerMission.layout.decode(data.slice(8))

    return new PlayerMission({
      bump: dec.bump,
      seasonNumber: dec.seasonNumber,
      player: dec.player,
      mission: dec.mission,
      result: dec.result,
      numberOfRequirementsLeftToComplete:
        dec.numberOfRequirementsLeftToComplete,
      requirementsFilled: dec.requirementsFilled,
      startedAt: dec.startedAt,
      status: types.MissionStatus.fromDecoded(dec.status),
      authority: dec.authority,
      request: dec.request,
      completed: dec.completed,
    })
  }

  toJSON(): PlayerMissionJSON {
    return {
      bump: this.bump,
      seasonNumber: this.seasonNumber,
      player: this.player.toString(),
      mission: this.mission.toString(),
      result: this.result,
      numberOfRequirementsLeftToComplete:
        this.numberOfRequirementsLeftToComplete,
      requirementsFilled: this.requirementsFilled.map((item) =>
        item.toString()
      ),
      startedAt: this.startedAt.toString(),
      status: this.status.toJSON(),
      authority: this.authority.toString(),
      request: this.request.toString(),
      completed: this.completed,
    }
  }

  static fromJSON(obj: PlayerMissionJSON): PlayerMission {
    return new PlayerMission({
      bump: obj.bump,
      seasonNumber: obj.seasonNumber,
      player: new PublicKey(obj.player),
      mission: new PublicKey(obj.mission),
      result: obj.result,
      numberOfRequirementsLeftToComplete:
        obj.numberOfRequirementsLeftToComplete,
      requirementsFilled: obj.requirementsFilled.map(
        (item) => new PublicKey(item)
      ),
      startedAt: new BN(obj.startedAt),
      status: types.MissionStatus.fromJSON(obj.status),
      authority: new PublicKey(obj.authority),
      request: new PublicKey(obj.request),
      completed: obj.completed,
    })
  }
}
