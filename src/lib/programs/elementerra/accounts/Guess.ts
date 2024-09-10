import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface GuessFields {
  bump: number
  seasonNumber: number
  hash: Array<number>
  /** Number of times it was tried */
  numberOfTimesTried: BN
  isSuccess: boolean
  /** Default pubkey if not successful */
  element: PublicKey
  elementTried1Name: string
  elementTried1Padding: Uint8Array
  elementTried2Name: string
  elementTried2Padding: Uint8Array
  elementTried3Name: string
  elementTried3Padding: Uint8Array
  elementTried4Name: string
  elementTried4Padding: Uint8Array
  creator: PublicKey
}

export interface GuessJSON {
  bump: number
  seasonNumber: number
  hash: Array<number>
  /** Number of times it was tried */
  numberOfTimesTried: string
  isSuccess: boolean
  /** Default pubkey if not successful */
  element: string
  elementTried1Name: string
  elementTried1Padding: Array<number>
  elementTried2Name: string
  elementTried2Padding: Array<number>
  elementTried3Name: string
  elementTried3Padding: Array<number>
  elementTried4Name: string
  elementTried4Padding: Array<number>
  creator: string
}

/** PDA ["guess_", season_number, hash(name, name, name, name, salt)] */
export class Guess {
  readonly bump: number
  readonly seasonNumber: number
  readonly hash: Array<number>
  /** Number of times it was tried */
  readonly numberOfTimesTried: BN
  readonly isSuccess: boolean
  /** Default pubkey if not successful */
  readonly element: PublicKey
  readonly elementTried1Name: string
  readonly elementTried1Padding: Uint8Array
  readonly elementTried2Name: string
  readonly elementTried2Padding: Uint8Array
  readonly elementTried3Name: string
  readonly elementTried3Padding: Uint8Array
  readonly elementTried4Name: string
  readonly elementTried4Padding: Uint8Array
  readonly creator: PublicKey

  static readonly discriminator = Buffer.from([
    199, 136, 162, 22, 201, 176, 249, 195,
  ])

  static readonly layout = borsh.struct([
    borsh.u8("bump"),
    borsh.u8("seasonNumber"),
    borsh.array(borsh.u8(), 32, "hash"),
    borsh.u64("numberOfTimesTried"),
    borsh.bool("isSuccess"),
    borsh.publicKey("element"),
    borsh.str("elementTried1Name"),
    borsh.vecU8("elementTried1Padding"),
    borsh.str("elementTried2Name"),
    borsh.vecU8("elementTried2Padding"),
    borsh.str("elementTried3Name"),
    borsh.vecU8("elementTried3Padding"),
    borsh.str("elementTried4Name"),
    borsh.vecU8("elementTried4Padding"),
    borsh.publicKey("creator"),
  ])

  constructor(fields: GuessFields) {
    this.bump = fields.bump
    this.seasonNumber = fields.seasonNumber
    this.hash = fields.hash
    this.numberOfTimesTried = fields.numberOfTimesTried
    this.isSuccess = fields.isSuccess
    this.element = fields.element
    this.elementTried1Name = fields.elementTried1Name
    this.elementTried1Padding = fields.elementTried1Padding
    this.elementTried2Name = fields.elementTried2Name
    this.elementTried2Padding = fields.elementTried2Padding
    this.elementTried3Name = fields.elementTried3Name
    this.elementTried3Padding = fields.elementTried3Padding
    this.elementTried4Name = fields.elementTried4Name
    this.elementTried4Padding = fields.elementTried4Padding
    this.creator = fields.creator
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<Guess | null> {
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
  ): Promise<Array<Guess | null>> {
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

  static decode(data: Buffer): Guess {
    if (!data.slice(0, 8).equals(Guess.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = Guess.layout.decode(data.slice(8))

    return new Guess({
      bump: dec.bump,
      seasonNumber: dec.seasonNumber,
      hash: dec.hash,
      numberOfTimesTried: dec.numberOfTimesTried,
      isSuccess: dec.isSuccess,
      element: dec.element,
      elementTried1Name: dec.elementTried1Name,
      elementTried1Padding: new Uint8Array(
        dec.elementTried1Padding.buffer,
        dec.elementTried1Padding.byteOffset,
        dec.elementTried1Padding.length
      ),
      elementTried2Name: dec.elementTried2Name,
      elementTried2Padding: new Uint8Array(
        dec.elementTried2Padding.buffer,
        dec.elementTried2Padding.byteOffset,
        dec.elementTried2Padding.length
      ),
      elementTried3Name: dec.elementTried3Name,
      elementTried3Padding: new Uint8Array(
        dec.elementTried3Padding.buffer,
        dec.elementTried3Padding.byteOffset,
        dec.elementTried3Padding.length
      ),
      elementTried4Name: dec.elementTried4Name,
      elementTried4Padding: new Uint8Array(
        dec.elementTried4Padding.buffer,
        dec.elementTried4Padding.byteOffset,
        dec.elementTried4Padding.length
      ),
      creator: dec.creator,
    })
  }

  toJSON(): GuessJSON {
    return {
      bump: this.bump,
      seasonNumber: this.seasonNumber,
      hash: this.hash,
      numberOfTimesTried: this.numberOfTimesTried.toString(),
      isSuccess: this.isSuccess,
      element: this.element.toString(),
      elementTried1Name: this.elementTried1Name,
      elementTried1Padding: Array.from(this.elementTried1Padding.values()),
      elementTried2Name: this.elementTried2Name,
      elementTried2Padding: Array.from(this.elementTried2Padding.values()),
      elementTried3Name: this.elementTried3Name,
      elementTried3Padding: Array.from(this.elementTried3Padding.values()),
      elementTried4Name: this.elementTried4Name,
      elementTried4Padding: Array.from(this.elementTried4Padding.values()),
      creator: this.creator.toString(),
    }
  }

  static fromJSON(obj: GuessJSON): Guess {
    return new Guess({
      bump: obj.bump,
      seasonNumber: obj.seasonNumber,
      hash: obj.hash,
      numberOfTimesTried: new BN(obj.numberOfTimesTried),
      isSuccess: obj.isSuccess,
      element: new PublicKey(obj.element),
      elementTried1Name: obj.elementTried1Name,
      elementTried1Padding: Uint8Array.from(obj.elementTried1Padding),
      elementTried2Name: obj.elementTried2Name,
      elementTried2Padding: Uint8Array.from(obj.elementTried2Padding),
      elementTried3Name: obj.elementTried3Name,
      elementTried3Padding: Uint8Array.from(obj.elementTried3Padding),
      elementTried4Name: obj.elementTried4Name,
      elementTried4Padding: Uint8Array.from(obj.elementTried4Padding),
      creator: new PublicKey(obj.creator),
    })
  }
}
