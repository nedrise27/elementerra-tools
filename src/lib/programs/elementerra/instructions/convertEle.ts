import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface ConvertEleArgs {
  amount: BN
}

export interface ConvertEleAccounts {
  associatedTokenProgram: PublicKey
  tokenProgram: PublicKey
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  programSigner: PublicKey
  elementumMint: PublicKey
  userElementumAccount: PublicKey
  drkeMint: PublicKey
  userDrkeAccount: PublicKey
  drkePool: PublicKey
}

export const layout = borsh.struct([borsh.u64("amount")])

export function convertEle(
  args: ConvertEleArgs,
  accounts: ConvertEleAccounts,
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
    { pubkey: accounts.elementumMint, isSigner: false, isWritable: true },
    {
      pubkey: accounts.userElementumAccount,
      isSigner: false,
      isWritable: true,
    },
    { pubkey: accounts.drkeMint, isSigner: false, isWritable: true },
    { pubkey: accounts.userDrkeAccount, isSigner: false, isWritable: true },
    { pubkey: accounts.drkePool, isSigner: false, isWritable: true },
  ]
  const identifier = Buffer.from([194, 53, 212, 32, 158, 75, 86, 77])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      amount: args.amount,
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
