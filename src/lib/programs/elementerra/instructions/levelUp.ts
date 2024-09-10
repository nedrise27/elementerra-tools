import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface LevelUpArgs {
  root: Array<number>
  dataHash: Array<number>
  creatorHash: Array<number>
  nonce: BN
  index: number
}

export interface LevelUpAccounts {
  associatedTokenProgram: PublicKey
  tokenProgram: PublicKey
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  programSigner: PublicKey
  season: PublicKey
  metaplexMetadataAccount: PublicKey
  nftMint: PublicKey
  nftToken: PublicKey
  element: PublicKey
  player: PublicKey
  levelAttributes: PublicKey
  elementumMint: PublicKey
  userTokenAccount: PublicKey
  packTreeAuthority: PublicKey
  packMerkleTree: PublicKey
  packLeafOwner: PublicKey
  packLeafDelegate: PublicKey
  packCollectionMint: PublicKey
  packCollectionMetadata: PublicKey
  packCollectionMasterEdition: PublicKey
  treeAuthority: PublicKey
  merkleTree: PublicKey
  leafOwner: PublicKey
  leafDelegate: PublicKey
  bubblegumSigner: PublicKey
  metaplexTokenMetadataProgram: PublicKey
  bubblegumProgram: PublicKey
  compressionProgram: PublicKey
  logWrapper: PublicKey
}

export const layout = borsh.struct([
  borsh.array(borsh.u8(), 32, "root"),
  borsh.array(borsh.u8(), 32, "dataHash"),
  borsh.array(borsh.u8(), 32, "creatorHash"),
  borsh.u64("nonce"),
  borsh.u32("index"),
])

export function levelUp(
  args: LevelUpArgs,
  accounts: LevelUpAccounts,
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
    { pubkey: accounts.season, isSigner: false, isWritable: false },
    {
      pubkey: accounts.metaplexMetadataAccount,
      isSigner: false,
      isWritable: false,
    },
    { pubkey: accounts.nftMint, isSigner: false, isWritable: false },
    { pubkey: accounts.nftToken, isSigner: false, isWritable: false },
    { pubkey: accounts.element, isSigner: false, isWritable: false },
    { pubkey: accounts.player, isSigner: false, isWritable: true },
    { pubkey: accounts.levelAttributes, isSigner: false, isWritable: true },
    { pubkey: accounts.elementumMint, isSigner: false, isWritable: true },
    { pubkey: accounts.userTokenAccount, isSigner: false, isWritable: true },
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
    { pubkey: accounts.treeAuthority, isSigner: false, isWritable: true },
    { pubkey: accounts.merkleTree, isSigner: false, isWritable: true },
    { pubkey: accounts.leafOwner, isSigner: false, isWritable: false },
    { pubkey: accounts.leafDelegate, isSigner: false, isWritable: false },
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
  const identifier = Buffer.from([128, 64, 197, 116, 226, 129, 119, 234])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      root: args.root,
      dataHash: args.dataHash,
      creatorHash: args.creatorHash,
      nonce: args.nonce,
      index: args.index,
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
