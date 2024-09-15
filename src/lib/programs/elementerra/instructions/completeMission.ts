import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface CompleteMissionArgs {
  pnftIndex: number
}

export interface CompleteMissionAccounts {
  tokenProgram: PublicKey
  associatedTokenProgram: PublicKey
  systemProgram: PublicKey
  authority: PublicKey
  season: PublicKey
  player: PublicKey
  programSigner: PublicKey
  mission: PublicKey
  playerMission: PublicKey
  playerMissionStats: PublicKey
  randomnessAccountData: PublicKey
}

export const layout = borsh.struct([borsh.u8("pnftIndex")])

export function completeMission(
  args: CompleteMissionArgs,
  accounts: CompleteMissionAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.tokenProgram, isSigner: false, isWritable: false },
    {
      pubkey: accounts.associatedTokenProgram,
      isSigner: false,
      isWritable: false,
    },
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.season, isSigner: false, isWritable: true },
    { pubkey: accounts.player, isSigner: false, isWritable: true },
    { pubkey: accounts.programSigner, isSigner: false, isWritable: false },
    { pubkey: accounts.mission, isSigner: false, isWritable: false },
    { pubkey: accounts.playerMission, isSigner: false, isWritable: true },
    { pubkey: accounts.playerMissionStats, isSigner: false, isWritable: true },
    {
      pubkey: accounts.randomnessAccountData,
      isSigner: false,
      isWritable: false,
    },
  ]
  const identifier = Buffer.from([241, 46, 91, 100, 221, 205, 31, 37])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      pnftIndex: args.pnftIndex,
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
