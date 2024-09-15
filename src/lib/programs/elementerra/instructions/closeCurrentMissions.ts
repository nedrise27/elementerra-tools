import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface CloseCurrentMissionsAccounts {
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  season: PublicKey
  currentMissions: PublicKey
}

export function closeCurrentMissions(
  accounts: CloseCurrentMissionsAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: false },
    { pubkey: accounts.season, isSigner: false, isWritable: true },
    { pubkey: accounts.currentMissions, isSigner: false, isWritable: true },
  ]
  const identifier = Buffer.from([142, 251, 69, 72, 108, 226, 230, 3])
  const data = identifier
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
