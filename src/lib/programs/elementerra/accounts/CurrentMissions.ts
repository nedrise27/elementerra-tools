import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface CurrentMissionsFields {
  bump: number
  seasonNumber: number
  startTime: BN
  endTime: BN
  missions: Array<PublicKey>
}

export interface CurrentMissionsJSON {
  bump: number
  seasonNumber: number
  startTime: string
  endTime: string
  missions: Array<string>
}

/** PDA ["current_missions_", season number, start time, end time] */
export class CurrentMissions {
  readonly bump: number
  readonly seasonNumber: number
  readonly startTime: BN
  readonly endTime: BN
  readonly missions: Array<PublicKey>

  static readonly discriminator = Buffer.from([
    53, 18, 18, 158, 234, 185, 156, 45,
  ])

  static readonly layout = borsh.struct([
    borsh.u8("bump"),
    borsh.u8("seasonNumber"),
    borsh.i64("startTime"),
    borsh.i64("endTime"),
    borsh.array(borsh.publicKey(), 6, "missions"),
  ])

  constructor(fields: CurrentMissionsFields) {
    this.bump = fields.bump
    this.seasonNumber = fields.seasonNumber
    this.startTime = fields.startTime
    this.endTime = fields.endTime
    this.missions = fields.missions
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<CurrentMissions | null> {
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
  ): Promise<Array<CurrentMissions | null>> {
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

  static decode(data: Buffer): CurrentMissions {
    if (!data.slice(0, 8).equals(CurrentMissions.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = CurrentMissions.layout.decode(data.slice(8))

    return new CurrentMissions({
      bump: dec.bump,
      seasonNumber: dec.seasonNumber,
      startTime: dec.startTime,
      endTime: dec.endTime,
      missions: dec.missions,
    })
  }

  toJSON(): CurrentMissionsJSON {
    return {
      bump: this.bump,
      seasonNumber: this.seasonNumber,
      startTime: this.startTime.toString(),
      endTime: this.endTime.toString(),
      missions: this.missions.map((item) => item.toString()),
    }
  }

  static fromJSON(obj: CurrentMissionsJSON): CurrentMissions {
    return new CurrentMissions({
      bump: obj.bump,
      seasonNumber: obj.seasonNumber,
      startTime: new BN(obj.startTime),
      endTime: new BN(obj.endTime),
      missions: obj.missions.map((item) => new PublicKey(item)),
    })
  }
}
