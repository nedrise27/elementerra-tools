import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface InitMissionArgs {
  missionId: number
  numberOfHoursToComplete: number
  requirements: Array<types.MissionRequirementKind>
  rewards: Array<types.MissionRewardKind>
  odds: Array<types.MissionOddsFields>
}

export interface InitMissionAccounts {
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  season: PublicKey
  mission: PublicKey
}

export const layout = borsh.struct([
  borsh.u16("missionId"),
  borsh.u16("numberOfHoursToComplete"),
  borsh.vec(types.MissionRequirement.layout(), "requirements"),
  borsh.vec(types.MissionReward.layout(), "rewards"),
  borsh.vec(types.MissionOdds.layout(), "odds"),
])

export function initMission(
  args: InitMissionArgs,
  accounts: InitMissionAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.season, isSigner: false, isWritable: false },
    { pubkey: accounts.mission, isSigner: false, isWritable: true },
  ]
  const identifier = Buffer.from([139, 75, 219, 114, 227, 55, 10, 117])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      missionId: args.missionId,
      numberOfHoursToComplete: args.numberOfHoursToComplete,
      requirements: args.requirements.map((item) => item.toEncodable()),
      rewards: args.rewards.map((item) => item.toEncodable()),
      odds: args.odds.map((item) => types.MissionOdds.toEncodable(item)),
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
