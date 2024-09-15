import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface MigrateCrystalAccounts {
  associatedTokenProgram: PublicKey
  tokenProgram: PublicKey
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  programSigner: PublicKey
  crystalMetaplexMetadataAccount: PublicKey
  crystalNftMint: PublicKey
  crystalNftToken: PublicKey
  crystalTreeAuthority: PublicKey
  crystalMerkleTree: PublicKey
  crystalLeafOwner: PublicKey
  crystalLeafDelegate: PublicKey
  crystalCollectionMint: PublicKey
  crystalCollectionMetadata: PublicKey
  crystalCollectionMasterEdition: PublicKey
  bubblegumSigner: PublicKey
  metaplexTokenMetadataProgram: PublicKey
  bubblegumProgram: PublicKey
  compressionProgram: PublicKey
  logWrapper: PublicKey
}

export function migrateCrystal(
  accounts: MigrateCrystalAccounts,
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
      pubkey: accounts.crystalMetaplexMetadataAccount,
      isSigner: false,
      isWritable: true,
    },
    { pubkey: accounts.crystalNftMint, isSigner: false, isWritable: true },
    { pubkey: accounts.crystalNftToken, isSigner: false, isWritable: true },
    {
      pubkey: accounts.crystalTreeAuthority,
      isSigner: false,
      isWritable: true,
    },
    { pubkey: accounts.crystalMerkleTree, isSigner: false, isWritable: true },
    { pubkey: accounts.crystalLeafOwner, isSigner: false, isWritable: false },
    {
      pubkey: accounts.crystalLeafDelegate,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: accounts.crystalCollectionMint,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: accounts.crystalCollectionMetadata,
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: accounts.crystalCollectionMasterEdition,
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
  const identifier = Buffer.from([115, 228, 198, 109, 218, 160, 170, 186])
  const data = identifier
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
