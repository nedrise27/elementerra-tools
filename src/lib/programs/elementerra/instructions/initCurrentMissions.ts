import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface InitCurrentMissionsArgs {
  startTime: BN
  endTime: BN
  missions: Array<PublicKey>
}

export interface InitCurrentMissionsAccounts {
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  season: PublicKey
  currentMissions: PublicKey
}

export const layout = borsh.struct([
  borsh.i64("startTime"),
  borsh.i64("endTime"),
  borsh.vec(borsh.publicKey(), "missions"),
])

export function initCurrentMissions(
  args: InitCurrentMissionsArgs,
  accounts: InitCurrentMissionsAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.season, isSigner: false, isWritable: false },
    { pubkey: accounts.currentMissions, isSigner: false, isWritable: true },
  ]
  const identifier = Buffer.from([187, 74, 242, 4, 65, 199, 39, 214])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      startTime: args.startTime,
      endTime: args.endTime,
      missions: args.missions,
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
