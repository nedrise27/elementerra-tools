import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface PendingGuessFields {
  bump: number
  seasonNumber: number
  authority: PublicKey
  /** Default pubkey if not included */
  includedElements: Array<PublicKey>
  numberOfElementsInGuess: number
  calculatedHash: Array<number>
  status: types.PendingGuessStatusKind
  elementIncluded1Name: string
  elementIncluded1Padding: Uint8Array
  elementIncluded2Name: string
  elementIncluded2Padding: Uint8Array
  elementIncluded3Name: string
  elementIncluded3Padding: Uint8Array
  elementIncluded4Name: string
  elementIncluded4Padding: Uint8Array
}

export interface PendingGuessJSON {
  bump: number
  seasonNumber: number
  authority: string
  /** Default pubkey if not included */
  includedElements: Array<string>
  numberOfElementsInGuess: number
  calculatedHash: Array<number>
  status: types.PendingGuessStatusJSON
  elementIncluded1Name: string
  elementIncluded1Padding: Array<number>
  elementIncluded2Name: string
  elementIncluded2Padding: Array<number>
  elementIncluded3Name: string
  elementIncluded3Padding: Array<number>
  elementIncluded4Name: string
  elementIncluded4Padding: Array<number>
}

/** PDA ["pending_", season_number, authority pub key] */
export class PendingGuess {
  readonly bump: number
  readonly seasonNumber: number
  readonly authority: PublicKey
  /** Default pubkey if not included */
  readonly includedElements: Array<PublicKey>
  readonly numberOfElementsInGuess: number
  readonly calculatedHash: Array<number>
  readonly status: types.PendingGuessStatusKind
  readonly elementIncluded1Name: string
  readonly elementIncluded1Padding: Uint8Array
  readonly elementIncluded2Name: string
  readonly elementIncluded2Padding: Uint8Array
  readonly elementIncluded3Name: string
  readonly elementIncluded3Padding: Uint8Array
  readonly elementIncluded4Name: string
  readonly elementIncluded4Padding: Uint8Array

  static readonly discriminator = Buffer.from([
    152, 86, 71, 5, 187, 49, 215, 50,
  ])

  static readonly layout = borsh.struct([
    borsh.u8("bump"),
    borsh.u8("seasonNumber"),
    borsh.publicKey("authority"),
    borsh.array(borsh.publicKey(), 4, "includedElements"),
    borsh.u8("numberOfElementsInGuess"),
    borsh.array(borsh.u8(), 32, "calculatedHash"),
    types.PendingGuessStatus.layout("status"),
    borsh.str("elementIncluded1Name"),
    borsh.vecU8("elementIncluded1Padding"),
    borsh.str("elementIncluded2Name"),
    borsh.vecU8("elementIncluded2Padding"),
    borsh.str("elementIncluded3Name"),
    borsh.vecU8("elementIncluded3Padding"),
    borsh.str("elementIncluded4Name"),
    borsh.vecU8("elementIncluded4Padding"),
  ])

  constructor(fields: PendingGuessFields) {
    this.bump = fields.bump
    this.seasonNumber = fields.seasonNumber
    this.authority = fields.authority
    this.includedElements = fields.includedElements
    this.numberOfElementsInGuess = fields.numberOfElementsInGuess
    this.calculatedHash = fields.calculatedHash
    this.status = fields.status
    this.elementIncluded1Name = fields.elementIncluded1Name
    this.elementIncluded1Padding = fields.elementIncluded1Padding
    this.elementIncluded2Name = fields.elementIncluded2Name
    this.elementIncluded2Padding = fields.elementIncluded2Padding
    this.elementIncluded3Name = fields.elementIncluded3Name
    this.elementIncluded3Padding = fields.elementIncluded3Padding
    this.elementIncluded4Name = fields.elementIncluded4Name
    this.elementIncluded4Padding = fields.elementIncluded4Padding
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<PendingGuess | null> {
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
  ): Promise<Array<PendingGuess | null>> {
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

  static decode(data: Buffer): PendingGuess {
    if (!data.slice(0, 8).equals(PendingGuess.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = PendingGuess.layout.decode(data.slice(8))

    return new PendingGuess({
      bump: dec.bump,
      seasonNumber: dec.seasonNumber,
      authority: dec.authority,
      includedElements: dec.includedElements,
      numberOfElementsInGuess: dec.numberOfElementsInGuess,
      calculatedHash: dec.calculatedHash,
      status: types.PendingGuessStatus.fromDecoded(dec.status),
      elementIncluded1Name: dec.elementIncluded1Name,
      elementIncluded1Padding: new Uint8Array(
        dec.elementIncluded1Padding.buffer,
        dec.elementIncluded1Padding.byteOffset,
        dec.elementIncluded1Padding.length
      ),
      elementIncluded2Name: dec.elementIncluded2Name,
      elementIncluded2Padding: new Uint8Array(
        dec.elementIncluded2Padding.buffer,
        dec.elementIncluded2Padding.byteOffset,
        dec.elementIncluded2Padding.length
      ),
      elementIncluded3Name: dec.elementIncluded3Name,
      elementIncluded3Padding: new Uint8Array(
        dec.elementIncluded3Padding.buffer,
        dec.elementIncluded3Padding.byteOffset,
        dec.elementIncluded3Padding.length
      ),
      elementIncluded4Name: dec.elementIncluded4Name,
      elementIncluded4Padding: new Uint8Array(
        dec.elementIncluded4Padding.buffer,
        dec.elementIncluded4Padding.byteOffset,
        dec.elementIncluded4Padding.length
      ),
    })
  }

  toJSON(): PendingGuessJSON {
    return {
      bump: this.bump,
      seasonNumber: this.seasonNumber,
      authority: this.authority.toString(),
      includedElements: this.includedElements.map((item) => item.toString()),
      numberOfElementsInGuess: this.numberOfElementsInGuess,
      calculatedHash: this.calculatedHash,
      status: this.status.toJSON(),
      elementIncluded1Name: this.elementIncluded1Name,
      elementIncluded1Padding: Array.from(
        this.elementIncluded1Padding.values()
      ),
      elementIncluded2Name: this.elementIncluded2Name,
      elementIncluded2Padding: Array.from(
        this.elementIncluded2Padding.values()
      ),
      elementIncluded3Name: this.elementIncluded3Name,
      elementIncluded3Padding: Array.from(
        this.elementIncluded3Padding.values()
      ),
      elementIncluded4Name: this.elementIncluded4Name,
      elementIncluded4Padding: Array.from(
        this.elementIncluded4Padding.values()
      ),
    }
  }

  static fromJSON(obj: PendingGuessJSON): PendingGuess {
    return new PendingGuess({
      bump: obj.bump,
      seasonNumber: obj.seasonNumber,
      authority: new PublicKey(obj.authority),
      includedElements: obj.includedElements.map((item) => new PublicKey(item)),
      numberOfElementsInGuess: obj.numberOfElementsInGuess,
      calculatedHash: obj.calculatedHash,
      status: types.PendingGuessStatus.fromJSON(obj.status),
      elementIncluded1Name: obj.elementIncluded1Name,
      elementIncluded1Padding: Uint8Array.from(obj.elementIncluded1Padding),
      elementIncluded2Name: obj.elementIncluded2Name,
      elementIncluded2Padding: Uint8Array.from(obj.elementIncluded2Padding),
      elementIncluded3Name: obj.elementIncluded3Name,
      elementIncluded3Padding: Uint8Array.from(obj.elementIncluded3Padding),
      elementIncluded4Name: obj.elementIncluded4Name,
      elementIncluded4Padding: Uint8Array.from(obj.elementIncluded4Padding),
    })
  }
}
