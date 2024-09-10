import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface CollectionJSON {
  kind: "Collection"
}

export class Collection {
  static readonly discriminator = 0
  static readonly kind = "Collection"
  readonly discriminator = 0
  readonly kind = "Collection"

  toJSON(): CollectionJSON {
    return {
      kind: "Collection",
    }
  }

  toEncodable() {
    return {
      Collection: {},
    }
  }
}

export interface MerkleNodeJSON {
  kind: "MerkleNode"
}

export class MerkleNode {
  static readonly discriminator = 1
  static readonly kind = "MerkleNode"
  readonly discriminator = 1
  readonly kind = "MerkleNode"

  toJSON(): MerkleNodeJSON {
    return {
      kind: "MerkleNode",
    }
  }

  toEncodable() {
    return {
      MerkleNode: {},
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDecoded(obj: any): types.StakingTypeKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("Collection" in obj) {
    return new Collection()
  }
  if ("MerkleNode" in obj) {
    return new MerkleNode()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(obj: types.StakingTypeJSON): types.StakingTypeKind {
  switch (obj.kind) {
    case "Collection": {
      return new Collection()
    }
    case "MerkleNode": {
      return new MerkleNode()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([], "Collection"),
    borsh.struct([], "MerkleNode"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
