import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface CreateCollectionArgs {
  name: string
  symbol: string
  uri: string
  sellerFeeBasisPoint: number
}

export interface CreateCollectionAccounts {
  associatedTokenProgram: PublicKey
  tokenProgram: PublicKey
  systemProgram: PublicKey
  rent: PublicKey
  authority: PublicKey
  programSigner: PublicKey
  metaplexTokenMetadataProgram: PublicKey
  metaplexMetadataAccount: PublicKey
  collectionMint: PublicKey
  collectionToken: PublicKey
  collectionMasterEdition: PublicKey
}

export const layout = borsh.struct([
  borsh.str("name"),
  borsh.str("symbol"),
  borsh.str("uri"),
  borsh.u16("sellerFeeBasisPoint"),
])

export function createCollection(
  args: CreateCollectionArgs,
  accounts: CreateCollectionAccounts,
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
    {
      pubkey: accounts.metaplexTokenMetadataProgram,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: accounts.metaplexMetadataAccount,
      isSigner: false,
      isWritable: true,
    },
    { pubkey: accounts.collectionMint, isSigner: true, isWritable: true },
    { pubkey: accounts.collectionToken, isSigner: false, isWritable: true },
    {
      pubkey: accounts.collectionMasterEdition,
      isSigner: false,
      isWritable: true,
    },
  ]
  const identifier = Buffer.from([156, 251, 92, 54, 233, 2, 16, 82])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      name: args.name,
      symbol: args.symbol,
      uri: args.uri,
      sellerFeeBasisPoint: args.sellerFeeBasisPoint,
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}
