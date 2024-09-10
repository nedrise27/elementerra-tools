import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface UnstakeElementerraAccounts {
  associatedTokenProgram: PublicKey
  tokenProgram: PublicKey
  systemProgram: PublicKey
  rent: PublicKey
  instructionsSysvar: PublicKey
  authority: PublicKey
  programSigner: PublicKey
  nftStakeProof: PublicKey
  metaplexMetadataAccount: PublicKey
  nftMint: PublicKey
  nftToken: PublicKey
  nftEdition: PublicKey
  nftTokenRecord: PublicKey
  levelAttributes: PublicKey
  metaplexTokenMetadataProgram: PublicKey
  metaplexAuthRulesProgram: PublicKey
  authRules: PublicKey
  elementumMint: PublicKey
  stakingPool: PublicKey
  userTokenAccount: PublicKey
}

export function unstakeElementerra(
  accounts: UnstakeElementerraAccounts,
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
    { pubkey: accounts.instructionsSysvar, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.programSigner, isSigner: false, isWritable: false },
    { pubkey: accounts.nftStakeProof, isSigner: false, isWritable: true },
    {
      pubkey: accounts.metaplexMetadataAccount,
      isSigner: false,
      isWritable: true,
    },
    { pubkey: accounts.nftMint, isSigner: false, isWritable: false },
    { pubkey: accounts.nftToken, isSigner: false, isWritable: true },
    { pubkey: accounts.nftEdition, isSigner: false, isWritable: true },
    { pubkey: accounts.nftTokenRecord, isSigner: false, isWritable: true },
    { pubkey: accounts.levelAttributes, isSigner: false, isWritable: true },
    {
      pubkey: accounts.metaplexTokenMetadataProgram,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: accounts.metaplexAuthRulesProgram,
      isSigner: false,
      isWritable: false,
    },
    { pubkey: accounts.authRules, isSigner: false, isWritable: false },
    { pubkey: accounts.elementumMint, isSigner: false, isWritable: false },
    { pubkey: accounts.stakingPool, isSigner: false, isWritable: true },
    { pubkey: accounts.userTokenAccount, isSigner: false, isWritable: true },
  ]
  const identifier = Buffer.from([32, 47, 40, 80, 7, 124, 187, 235])
  const data = identifier
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
