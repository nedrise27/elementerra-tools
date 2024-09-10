import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface ElementFields {
  bump: number
  seasonNumber: number
  hash: Array<number>
  inventor: PublicKey
  tier: types.TierKind
  isDiscovered: boolean
  /** Number of times it was created */
  numberOfTimesCreated: BN
  /** Number of times it can be discovered and give the initial better reward */
  numberOfRewards: number
  cost: BN
  elementsRequired: Array<PublicKey>
  name: string
  padding: Uint8Array
}

export interface ElementJSON {
  bump: number
  seasonNumber: number
  hash: Array<number>
  inventor: string
  tier: types.TierJSON
  isDiscovered: boolean
  /** Number of times it was created */
  numberOfTimesCreated: string
  /** Number of times it can be discovered and give the initial better reward */
  numberOfRewards: number
  cost: string
  elementsRequired: Array<string>
  name: string
  padding: Array<number>
}

/** PDA ["element_", season number, hash(name, name, name, name, salt)] */
export class Element {
  readonly bump: number
  readonly seasonNumber: number
  readonly hash: Array<number>
  readonly inventor: PublicKey
  readonly tier: types.TierKind
  readonly isDiscovered: boolean
  /** Number of times it was created */
  readonly numberOfTimesCreated: BN
  /** Number of times it can be discovered and give the initial better reward */
  readonly numberOfRewards: number
  readonly cost: BN
  readonly elementsRequired: Array<PublicKey>
  readonly name: string
  readonly padding: Uint8Array

  static readonly discriminator = Buffer.from([
    141, 177, 208, 216, 191, 59, 12, 62,
  ])

  static readonly layout = borsh.struct([
    borsh.u8("bump"),
    borsh.u8("seasonNumber"),
    borsh.array(borsh.u8(), 32, "hash"),
    borsh.publicKey("inventor"),
    types.Tier.layout("tier"),
    borsh.bool("isDiscovered"),
    borsh.u64("numberOfTimesCreated"),
    borsh.u16("numberOfRewards"),
    borsh.u64("cost"),
    borsh.array(borsh.publicKey(), 4, "elementsRequired"),
    borsh.str("name"),
    borsh.vecU8("padding"),
  ])

  constructor(fields: ElementFields) {
    this.bump = fields.bump
    this.seasonNumber = fields.seasonNumber
    this.hash = fields.hash
    this.inventor = fields.inventor
    this.tier = fields.tier
    this.isDiscovered = fields.isDiscovered
    this.numberOfTimesCreated = fields.numberOfTimesCreated
    this.numberOfRewards = fields.numberOfRewards
    this.cost = fields.cost
    this.elementsRequired = fields.elementsRequired
    this.name = fields.name
    this.padding = fields.padding
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<Element | null> {
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
  ): Promise<Array<Element | null>> {
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

  static decode(data: Buffer): Element {
    if (!data.slice(0, 8).equals(Element.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = Element.layout.decode(data.slice(8))

    return new Element({
      bump: dec.bump,
      seasonNumber: dec.seasonNumber,
      hash: dec.hash,
      inventor: dec.inventor,
      tier: types.Tier.fromDecoded(dec.tier),
      isDiscovered: dec.isDiscovered,
      numberOfTimesCreated: dec.numberOfTimesCreated,
      numberOfRewards: dec.numberOfRewards,
      cost: dec.cost,
      elementsRequired: dec.elementsRequired,
      name: dec.name,
      padding: new Uint8Array(
        dec.padding.buffer,
        dec.padding.byteOffset,
        dec.padding.length
      ),
    })
  }

  toJSON(): ElementJSON {
    return {
      bump: this.bump,
      seasonNumber: this.seasonNumber,
      hash: this.hash,
      inventor: this.inventor.toString(),
      tier: this.tier.toJSON(),
      isDiscovered: this.isDiscovered,
      numberOfTimesCreated: this.numberOfTimesCreated.toString(),
      numberOfRewards: this.numberOfRewards,
      cost: this.cost.toString(),
      elementsRequired: this.elementsRequired.map((item) => item.toString()),
      name: this.name,
      padding: Array.from(this.padding.values()),
    }
  }

  static fromJSON(obj: ElementJSON): Element {
    return new Element({
      bump: obj.bump,
      seasonNumber: obj.seasonNumber,
      hash: obj.hash,
      inventor: new PublicKey(obj.inventor),
      tier: types.Tier.fromJSON(obj.tier),
      isDiscovered: obj.isDiscovered,
      numberOfTimesCreated: new BN(obj.numberOfTimesCreated),
      numberOfRewards: obj.numberOfRewards,
      cost: new BN(obj.cost),
      elementsRequired: obj.elementsRequired.map((item) => new PublicKey(item)),
      name: obj.name,
      padding: Uint8Array.from(obj.padding),
    })
  }
}
