import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface AddToPendingGuessArgs {
  element: types.ElementNameKind
  root: Array<number>
  dataHash: Array<number>
  creatorHash: Array<number>
  nonce: BN
  index: number
}

export interface AddToPendingGuessAccounts {
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  programSigner: PublicKey
  season: PublicKey
  player: PublicKey
  pendingGuess: PublicKey
  element: PublicKey
  treeAuthority: PublicKey
  bubblegumSigner: PublicKey
  merkleTree: PublicKey
  leafOwner: PublicKey
  leafDelegate: PublicKey
  metaplexTokenMetadataProgram: PublicKey
  bubblegumProgram: PublicKey
  compressionProgram: PublicKey
  logWrapper: PublicKey
}

export const layout = borsh.struct([
  types.ElementName.layout("element"),
  borsh.array(borsh.u8(), 32, "root"),
  borsh.array(borsh.u8(), 32, "dataHash"),
  borsh.array(borsh.u8(), 32, "creatorHash"),
  borsh.u64("nonce"),
  borsh.u32("index"),
])

export function addToPendingGuess(
  args: AddToPendingGuessArgs,
  accounts: AddToPendingGuessAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.programSigner, isSigner: false, isWritable: false },
    { pubkey: accounts.season, isSigner: false, isWritable: true },
    { pubkey: accounts.player, isSigner: false, isWritable: true },
    { pubkey: accounts.pendingGuess, isSigner: false, isWritable: true },
    { pubkey: accounts.element, isSigner: false, isWritable: false },
    { pubkey: accounts.treeAuthority, isSigner: false, isWritable: true },
    { pubkey: accounts.bubblegumSigner, isSigner: false, isWritable: false },
    { pubkey: accounts.merkleTree, isSigner: false, isWritable: true },
    { pubkey: accounts.leafOwner, isSigner: false, isWritable: false },
    { pubkey: accounts.leafDelegate, isSigner: false, isWritable: false },
    {
      pubkey: accounts.metaplexTokenMetadataProgram,
      isSigner: false,
      isWritable: false,
    },
    { pubkey: accounts.bubblegumProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.compressionProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.logWrapper, isSigner: false, isWritable: false },
  ]
  const identifier = Buffer.from([154, 147, 62, 165, 130, 105, 76, 220])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      element: args.element.toEncodable(),
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
