import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface StakeableCollectionFields {
  seasonNumber: number
  collection: PublicKey
  isEnabled: boolean
  totalClaimed: BN
  stakingRates: Array<types.StakingRateFields>
  stakingType: types.StakingTypeKind
}

export interface StakeableCollectionJSON {
  seasonNumber: number
  collection: string
  isEnabled: boolean
  totalClaimed: string
  stakingRates: Array<types.StakingRateJSON>
  stakingType: types.StakingTypeJSON
}

export class StakeableCollection {
  readonly seasonNumber: number
  readonly collection: PublicKey
  readonly isEnabled: boolean
  readonly totalClaimed: BN
  readonly stakingRates: Array<types.StakingRate>
  readonly stakingType: types.StakingTypeKind

  static readonly discriminator = Buffer.from([
    89, 221, 139, 133, 63, 94, 96, 165,
  ])

  static readonly layout = borsh.struct([
    borsh.u8("seasonNumber"),
    borsh.publicKey("collection"),
    borsh.bool("isEnabled"),
    borsh.u64("totalClaimed"),
    borsh.vec(types.StakingRate.layout(), "stakingRates"),
    types.StakingType.layout("stakingType"),
  ])

  constructor(fields: StakeableCollectionFields) {
    this.seasonNumber = fields.seasonNumber
    this.collection = fields.collection
    this.isEnabled = fields.isEnabled
    this.totalClaimed = fields.totalClaimed
    this.stakingRates = fields.stakingRates.map(
      (item) => new types.StakingRate({ ...item })
    )
    this.stakingType = fields.stakingType
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<StakeableCollection | null> {
    const info = await c.getAccountInfo(address)

    if (info === null) {
      return null
    }
    if (!info.owner.equals(programId)) {
      throw new Error("account doesn't belong to this program")
    }

    return this.decode(info.data)
  }

  static async fetchMultiple(
    c: Connection,
    addresses: PublicKey[],
    programId: PublicKey = PROGRAM_ID
  ): Promise<Array<StakeableCollection | null>> {
    const infos = await c.getMultipleAccountsInfo(addresses)

    return infos.map((info) => {
      if (info === null) {
        return null
      }
      if (!info.owner.equals(programId)) {
        throw new Error("account doesn't belong to this program")
      }

      return this.decode(info.data)
    })
  }

  static decode(data: Buffer): StakeableCollection {
    if (!data.slice(0, 8).equals(StakeableCollection.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = StakeableCollection.layout.decode(data.slice(8))

    return new StakeableCollection({
      seasonNumber: dec.seasonNumber,
      collection: dec.collection,
      isEnabled: dec.isEnabled,
      totalClaimed: dec.totalClaimed,
      stakingRates: dec.stakingRates.map(
        (
          item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */
        ) => types.StakingRate.fromDecoded(item)
      ),
      stakingType: types.StakingType.fromDecoded(dec.stakingType),
    })
  }

  toJSON(): StakeableCollectionJSON {
    return {
      seasonNumber: this.seasonNumber,
      collection: this.collection.toString(),
      isEnabled: this.isEnabled,
      totalClaimed: this.totalClaimed.toString(),
      stakingRates: this.stakingRates.map((item) => item.toJSON()),
      stakingType: this.stakingType.toJSON(),
    }
  }

  static fromJSON(obj: StakeableCollectionJSON): StakeableCollection {
    return new StakeableCollection({
      seasonNumber: obj.seasonNumber,
      collection: new PublicKey(obj.collection),
      isEnabled: obj.isEnabled,
      totalClaimed: new BN(obj.totalClaimed),
      stakingRates: obj.stakingRates.map((item) =>
        types.StakingRate.fromJSON(item)
      ),
      stakingType: types.StakingType.fromJSON(obj.stakingType),
    })
  }
}
