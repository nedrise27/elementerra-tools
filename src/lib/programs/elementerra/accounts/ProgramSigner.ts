import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface ProgramSignerFields {
  bump: number
}

export interface ProgramSignerJSON {
  bump: number
}

/** PDA ["signer_"] */
export class ProgramSigner {
  readonly bump: number

  static readonly discriminator = Buffer.from([
    72, 117, 46, 68, 53, 238, 87, 186,
  ])

  static readonly layout = borsh.struct([borsh.u8("bump")])

  constructor(fields: ProgramSignerFields) {
    this.bump = fields.bump
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<ProgramSigner | null> {
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
  ): Promise<Array<ProgramSigner | null>> {
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

  static decode(data: Buffer): ProgramSigner {
    if (!data.slice(0, 8).equals(ProgramSigner.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = ProgramSigner.layout.decode(data.slice(8))

    return new ProgramSigner({
      bump: dec.bump,
    })
  }

  toJSON(): ProgramSignerJSON {
    return {
      bump: this.bump,
    }
  }

  static fromJSON(obj: ProgramSignerJSON): ProgramSigner {
    return new ProgramSigner({
      bump: obj.bump,
    })
  }
}
