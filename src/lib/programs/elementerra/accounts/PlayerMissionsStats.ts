import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface PlayerMissionsStatsFields {
  bump: number
  seasonNumber: number
  player: PublicKey
  numberOfMissionsCompleted: number
  numberOfMissionsSucceeded: number
  numberOfMissionsFailed: number
}

export interface PlayerMissionsStatsJSON {
  bump: number
  seasonNumber: number
  player: string
  numberOfMissionsCompleted: number
  numberOfMissionsSucceeded: number
  numberOfMissionsFailed: number
}

/** PDA ["player_missions_stats_", season_number, player pub ] */
export class PlayerMissionsStats {
  readonly bump: number
  readonly seasonNumber: number
  readonly player: PublicKey
  readonly numberOfMissionsCompleted: number
  readonly numberOfMissionsSucceeded: number
  readonly numberOfMissionsFailed: number

  static readonly discriminator = Buffer.from([
    62, 39, 128, 187, 178, 63, 99, 121,
  ])

  static readonly layout = borsh.struct([
    borsh.u8("bump"),
    borsh.u8("seasonNumber"),
    borsh.publicKey("player"),
    borsh.u32("numberOfMissionsCompleted"),
    borsh.u32("numberOfMissionsSucceeded"),
    borsh.u32("numberOfMissionsFailed"),
  ])

  constructor(fields: PlayerMissionsStatsFields) {
    this.bump = fields.bump
    this.seasonNumber = fields.seasonNumber
    this.player = fields.player
    this.numberOfMissionsCompleted = fields.numberOfMissionsCompleted
    this.numberOfMissionsSucceeded = fields.numberOfMissionsSucceeded
    this.numberOfMissionsFailed = fields.numberOfMissionsFailed
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<PlayerMissionsStats | null> {
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
  ): Promise<Array<PlayerMissionsStats | null>> {
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

  static decode(data: Buffer): PlayerMissionsStats {
    if (!data.slice(0, 8).equals(PlayerMissionsStats.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = PlayerMissionsStats.layout.decode(data.slice(8))

    return new PlayerMissionsStats({
      bump: dec.bump,
      seasonNumber: dec.seasonNumber,
      player: dec.player,
      numberOfMissionsCompleted: dec.numberOfMissionsCompleted,
      numberOfMissionsSucceeded: dec.numberOfMissionsSucceeded,
      numberOfMissionsFailed: dec.numberOfMissionsFailed,
    })
  }

  toJSON(): PlayerMissionsStatsJSON {
    return {
      bump: this.bump,
      seasonNumber: this.seasonNumber,
      player: this.player.toString(),
      numberOfMissionsCompleted: this.numberOfMissionsCompleted,
      numberOfMissionsSucceeded: this.numberOfMissionsSucceeded,
      numberOfMissionsFailed: this.numberOfMissionsFailed,
    }
  }

  static fromJSON(obj: PlayerMissionsStatsJSON): PlayerMissionsStats {
    return new PlayerMissionsStats({
      bump: obj.bump,
      seasonNumber: obj.seasonNumber,
      player: new PublicKey(obj.player),
      numberOfMissionsCompleted: obj.numberOfMissionsCompleted,
      numberOfMissionsSucceeded: obj.numberOfMissionsSucceeded,
      numberOfMissionsFailed: obj.numberOfMissionsFailed,
    })
  }
}
