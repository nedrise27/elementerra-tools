import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface MigratePackAccounts {
  associatedTokenProgram: PublicKey
  tokenProgram: PublicKey
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  programSigner: PublicKey
  packMetaplexMetadataAccount: PublicKey
  packNftMint: PublicKey
  packNftToken: PublicKey
  packTreeAuthority: PublicKey
  packMerkleTree: PublicKey
  packLeafOwner: PublicKey
  packLeafDelegate: PublicKey
  packCollectionMint: PublicKey
  packCollectionMetadata: PublicKey
  packCollectionMasterEdition: PublicKey
  bubblegumSigner: PublicKey
  metaplexTokenMetadataProgram: PublicKey
  bubblegumProgram: PublicKey
  compressionProgram: PublicKey
  logWrapper: PublicKey
}

export function migratePack(
  accounts: MigratePackAccounts,
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
    {
      pubkey: accounts.packMetaplexMetadataAccount,
      isSigner: false,
      isWritable: true,
    },
    { pubkey: accounts.packNftMint, isSigner: false, isWritable: true },
    { pubkey: accounts.packNftToken, isSigner: false, isWritable: true },
    { pubkey: accounts.packTreeAuthority, isSigner: false, isWritable: true },
    { pubkey: accounts.packMerkleTree, isSigner: false, isWritable: true },
    { pubkey: accounts.packLeafOwner, isSigner: false, isWritable: false },
    { pubkey: accounts.packLeafDelegate, isSigner: false, isWritable: false },
    { pubkey: accounts.packCollectionMint, isSigner: false, isWritable: false },
    {
      pubkey: accounts.packCollectionMetadata,
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: accounts.packCollectionMasterEdition,
      isSigner: false,
      isWritable: true,
    },
    { pubkey: accounts.bubblegumSigner, isSigner: false, isWritable: false },
    {
      pubkey: accounts.metaplexTokenMetadataProgram,
      isSigner: false,
      isWritable: false,
    },
    { pubkey: accounts.bubblegumProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.compressionProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.logWrapper, isSigner: false, isWritable: false },
  ]
  const identifier = Buffer.from([139, 116, 95, 125, 36, 208, 226, 191])
  const data = identifier
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
