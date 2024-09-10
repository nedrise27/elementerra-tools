import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface CNFTValuesFields {
  root: Array<number>
  dataHash: Array<number>
  creatorHash: Array<number>
  name: Array<number>
  nonce: BN
  index: number
}

export interface CNFTValuesJSON {
  root: Array<number>
  dataHash: Array<number>
  creatorHash: Array<number>
  name: Array<number>
  nonce: string
  index: number
}

export class CNFTValues {
  readonly root: Array<number>
  readonly dataHash: Array<number>
  readonly creatorHash: Array<number>
  readonly name: Array<number>
  readonly nonce: BN
  readonly index: number

  constructor(fields: CNFTValuesFields) {
    this.root = fields.root
    this.dataHash = fields.dataHash
    this.creatorHash = fields.creatorHash
    this.name = fields.name
    this.nonce = fields.nonce
    this.index = fields.index
  }

  static layout(property?: string) {
    return borsh.struct(
      [
        borsh.array(borsh.u8(), 32, "root"),
        borsh.array(borsh.u8(), 32, "dataHash"),
        borsh.array(borsh.u8(), 32, "creatorHash"),
        borsh.array(borsh.u8(), 32, "name"),
        borsh.u64("nonce"),
        borsh.u32("index"),
      ],
      property
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new CNFTValues({
      root: obj.root,
      dataHash: obj.dataHash,
      creatorHash: obj.creatorHash,
      name: obj.name,
      nonce: obj.nonce,
      index: obj.index,
    })
  }

  static toEncodable(fields: CNFTValuesFields) {
    return {
      root: fields.root,
      dataHash: fields.dataHash,
      creatorHash: fields.creatorHash,
      name: fields.name,
      nonce: fields.nonce,
      index: fields.index,
    }
  }

  toJSON(): CNFTValuesJSON {
    return {
      root: this.root,
      dataHash: this.dataHash,
      creatorHash: this.creatorHash,
      name: this.name,
      nonce: this.nonce.toString(),
      index: this.index,
    }
  }

  static fromJSON(obj: CNFTValuesJSON): CNFTValues {
    return new CNFTValues({
      root: obj.root,
      dataHash: obj.dataHash,
      creatorHash: obj.creatorHash,
      name: obj.name,
      nonce: new BN(obj.nonce),
      index: obj.index,
    })
  }

  toEncodable() {
    return CNFTValues.toEncodable(this)
  }
}
