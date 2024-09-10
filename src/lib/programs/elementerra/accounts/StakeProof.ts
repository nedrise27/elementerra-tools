import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface StakeProofFields {
  bump: number
  seasonNumber: number
  authority: PublicKey
  nftMint: PublicKey
  stakeableCollection: PublicKey
  lastClaimed: BN
}

export interface StakeProofJSON {
  bump: number
  seasonNumber: number
  authority: string
  nftMint: string
  stakeableCollection: string
  lastClaimed: string
}

/** PDA ["staked_", season_number, nft mint pubkey] */
export class StakeProof {
  readonly bump: number
  readonly seasonNumber: number
  readonly authority: PublicKey
  readonly nftMint: PublicKey
  readonly stakeableCollection: PublicKey
  readonly lastClaimed: BN

  static readonly discriminator = Buffer.from([
    101, 170, 227, 31, 200, 220, 62, 159,
  ])

  static readonly layout = borsh.struct([
    borsh.u8("bump"),
    borsh.u8("seasonNumber"),
    borsh.publicKey("authority"),
    borsh.publicKey("nftMint"),
    borsh.publicKey("stakeableCollection"),
    borsh.i64("lastClaimed"),
  ])

  constructor(fields: StakeProofFields) {
    this.bump = fields.bump
    this.seasonNumber = fields.seasonNumber
    this.authority = fields.authority
    this.nftMint = fields.nftMint
    this.stakeableCollection = fields.stakeableCollection
    this.lastClaimed = fields.lastClaimed
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<StakeProof | null> {
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
  ): Promise<Array<StakeProof | null>> {
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

  static decode(data: Buffer): StakeProof {
    if (!data.slice(0, 8).equals(StakeProof.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = StakeProof.layout.decode(data.slice(8))

    return new StakeProof({
      bump: dec.bump,
      seasonNumber: dec.seasonNumber,
      authority: dec.authority,
      nftMint: dec.nftMint,
      stakeableCollection: dec.stakeableCollection,
      lastClaimed: dec.lastClaimed,
    })
  }

  toJSON(): StakeProofJSON {
    return {
      bump: this.bump,
      seasonNumber: this.seasonNumber,
      authority: this.authority.toString(),
      nftMint: this.nftMint.toString(),
      stakeableCollection: this.stakeableCollection.toString(),
      lastClaimed: this.lastClaimed.toString(),
    }
  }

  static fromJSON(obj: StakeProofJSON): StakeProof {
    return new StakeProof({
      bump: obj.bump,
      seasonNumber: obj.seasonNumber,
      authority: new PublicKey(obj.authority),
      nftMint: new PublicKey(obj.nftMint),
      stakeableCollection: new PublicKey(obj.stakeableCollection),
      lastClaimed: new BN(obj.lastClaimed),
    })
  }
}
