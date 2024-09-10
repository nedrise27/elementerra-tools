import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface NftStakeProofFields {
  bump: number
  authority: PublicKey
  nftMint: PublicKey
  lastClaimed: BN
  stakedLevel: number
  stakedLevelInitialized: boolean
}

export interface NftStakeProofJSON {
  bump: number
  authority: string
  nftMint: string
  lastClaimed: string
  stakedLevel: number
  stakedLevelInitialized: boolean
}

/** PDA ["nft_staked_", nft mint pubkey] */
export class NftStakeProof {
  readonly bump: number
  readonly authority: PublicKey
  readonly nftMint: PublicKey
  readonly lastClaimed: BN
  readonly stakedLevel: number
  readonly stakedLevelInitialized: boolean

  static readonly discriminator = Buffer.from([
    30, 244, 104, 134, 119, 107, 108, 92,
  ])

  static readonly layout = borsh.struct([
    borsh.u8("bump"),
    borsh.publicKey("authority"),
    borsh.publicKey("nftMint"),
    borsh.i64("lastClaimed"),
    borsh.u16("stakedLevel"),
    borsh.bool("stakedLevelInitialized"),
  ])

  constructor(fields: NftStakeProofFields) {
    this.bump = fields.bump
    this.authority = fields.authority
    this.nftMint = fields.nftMint
    this.lastClaimed = fields.lastClaimed
    this.stakedLevel = fields.stakedLevel
    this.stakedLevelInitialized = fields.stakedLevelInitialized
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<NftStakeProof | null> {
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
  ): Promise<Array<NftStakeProof | null>> {
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

  static decode(data: Buffer): NftStakeProof {
    if (!data.slice(0, 8).equals(NftStakeProof.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = NftStakeProof.layout.decode(data.slice(8))

    return new NftStakeProof({
      bump: dec.bump,
      authority: dec.authority,
      nftMint: dec.nftMint,
      lastClaimed: dec.lastClaimed,
      stakedLevel: dec.stakedLevel,
      stakedLevelInitialized: dec.stakedLevelInitialized,
    })
  }

  toJSON(): NftStakeProofJSON {
    return {
      bump: this.bump,
      authority: this.authority.toString(),
      nftMint: this.nftMint.toString(),
      lastClaimed: this.lastClaimed.toString(),
      stakedLevel: this.stakedLevel,
      stakedLevelInitialized: this.stakedLevelInitialized,
    }
  }

  static fromJSON(obj: NftStakeProofJSON): NftStakeProof {
    return new NftStakeProof({
      bump: obj.bump,
      authority: new PublicKey(obj.authority),
      nftMint: new PublicKey(obj.nftMint),
      lastClaimed: new BN(obj.lastClaimed),
      stakedLevel: obj.stakedLevel,
      stakedLevelInitialized: obj.stakedLevelInitialized,
    })
  }
}
