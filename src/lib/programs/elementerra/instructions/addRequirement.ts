import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface AddRequirementArgs {
  params: types.AddRequirementParamsFields
}

export interface AddRequirementAccounts {
  systemProgram: PublicKey
  tokenProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  season: PublicKey
  currentMissions: PublicKey
  player: PublicKey
  mission: PublicKey
  playerMission: PublicKey
  programSigner: PublicKey
}

export const layout = borsh.struct([
  types.AddRequirementParams.layout("params"),
])

export function addRequirement(
  args: AddRequirementArgs,
  accounts: AddRequirementAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.tokenProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.season, isSigner: false, isWritable: false },
    { pubkey: accounts.currentMissions, isSigner: false, isWritable: false },
    { pubkey: accounts.player, isSigner: false, isWritable: false },
    { pubkey: accounts.mission, isSigner: false, isWritable: false },
    { pubkey: accounts.playerMission, isSigner: false, isWritable: true },
    { pubkey: accounts.programSigner, isSigner: false, isWritable: false },
  ]
  const identifier = Buffer.from([20, 209, 178, 19, 159, 108, 60, 145])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      params: types.AddRequirementParams.toEncodable(args.params),
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
