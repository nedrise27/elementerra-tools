import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface ClaimAccounts {
  associatedTokenProgram: PublicKey
  tokenProgram: PublicKey
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  programSigner: PublicKey
  solReceiver: PublicKey
  season: PublicKey
  stakeableCollection: PublicKey
  stakeProof: PublicKey
  metaplexMetadataAccount: PublicKey
  nftMint: PublicKey
  nftToken: PublicKey
  elementumMint: PublicKey
  stakingPool: PublicKey
  userTokenAccount: PublicKey
}

export function claim(
  accounts: ClaimAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    {
      pubkey: accounts.associatedTokenProgram,
      isSigner: false,
      isWritable: false,
    },
    { pubkey: accounts.tokenProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.programSigner, isSigner: false, isWritable: false },
    { pubkey: accounts.solReceiver, isSigner: false, isWritable: true },
    { pubkey: accounts.season, isSigner: false, isWritable: true },
    { pubkey: accounts.stakeableCollection, isSigner: false, isWritable: true },
    { pubkey: accounts.stakeProof, isSigner: false, isWritable: true },
    {
      pubkey: accounts.metaplexMetadataAccount,
      isSigner: false,
      isWritable: false,
    },
    { pubkey: accounts.nftMint, isSigner: false, isWritable: false },
    { pubkey: accounts.nftToken, isSigner: false, isWritable: false },
    { pubkey: accounts.elementumMint, isSigner: false, isWritable: false },
    { pubkey: accounts.stakingPool, isSigner: false, isWritable: true },
    { pubkey: accounts.userTokenAccount, isSigner: false, isWritable: true },
  ]
  const identifier = Buffer.from([62, 198, 214, 193, 213, 159, 108, 210])
  const data = identifier
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
