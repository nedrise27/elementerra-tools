import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface SeasonFields {
  bump: number
  seasonNumber: number
  isCurrentSeason: boolean
  elementsInventedCurrentlyBeingRewarded: number
  totalElementsToInventAvailable: number
  elementsInvented: number
}

export interface SeasonJSON {
  bump: number
  seasonNumber: number
  isCurrentSeason: boolean
  elementsInventedCurrentlyBeingRewarded: number
  totalElementsToInventAvailable: number
  elementsInvented: number
}

/** PDA ["season_", season number] */
export class Season {
  readonly bump: number
  readonly seasonNumber: number
  readonly isCurrentSeason: boolean
  readonly elementsInventedCurrentlyBeingRewarded: number
  readonly totalElementsToInventAvailable: number
  readonly elementsInvented: number

  static readonly discriminator = Buffer.from([
    76, 67, 93, 156, 180, 157, 248, 47,
  ])

  static readonly layout = borsh.struct([
    borsh.u8("bump"),
    borsh.u8("seasonNumber"),
    borsh.bool("isCurrentSeason"),
    borsh.u8("elementsInventedCurrentlyBeingRewarded"),
    borsh.u16("totalElementsToInventAvailable"),
    borsh.u16("elementsInvented"),
  ])

  constructor(fields: SeasonFields) {
    this.bump = fields.bump
    this.seasonNumber = fields.seasonNumber
    this.isCurrentSeason = fields.isCurrentSeason
    this.elementsInventedCurrentlyBeingRewarded =
      fields.elementsInventedCurrentlyBeingRewarded
    this.totalElementsToInventAvailable = fields.totalElementsToInventAvailable
    this.elementsInvented = fields.elementsInvented
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<Season | null> {
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
  ): Promise<Array<Season | null>> {
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

  static decode(data: Buffer): Season {
    if (!data.slice(0, 8).equals(Season.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = Season.layout.decode(data.slice(8))

    return new Season({
      bump: dec.bump,
      seasonNumber: dec.seasonNumber,
      isCurrentSeason: dec.isCurrentSeason,
      elementsInventedCurrentlyBeingRewarded:
        dec.elementsInventedCurrentlyBeingRewarded,
      totalElementsToInventAvailable: dec.totalElementsToInventAvailable,
      elementsInvented: dec.elementsInvented,
    })
  }

  toJSON(): SeasonJSON {
    return {
      bump: this.bump,
      seasonNumber: this.seasonNumber,
      isCurrentSeason: this.isCurrentSeason,
      elementsInventedCurrentlyBeingRewarded:
        this.elementsInventedCurrentlyBeingRewarded,
      totalElementsToInventAvailable: this.totalElementsToInventAvailable,
      elementsInvented: this.elementsInvented,
    }
  }

  static fromJSON(obj: SeasonJSON): Season {
    return new Season({
      bump: obj.bump,
      seasonNumber: obj.seasonNumber,
      isCurrentSeason: obj.isCurrentSeason,
      elementsInventedCurrentlyBeingRewarded:
        obj.elementsInventedCurrentlyBeingRewarded,
      totalElementsToInventAvailable: obj.totalElementsToInventAvailable,
      elementsInvented: obj.elementsInvented,
    })
  }
}
