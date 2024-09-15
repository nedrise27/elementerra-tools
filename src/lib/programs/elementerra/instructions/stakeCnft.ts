import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface StakeCnftArgs {
  crystalTier: types.CrystalTierKind
  root: Array<number>
  dataHash: Array<number>
  creatorHash: Array<number>
  nonce: BN
  index: number
}

export interface StakeCnftAccounts {
  associatedTokenProgram: PublicKey
  tokenProgram: PublicKey
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  programSigner: PublicKey
  escrowCnft: PublicKey
  nftStakeProof: PublicKey
  crystalTreeAuthority: PublicKey
  crystalMerkleTree: PublicKey
  crystalLeafOwner: PublicKey
  crystalLeafDelegate: PublicKey
  bubblegumSigner: PublicKey
  metaplexTokenMetadataProgram: PublicKey
  bubblegumProgram: PublicKey
  compressionProgram: PublicKey
  logWrapper: PublicKey
}

export const layout = borsh.struct([
  types.CrystalTier.layout("crystalTier"),
  borsh.array(borsh.u8(), 32, "root"),
  borsh.array(borsh.u8(), 32, "dataHash"),
  borsh.array(borsh.u8(), 32, "creatorHash"),
  borsh.u64("nonce"),
  borsh.u32("index"),
])

export function stakeCnft(
  args: StakeCnftArgs,
  accounts: StakeCnftAccounts,
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
    { pubkey: accounts.programSigner, isSigner: false, isWritable: true },
    { pubkey: accounts.escrowCnft, isSigner: false, isWritable: true },
    { pubkey: accounts.nftStakeProof, isSigner: false, isWritable: true },
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
  const identifier = Buffer.from([3, 11, 52, 96, 198, 170, 49, 220])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      crystalTier: args.crystalTier.toEncodable(),
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
