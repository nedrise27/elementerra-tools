import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface FluffleClaimedFields {
  bump: number
  authority: PublicKey
  claimed: boolean
}

export interface FluffleClaimedJSON {
  bump: number
  authority: string
  claimed: boolean
}

/** PDA ["fluffle_claimed_", wallet pub key, claimable pub key ] */
export class FluffleClaimed {
  readonly bump: number
  readonly authority: PublicKey
  readonly claimed: boolean

  static readonly discriminator = Buffer.from([
    52, 211, 248, 223, 202, 232, 76, 197,
  ])

  static readonly layout = borsh.struct([
    borsh.u8("bump"),
    borsh.publicKey("authority"),
    borsh.bool("claimed"),
  ])

  constructor(fields: FluffleClaimedFields) {
    this.bump = fields.bump
    this.authority = fields.authority
    this.claimed = fields.claimed
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<FluffleClaimed | null> {
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
  ): Promise<Array<FluffleClaimed | null>> {
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

  static decode(data: Buffer): FluffleClaimed {
    if (!data.slice(0, 8).equals(FluffleClaimed.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = FluffleClaimed.layout.decode(data.slice(8))

    return new FluffleClaimed({
      bump: dec.bump,
      authority: dec.authority,
      claimed: dec.claimed,
    })
  }

  toJSON(): FluffleClaimedJSON {
    return {
      bump: this.bump,
      authority: this.authority.toString(),
      claimed: this.claimed,
    }
  }

  static fromJSON(obj: FluffleClaimedJSON): FluffleClaimed {
    return new FluffleClaimed({
      bump: obj.bump,
      authority: new PublicKey(obj.authority),
      claimed: obj.claimed,
    })
  }
}
