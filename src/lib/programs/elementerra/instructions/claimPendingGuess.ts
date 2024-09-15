import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface ClaimPendingGuessAccounts {
  associatedTokenProgram: PublicKey
  tokenProgram: PublicKey
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  programSigner: PublicKey
  solVault: PublicKey
  solReceiver: PublicKey
  season: PublicKey
  player: PublicKey
  potentialInventedElement: PublicKey
  pendingGuess: PublicKey
  guess: PublicKey
  packTreeAuthority: PublicKey
  packMerkleTree: PublicKey
  packLeafOwner: PublicKey
  packLeafDelegate: PublicKey
  packCollectionMint: PublicKey
  packCollectionMetadata: PublicKey
  packCollectionMasterEdition: PublicKey
  metaplexTokenMetadataProgram: PublicKey
  treeAuthority: PublicKey
  bubblegumSigner: PublicKey
  merkleTree: PublicKey
  leafOwner: PublicKey
  leafDelegate: PublicKey
  collectionMint: PublicKey
  collectionMetadata: PublicKey
  collectionMasterEdition: PublicKey
  bubblegumProgram: PublicKey
  compressionProgram: PublicKey
  logWrapper: PublicKey
}

export function claimPendingGuess(
  accounts: ClaimPendingGuessAccounts,
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
    { pubkey: accounts.solVault, isSigner: false, isWritable: true },
    { pubkey: accounts.solReceiver, isSigner: false, isWritable: true },
    { pubkey: accounts.season, isSigner: false, isWritable: true },
    { pubkey: accounts.player, isSigner: false, isWritable: true },
    {
      pubkey: accounts.potentialInventedElement,
      isSigner: false,
      isWritable: true,
    },
    { pubkey: accounts.pendingGuess, isSigner: false, isWritable: true },
    { pubkey: accounts.guess, isSigner: false, isWritable: true },
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
    {
      pubkey: accounts.metaplexTokenMetadataProgram,
      isSigner: false,
      isWritable: false,
    },
    { pubkey: accounts.treeAuthority, isSigner: false, isWritable: true },
    { pubkey: accounts.bubblegumSigner, isSigner: false, isWritable: false },
    { pubkey: accounts.merkleTree, isSigner: false, isWritable: true },
    { pubkey: accounts.leafOwner, isSigner: false, isWritable: false },
    { pubkey: accounts.leafDelegate, isSigner: false, isWritable: false },
    { pubkey: accounts.collectionMint, isSigner: false, isWritable: true },
    { pubkey: accounts.collectionMetadata, isSigner: false, isWritable: true },
    {
      pubkey: accounts.collectionMasterEdition,
      isSigner: false,
      isWritable: true,
    },
    { pubkey: accounts.bubblegumProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.compressionProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.logWrapper, isSigner: false, isWritable: false },
  ]
  const identifier = Buffer.from([101, 180, 221, 66, 136, 22, 44, 153])
  const data = identifier
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
