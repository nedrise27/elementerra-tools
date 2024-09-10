import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface NftLevelAttributesFields {
  bump: number
  nftMint: PublicKey
  level: number
  lastUpdated: BN
}

export interface NftLevelAttributesJSON {
  bump: number
  nftMint: string
  level: number
  lastUpdated: string
}

export class NftLevelAttributes {
  readonly bump: number
  readonly nftMint: PublicKey
  readonly level: number
  readonly lastUpdated: BN

  static readonly discriminator = Buffer.from([
    211, 107, 203, 16, 118, 29, 31, 192,
  ])

  static readonly layout = borsh.struct([
    borsh.u8("bump"),
    borsh.publicKey("nftMint"),
    borsh.u16("level"),
    borsh.i64("lastUpdated"),
  ])

  constructor(fields: NftLevelAttributesFields) {
    this.bump = fields.bump
    this.nftMint = fields.nftMint
    this.level = fields.level
    this.lastUpdated = fields.lastUpdated
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<NftLevelAttributes | null> {
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
  ): Promise<Array<NftLevelAttributes | null>> {
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

  static decode(data: Buffer): NftLevelAttributes {
    if (!data.slice(0, 8).equals(NftLevelAttributes.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = NftLevelAttributes.layout.decode(data.slice(8))

    return new NftLevelAttributes({
      bump: dec.bump,
      nftMint: dec.nftMint,
      level: dec.level,
      lastUpdated: dec.lastUpdated,
    })
  }

  toJSON(): NftLevelAttributesJSON {
    return {
      bump: this.bump,
      nftMint: this.nftMint.toString(),
      level: this.level,
      lastUpdated: this.lastUpdated.toString(),
    }
  }

  static fromJSON(obj: NftLevelAttributesJSON): NftLevelAttributes {
    return new NftLevelAttributes({
      bump: obj.bump,
      nftMint: new PublicKey(obj.nftMint),
      level: obj.level,
      lastUpdated: new BN(obj.lastUpdated),
    })
  }
}
