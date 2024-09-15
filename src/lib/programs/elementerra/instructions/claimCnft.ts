import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface ClaimCnftArgs {
  crystalTier: types.CrystalTierKind
  dataHash: Array<number>
  nonce: BN
}

export interface ClaimCnftAccounts {
  associatedTokenProgram: PublicKey
  tokenProgram: PublicKey
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  programSigner: PublicKey
  nftStakeProof: PublicKey
  merkleTree: PublicKey
  elementumMint: PublicKey
  stakingPool: PublicKey
  userTokenAccount: PublicKey
}

export const layout = borsh.struct([
  types.CrystalTier.layout("crystalTier"),
  borsh.array(borsh.u8(), 32, "dataHash"),
  borsh.u64("nonce"),
])

export function claimCnft(
  args: ClaimCnftArgs,
  accounts: ClaimCnftAccounts,
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
    { pubkey: accounts.rent, isSigner: false, isWritable: false },
    { pubkey: accounts.authority, isSigner: true, isWritable: true },
    { pubkey: accounts.programSigner, isSigner: false, isWritable: false },
    { pubkey: accounts.nftStakeProof, isSigner: false, isWritable: true },
    { pubkey: accounts.merkleTree, isSigner: false, isWritable: true },
    { pubkey: accounts.elementumMint, isSigner: false, isWritable: false },
    { pubkey: accounts.stakingPool, isSigner: false, isWritable: true },
    { pubkey: accounts.userTokenAccount, isSigner: false, isWritable: true },
  ]
  const identifier = Buffer.from([30, 220, 189, 5, 230, 95, 4, 131])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      crystalTier: args.crystalTier.toEncodable(),
      dataHash: args.dataHash,
      nonce: args.nonce,
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
