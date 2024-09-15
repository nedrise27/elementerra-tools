import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface AcceptMissionAccounts {
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  season: PublicKey
  currentMissions: PublicKey
  player: PublicKey
  mission: PublicKey
  playerMission: PublicKey
  playerMissionsStats: PublicKey
}

export function acceptMission(
  accounts: AcceptMissionAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.season, isSigner: false, isWritable: false },
    { pubkey: accounts.currentMissions, isSigner: false, isWritable: false },
    { pubkey: accounts.player, isSigner: false, isWritable: false },
    { pubkey: accounts.mission, isSigner: false, isWritable: true },
    { pubkey: accounts.playerMission, isSigner: false, isWritable: true },
    { pubkey: accounts.playerMissionsStats, isSigner: false, isWritable: true },
  ]
  const identifier = Buffer.from([8, 170, 82, 238, 37, 32, 184, 23])
  const data = identifier
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
