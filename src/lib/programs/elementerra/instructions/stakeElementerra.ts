import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface StakeElementerraAccounts {
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
}

export function stakeElementerra(
  accounts: StakeElementerraAccounts,
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
  ]
  const identifier = Buffer.from([195, 30, 202, 171, 15, 196, 92, 230])
  const data = identifier
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
