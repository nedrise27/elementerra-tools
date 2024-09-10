import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface InitSeasonArgs {
  seasonNumber: number
  totalNumberOfElements: number
}

export interface InitSeasonAccounts {
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  season: PublicKey
}

export const layout = borsh.struct([
  borsh.u8("seasonNumber"),
  borsh.u16("totalNumberOfElements"),
])

export function initSeason(
  args: InitSeasonArgs,
  accounts: InitSeasonAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.season, isSigner: false, isWritable: true },
  ]
  const identifier = Buffer.from([179, 47, 101, 197, 114, 97, 174, 98])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      seasonNumber: args.seasonNumber,
      totalNumberOfElements: args.totalNumberOfElements,
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
