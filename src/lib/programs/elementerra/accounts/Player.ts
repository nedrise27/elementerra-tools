import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface PlayerFields {
  bump: number
  seasonNumber: number
  authority: PublicKey
  numberOfElementsInvented: number
  numberOfFailedAttempts: BN
  numberOfElementsBurned: BN
  numberOfElementumBurned: BN
  /** Stores for each element the number of times it was invented */
  numberOfTimeCreatedElement: Array<number>
  /** Default pubkey if no referrer */
  referrerTreasury: PublicKey
  /** Default pubkey if no referrer */
  referrerMember: PublicKey
  numberOfElementsInventedUpdated: BN
  numberOfElementumBurnedUpdated: BN
}

export interface PlayerJSON {
  bump: number
  seasonNumber: number
  authority: string
  numberOfElementsInvented: number
  numberOfFailedAttempts: string
  numberOfElementsBurned: string
  numberOfElementumBurned: string
  /** Stores for each element the number of times it was invented */
  numberOfTimeCreatedElement: Array<number>
  /** Default pubkey if no referrer */
  referrerTreasury: string
  /** Default pubkey if no referrer */
  referrerMember: string
  numberOfElementsInventedUpdated: string
  numberOfElementumBurnedUpdated: string
}

/** PDA ["player_", season number, authority pubkey] */
export class Player {
  readonly bump: number
  readonly seasonNumber: number
  readonly authority: PublicKey
  readonly numberOfElementsInvented: number
  readonly numberOfFailedAttempts: BN
  readonly numberOfElementsBurned: BN
  readonly numberOfElementumBurned: BN
  /** Stores for each element the number of times it was invented */
  readonly numberOfTimeCreatedElement: Array<number>
  /** Default pubkey if no referrer */
  readonly referrerTreasury: PublicKey
  /** Default pubkey if no referrer */
  readonly referrerMember: PublicKey
  readonly numberOfElementsInventedUpdated: BN
  readonly numberOfElementumBurnedUpdated: BN

  static readonly discriminator = Buffer.from([
    205, 222, 112, 7, 165, 155, 206, 218,
  ])

  static readonly layout = borsh.struct([
    borsh.u8("bump"),
    borsh.u8("seasonNumber"),
    borsh.publicKey("authority"),
    borsh.u16("numberOfElementsInvented"),
    borsh.u64("numberOfFailedAttempts"),
    borsh.u64("numberOfElementsBurned"),
    borsh.u64("numberOfElementumBurned"),
    borsh.array(borsh.u32(), 100, "numberOfTimeCreatedElement"),
    borsh.publicKey("referrerTreasury"),
    borsh.publicKey("referrerMember"),
    borsh.i64("numberOfElementsInventedUpdated"),
    borsh.i64("numberOfElementumBurnedUpdated"),
  ])

  constructor(fields: PlayerFields) {
    this.bump = fields.bump
    this.seasonNumber = fields.seasonNumber
    this.authority = fields.authority
    this.numberOfElementsInvented = fields.numberOfElementsInvented
    this.numberOfFailedAttempts = fields.numberOfFailedAttempts
    this.numberOfElementsBurned = fields.numberOfElementsBurned
    this.numberOfElementumBurned = fields.numberOfElementumBurned
    this.numberOfTimeCreatedElement = fields.numberOfTimeCreatedElement
    this.referrerTreasury = fields.referrerTreasury
    this.referrerMember = fields.referrerMember
    this.numberOfElementsInventedUpdated =
      fields.numberOfElementsInventedUpdated
    this.numberOfElementumBurnedUpdated = fields.numberOfElementumBurnedUpdated
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<Player | null> {
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
  ): Promise<Array<Player | null>> {
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

  static decode(data: Buffer): Player {
    if (!data.slice(0, 8).equals(Player.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = Player.layout.decode(data.slice(8))

    return new Player({
      bump: dec.bump,
      seasonNumber: dec.seasonNumber,
      authority: dec.authority,
      numberOfElementsInvented: dec.numberOfElementsInvented,
      numberOfFailedAttempts: dec.numberOfFailedAttempts,
      numberOfElementsBurned: dec.numberOfElementsBurned,
      numberOfElementumBurned: dec.numberOfElementumBurned,
      numberOfTimeCreatedElement: dec.numberOfTimeCreatedElement,
      referrerTreasury: dec.referrerTreasury,
      referrerMember: dec.referrerMember,
      numberOfElementsInventedUpdated: dec.numberOfElementsInventedUpdated,
      numberOfElementumBurnedUpdated: dec.numberOfElementumBurnedUpdated,
    })
  }

  toJSON(): PlayerJSON {
    return {
      bump: this.bump,
      seasonNumber: this.seasonNumber,
      authority: this.authority.toString(),
      numberOfElementsInvented: this.numberOfElementsInvented,
      numberOfFailedAttempts: this.numberOfFailedAttempts.toString(),
      numberOfElementsBurned: this.numberOfElementsBurned.toString(),
      numberOfElementumBurned: this.numberOfElementumBurned.toString(),
      numberOfTimeCreatedElement: this.numberOfTimeCreatedElement,
      referrerTreasury: this.referrerTreasury.toString(),
      referrerMember: this.referrerMember.toString(),
      numberOfElementsInventedUpdated:
        this.numberOfElementsInventedUpdated.toString(),
      numberOfElementumBurnedUpdated:
        this.numberOfElementumBurnedUpdated.toString(),
    }
  }

  static fromJSON(obj: PlayerJSON): Player {
    return new Player({
      bump: obj.bump,
      seasonNumber: obj.seasonNumber,
      authority: new PublicKey(obj.authority),
      numberOfElementsInvented: obj.numberOfElementsInvented,
      numberOfFailedAttempts: new BN(obj.numberOfFailedAttempts),
      numberOfElementsBurned: new BN(obj.numberOfElementsBurned),
      numberOfElementumBurned: new BN(obj.numberOfElementumBurned),
      numberOfTimeCreatedElement: obj.numberOfTimeCreatedElement,
      referrerTreasury: new PublicKey(obj.referrerTreasury),
      referrerMember: new PublicKey(obj.referrerMember),
      numberOfElementsInventedUpdated: new BN(
        obj.numberOfElementsInventedUpdated
      ),
      numberOfElementumBurnedUpdated: new BN(
        obj.numberOfElementumBurnedUpdated
      ),
    })
  }
}
