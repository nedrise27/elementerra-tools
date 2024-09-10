import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface InitFluffleClaimableArgs {
  merkleRoot: Array<number>
  isEnabled: boolean
}

export interface InitFluffleClaimableAccounts {
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  fluffleClaimable: PublicKey
}

export const layout = borsh.struct([
  borsh.array(borsh.u8(), 32, "merkleRoot"),
  borsh.bool("isEnabled"),
])

export function initFluffleClaimable(
  args: InitFluffleClaimableArgs,
  accounts: InitFluffleClaimableAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.fluffleClaimable, isSigner: true, isWritable: true },
  ]
  const identifier = Buffer.from([237, 41, 202, 68, 223, 254, 195, 25])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      merkleRoot: args.merkleRoot,
      isEnabled: args.isEnabled,
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
