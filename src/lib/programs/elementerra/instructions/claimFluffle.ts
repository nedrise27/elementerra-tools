import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface ClaimFluffleArgs {
  merkleProof: Array<Array<number>>
  claimableAmount: BN
}

export interface ClaimFluffleAccounts {
  associatedTokenProgram: PublicKey
  tokenProgram: PublicKey
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  programSigner: PublicKey
  fluffleClaimable: PublicKey
  fluffleClaimed: PublicKey
  fluffleMint: PublicKey
  flufflePool: PublicKey
  userTokenAccount: PublicKey
}

export const layout = borsh.struct([
  borsh.vec(borsh.array(borsh.u8(), 32), "merkleProof"),
  borsh.u64("claimableAmount"),
])

export function claimFluffle(
  args: ClaimFluffleArgs,
  accounts: ClaimFluffleAccounts,
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
    { pubkey: accounts.fluffleClaimable, isSigner: false, isWritable: true },
    { pubkey: accounts.fluffleClaimed, isSigner: false, isWritable: true },
    { pubkey: accounts.fluffleMint, isSigner: false, isWritable: false },
    { pubkey: accounts.flufflePool, isSigner: false, isWritable: true },
    { pubkey: accounts.userTokenAccount, isSigner: false, isWritable: true },
  ]
  const identifier = Buffer.from([198, 239, 253, 183, 118, 173, 127, 4])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      merkleProof: args.merkleProof,
      claimableAmount: args.claimableAmount,
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
