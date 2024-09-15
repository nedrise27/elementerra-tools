import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface StartMissionAccounts {
  associatedTokenProgram: PublicKey
  tokenProgram: PublicKey
  systemProgram: PublicKey
  authority: PublicKey
  season: PublicKey
  currentMissions: PublicKey
  player: PublicKey
  mission: PublicKey
  playerMission: PublicKey
  mint: PublicKey
  playerMissionAta: PublicKey
  randomnessAccountData: PublicKey
}

export function startMission(
  accounts: StartMissionAccounts,
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
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.season, isSigner: false, isWritable: false },
    { pubkey: accounts.currentMissions, isSigner: false, isWritable: false },
    { pubkey: accounts.player, isSigner: false, isWritable: false },
    { pubkey: accounts.mission, isSigner: false, isWritable: false },
    { pubkey: accounts.playerMission, isSigner: false, isWritable: true },
    { pubkey: accounts.mint, isSigner: false, isWritable: true },
    { pubkey: accounts.playerMissionAta, isSigner: false, isWritable: true },
    {
      pubkey: accounts.randomnessAccountData,
      isSigner: false,
      isWritable: false,
    },
  ]
  const identifier = Buffer.from([220, 224, 41, 25, 46, 134, 254, 157])
  const data = identifier
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
