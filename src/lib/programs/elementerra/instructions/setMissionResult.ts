import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface SetMissionResultAccounts {
  authority: PublicKey
  season: PublicKey
  player: PublicKey
  mission: PublicKey
  playerMission: PublicKey
  randomnessAccountData: PublicKey
}

export function setMissionResult(
  accounts: SetMissionResultAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.authority, isSigner: false, isWritable: true },
    { pubkey: accounts.season, isSigner: false, isWritable: true },
    { pubkey: accounts.player, isSigner: false, isWritable: true },
    { pubkey: accounts.mission, isSigner: false, isWritable: false },
    { pubkey: accounts.playerMission, isSigner: false, isWritable: true },
    {
      pubkey: accounts.randomnessAccountData,
      isSigner: false,
      isWritable: false,
    },
  ]
  const identifier = Buffer.from([56, 33, 224, 66, 158, 229, 151, 161])
  const data = identifier
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
