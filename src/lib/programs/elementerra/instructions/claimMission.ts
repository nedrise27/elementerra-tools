import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface ClaimMissionAccounts {
  tokenProgram: PublicKey
  systemProgram: PublicKey
  authority: PublicKey
  programSigner: PublicKey
  season: PublicKey
  player: PublicKey
  playerMission: PublicKey
  playerMissionStats: PublicKey
  mission: PublicKey
}

export function claimMission(
  accounts: ClaimMissionAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.tokenProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.programSigner, isSigner: false, isWritable: false },
    { pubkey: accounts.season, isSigner: false, isWritable: false },
    { pubkey: accounts.player, isSigner: false, isWritable: false },
    { pubkey: accounts.playerMission, isSigner: false, isWritable: true },
    { pubkey: accounts.playerMissionStats, isSigner: false, isWritable: true },
    { pubkey: accounts.mission, isSigner: false, isWritable: true },
  ]
  const identifier = Buffer.from([237, 47, 1, 198, 105, 134, 201, 148])
  const data = identifier
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
