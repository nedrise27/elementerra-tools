import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface StakeMerkleNftArgs {
  merkleProof: Array<Array<number>>
}

export interface StakeMerkleNftAccounts {
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  season: PublicKey
  stakeableCollection: PublicKey
  nftMint: PublicKey
  nftToken: PublicKey
  stakeProof: PublicKey
}

export const layout = borsh.struct([
  borsh.vec(borsh.array(borsh.u8(), 32), "merkleProof"),
])

export function stakeMerkleNft(
  args: StakeMerkleNftArgs,
  accounts: StakeMerkleNftAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.season, isSigner: false, isWritable: true },
    {
      pubkey: accounts.stakeableCollection,
      isSigner: false,
      isWritable: false,
    },
    { pubkey: accounts.nftMint, isSigner: false, isWritable: false },
    { pubkey: accounts.nftToken, isSigner: false, isWritable: false },
    { pubkey: accounts.stakeProof, isSigner: false, isWritable: true },
  ]
  const identifier = Buffer.from([52, 236, 58, 253, 33, 23, 21, 23])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      merkleProof: args.merkleProof,
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
