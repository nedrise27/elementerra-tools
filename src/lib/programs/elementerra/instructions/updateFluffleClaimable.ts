import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface UpdateFluffleClaimableArgs {
  isEnabled: boolean
}

export interface UpdateFluffleClaimableAccounts {
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  fluffleClaimable: PublicKey
}

export const layout = borsh.struct([borsh.bool("isEnabled")])

export function updateFluffleClaimable(
  args: UpdateFluffleClaimableArgs,
  accounts: UpdateFluffleClaimableAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: false },
    { pubkey: accounts.fluffleClaimable, isSigner: false, isWritable: true },
  ]
  const identifier = Buffer.from([38, 224, 117, 144, 122, 144, 37, 114])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      isEnabled: args.isEnabled,
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
