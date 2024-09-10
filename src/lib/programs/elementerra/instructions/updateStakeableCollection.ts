import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface UpdateStakeableCollectionArgs {
  isEnabled: boolean
}

export interface UpdateStakeableCollectionAccounts {
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  stakeableCollection: PublicKey
}

export const layout = borsh.struct([borsh.bool("isEnabled")])

export function updateStakeableCollection(
  args: UpdateStakeableCollectionArgs,
  accounts: UpdateStakeableCollectionAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: false },
    { pubkey: accounts.stakeableCollection, isSigner: false, isWritable: true },
  ]
  const identifier = Buffer.from([0, 111, 28, 63, 187, 161, 246, 9])
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
