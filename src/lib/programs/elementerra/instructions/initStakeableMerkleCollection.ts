import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface InitStakeableMerkleCollectionArgs {
  merkleRoot: Array<number>
  isEnabled: boolean
  stakingRates: Array<types.StakingRateFields>
}

export interface InitStakeableMerkleCollectionAccounts {
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  season: PublicKey
  stakeableMerkleCollection: PublicKey
}

export const layout = borsh.struct([
  borsh.array(borsh.u8(), 32, "merkleRoot"),
  borsh.bool("isEnabled"),
  borsh.vec(types.StakingRate.layout(), "stakingRates"),
])

export function initStakeableMerkleCollection(
  args: InitStakeableMerkleCollectionArgs,
  accounts: InitStakeableMerkleCollectionAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.season, isSigner: false, isWritable: true },
    {
      pubkey: accounts.stakeableMerkleCollection,
      isSigner: true,
      isWritable: true,
    },
  ]
  const identifier = Buffer.from([171, 48, 17, 80, 194, 64, 88, 86])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      merkleRoot: args.merkleRoot,
      isEnabled: args.isEnabled,
      stakingRates: args.stakingRates.map((item) =>
        types.StakingRate.toEncodable(item)
      ),
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
