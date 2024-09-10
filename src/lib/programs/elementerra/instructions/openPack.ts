import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface OpenPackArgs {
  pack: types.TierKind
  root: Array<number>
  dataHash: Array<number>
  creatorHash: Array<number>
  nonce: BN
  index: number
}

export interface OpenPackAccounts {
  associatedTokenProgram: PublicKey
  tokenProgram: PublicKey
  systemProgram: PublicKey
  rent: PublicKey
  slots: PublicKey
  authority: PublicKey
  programSigner: PublicKey
  solReceiver: PublicKey
  season: PublicKey
  player: PublicKey
  packTreeAuthority: PublicKey
  packMerkleTree: PublicKey
  packLeafOwner: PublicKey
  packLeafDelegate: PublicKey
  crystalCollectionMint: PublicKey
  crystalCollectionMetadata: PublicKey
  crystalCollectionMasterEdition: PublicKey
  bubblegumSigner: PublicKey
  metaplexTokenMetadataProgram: PublicKey
  bubblegumProgram: PublicKey
  compressionProgram: PublicKey
  logWrapper: PublicKey
  elementumMint: PublicKey
  userTokenAccount: PublicKey
}

export const layout = borsh.struct([
  types.Tier.layout("pack"),
  borsh.array(borsh.u8(), 32, "root"),
  borsh.array(borsh.u8(), 32, "dataHash"),
  borsh.array(borsh.u8(), 32, "creatorHash"),
  borsh.u64("nonce"),
  borsh.u32("index"),
])

export function openPack(
  args: OpenPackArgs,
  accounts: OpenPackAccounts,
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
    { pubkey: accounts.slots, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.programSigner, isSigner: false, isWritable: false },
    { pubkey: accounts.solReceiver, isSigner: false, isWritable: true },
    { pubkey: accounts.season, isSigner: false, isWritable: true },
    { pubkey: accounts.player, isSigner: false, isWritable: true },
    { pubkey: accounts.packTreeAuthority, isSigner: false, isWritable: true },
    { pubkey: accounts.packMerkleTree, isSigner: false, isWritable: true },
    { pubkey: accounts.packLeafOwner, isSigner: false, isWritable: false },
    { pubkey: accounts.packLeafDelegate, isSigner: false, isWritable: false },
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
    { pubkey: accounts.elementumMint, isSigner: false, isWritable: true },
    { pubkey: accounts.userTokenAccount, isSigner: false, isWritable: true },
  ]
  const identifier = Buffer.from([75, 203, 144, 65, 63, 253, 103, 85])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      pack: args.pack.toEncodable(),
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
