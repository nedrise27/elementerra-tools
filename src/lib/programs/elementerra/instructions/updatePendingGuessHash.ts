import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface UpdatePendingGuessHashArgs {
  hash: Array<number>
  user: PublicKey
}

export interface UpdatePendingGuessHashAccounts {
  systemProgram: PublicKey
  authority: PublicKey
  season: PublicKey
  player: PublicKey
  pendingGuess: PublicKey
  potentialInventedElement: PublicKey
  element1: PublicKey
  element2: PublicKey
  element3: PublicKey
  element4: PublicKey
}

export const layout = borsh.struct([
  borsh.array(borsh.u8(), 32, "hash"),
  borsh.publicKey("user"),
])

export function updatePendingGuessHash(
  args: UpdatePendingGuessHashArgs,
  accounts: UpdatePendingGuessHashAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.season, isSigner: false, isWritable: true },
    { pubkey: accounts.player, isSigner: false, isWritable: true },
    { pubkey: accounts.pendingGuess, isSigner: false, isWritable: true },
    {
      pubkey: accounts.potentialInventedElement,
      isSigner: false,
      isWritable: true,
    },
    { pubkey: accounts.element1, isSigner: false, isWritable: false },
    { pubkey: accounts.element2, isSigner: false, isWritable: false },
    { pubkey: accounts.element3, isSigner: false, isWritable: false },
    { pubkey: accounts.element4, isSigner: false, isWritable: false },
  ]
  const identifier = Buffer.from([88, 122, 71, 147, 255, 161, 210, 35])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      hash: args.hash,
      user: args.user,
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
