import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export type TokenFields = {
  mint: PublicKey
  amount: BN
}
export type TokenValue = {
  mint: PublicKey
  amount: BN
}

export interface TokenJSON {
  kind: "Token"
  value: {
    mint: string
    amount: string
  }
}

export class Token {
  static readonly discriminator = 0
  static readonly kind = "Token"
  readonly discriminator = 0
  readonly kind = "Token"
  readonly value: TokenValue

  constructor(value: TokenFields) {
    this.value = {
      mint: value.mint,
      amount: value.amount,
    }
  }

  toJSON(): TokenJSON {
    return {
      kind: "Token",
      value: {
        mint: this.value.mint.toString(),
        amount: this.value.amount.toString(),
      },
    }
  }

  toEncodable() {
    return {
      Token: {
        mint: this.value.mint,
        amount: this.value.amount,
      },
    }
  }
}

export interface LoseNFTJSON {
  kind: "LoseNFT"
}

export class LoseNFT {
  static readonly discriminator = 1
  static readonly kind = "LoseNFT"
  readonly discriminator = 1
  readonly kind = "LoseNFT"

  toJSON(): LoseNFTJSON {
    return {
      kind: "LoseNFT",
    }
  }

  toEncodable() {
    return {
      LoseNFT: {},
    }
  }
}

export type WinNftFields = {
  nftType: types.NFTRewardTypeKind
}
export type WinNftValue = {
  nftType: types.NFTRewardTypeKind
}

export interface WinNftJSON {
  kind: "WinNft"
  value: {
    nftType: types.NFTRewardTypeJSON
  }
}

export class WinNft {
  static readonly discriminator = 2
  static readonly kind = "WinNft"
  readonly discriminator = 2
  readonly kind = "WinNft"
  readonly value: WinNftValue

  constructor(value: WinNftFields) {
    this.value = {
      nftType: value.nftType,
    }
  }

  toJSON(): WinNftJSON {
    return {
      kind: "WinNft",
      value: {
        nftType: this.value.nftType.toJSON(),
      },
    }
  }

  toEncodable() {
    return {
      WinNft: {
        nft_type: this.value.nftType.toEncodable(),
      },
    }
  }
}

export interface NothingJSON {
  kind: "Nothing"
}

export class Nothing {
  static readonly discriminator = 3
  static readonly kind = "Nothing"
  readonly discriminator = 3
  readonly kind = "Nothing"

  toJSON(): NothingJSON {
    return {
      kind: "Nothing",
    }
  }

  toEncodable() {
    return {
      Nothing: {},
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDecoded(obj: any): types.MissionRewardKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("Token" in obj) {
    const val = obj["Token"]
    return new Token({
      mint: val["mint"],
      amount: val["amount"],
    })
  }
  if ("LoseNFT" in obj) {
    return new LoseNFT()
  }
  if ("WinNft" in obj) {
    const val = obj["WinNft"]
    return new WinNft({
      nftType: types.NFTRewardType.fromDecoded(val["nft_type"]),
    })
  }
  if ("Nothing" in obj) {
    return new Nothing()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(
  obj: types.MissionRewardJSON
): types.MissionRewardKind {
  switch (obj.kind) {
    case "Token": {
      return new Token({
        mint: new PublicKey(obj.value.mint),
        amount: new BN(obj.value.amount),
      })
    }
    case "LoseNFT": {
      return new LoseNFT()
    }
    case "WinNft": {
      return new WinNft({
        nftType: types.NFTRewardType.fromJSON(obj.value.nftType),
      })
    }
    case "Nothing": {
      return new Nothing()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([borsh.publicKey("mint"), borsh.u64("amount")], "Token"),
    borsh.struct([], "LoseNFT"),
    borsh.struct([types.NFTRewardType.layout("nft_type")], "WinNft"),
    borsh.struct([], "Nothing"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
