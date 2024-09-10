import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface FluffleClaimableFields {
  merkleRoot: PublicKey
  isEnabled: boolean
  totalClaimed: BN
}

export interface FluffleClaimableJSON {
  merkleRoot: string
  isEnabled: boolean
  totalClaimed: string
}

export class FluffleClaimable {
  readonly merkleRoot: PublicKey
  readonly isEnabled: boolean
  readonly totalClaimed: BN

  static readonly discriminator = Buffer.from([6, 0, 127, 32, 6, 103, 78, 65])

  static readonly layout = borsh.struct([
    borsh.publicKey("merkleRoot"),
    borsh.bool("isEnabled"),
    borsh.u64("totalClaimed"),
  ])

  constructor(fields: FluffleClaimableFields) {
    this.merkleRoot = fields.merkleRoot
    this.isEnabled = fields.isEnabled
    this.totalClaimed = fields.totalClaimed
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<FluffleClaimable | null> {
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
  ): Promise<Array<FluffleClaimable | null>> {
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

  static decode(data: Buffer): FluffleClaimable {
    if (!data.slice(0, 8).equals(FluffleClaimable.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = FluffleClaimable.layout.decode(data.slice(8))

    return new FluffleClaimable({
      merkleRoot: dec.merkleRoot,
      isEnabled: dec.isEnabled,
      totalClaimed: dec.totalClaimed,
    })
  }

  toJSON(): FluffleClaimableJSON {
    return {
      merkleRoot: this.merkleRoot.toString(),
      isEnabled: this.isEnabled,
      totalClaimed: this.totalClaimed.toString(),
    }
  }

  static fromJSON(obj: FluffleClaimableJSON): FluffleClaimable {
    return new FluffleClaimable({
      merkleRoot: new PublicKey(obj.merkleRoot),
      isEnabled: obj.isEnabled,
      totalClaimed: new BN(obj.totalClaimed),
    })
  }
}
