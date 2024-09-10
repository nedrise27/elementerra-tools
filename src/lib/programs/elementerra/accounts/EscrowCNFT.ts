import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface EscrowCNFTFields {
  bump: number
  assetId: Array<number>
}

export interface EscrowCNFTJSON {
  bump: number
  assetId: Array<number>
}

/** PDA ["escrow_crystal", data_hash] */
export class EscrowCNFT {
  readonly bump: number
  readonly assetId: Array<number>

  static readonly discriminator = Buffer.from([
    106, 233, 56, 254, 134, 115, 28, 216,
  ])

  static readonly layout = borsh.struct([
    borsh.u8("bump"),
    borsh.array(borsh.u8(), 32, "assetId"),
  ])

  constructor(fields: EscrowCNFTFields) {
    this.bump = fields.bump
    this.assetId = fields.assetId
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<EscrowCNFT | null> {
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
  ): Promise<Array<EscrowCNFT | null>> {
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

  static decode(data: Buffer): EscrowCNFT {
    if (!data.slice(0, 8).equals(EscrowCNFT.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = EscrowCNFT.layout.decode(data.slice(8))

    return new EscrowCNFT({
      bump: dec.bump,
      assetId: dec.assetId,
    })
  }

  toJSON(): EscrowCNFTJSON {
    return {
      bump: this.bump,
      assetId: this.assetId,
    }
  }

  static fromJSON(obj: EscrowCNFTJSON): EscrowCNFT {
    return new EscrowCNFT({
      bump: obj.bump,
      assetId: obj.assetId,
    })
  }
}
