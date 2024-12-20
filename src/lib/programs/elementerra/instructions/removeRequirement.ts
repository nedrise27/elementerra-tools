import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface RemoveRequirementArgs {
  params: types.RemoveRequirementParamsFields
}

export interface RemoveRequirementAccounts {
  systemProgram: PublicKey
  tokenProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  season: PublicKey
  player: PublicKey
  mission: PublicKey
  playerMission: PublicKey
  programSigner: PublicKey
}

export const layout = borsh.struct([
  types.RemoveRequirementParams.layout("params"),
])

export function removeRequirement(
  args: RemoveRequirementArgs,
  accounts: RemoveRequirementAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.tokenProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.season, isSigner: false, isWritable: false },
    { pubkey: accounts.player, isSigner: false, isWritable: false },
    { pubkey: accounts.mission, isSigner: false, isWritable: false },
    { pubkey: accounts.playerMission, isSigner: false, isWritable: true },
    { pubkey: accounts.programSigner, isSigner: false, isWritable: false },
  ]
  const identifier = Buffer.from([218, 71, 168, 20, 54, 58, 128, 25])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      params: types.RemoveRequirementParams.toEncodable(args.params),
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
