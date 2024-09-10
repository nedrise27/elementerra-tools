import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface InitStakeableCollectionArgs {
  collection: PublicKey
  isEnabled: boolean
  stakingRates: Array<types.StakingRateFields>
}

export interface InitStakeableCollectionAccounts {
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  season: PublicKey
  stakeableCollection: PublicKey
}

export const layout = borsh.struct([
  borsh.publicKey("collection"),
  borsh.bool("isEnabled"),
  borsh.vec(types.StakingRate.layout(), "stakingRates"),
])

export function initStakeableCollection(
  args: InitStakeableCollectionArgs,
  accounts: InitStakeableCollectionAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.season, isSigner: false, isWritable: true },
    { pubkey: accounts.stakeableCollection, isSigner: true, isWritable: true },
  ]
  const identifier = Buffer.from([97, 188, 81, 186, 63, 93, 194, 33])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      collection: args.collection,
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
