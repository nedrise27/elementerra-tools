import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface StakingRateFields {
  ratePerHour: BN
  startTime: BN
  endTime: BN
}

export interface StakingRateJSON {
  ratePerHour: string
  startTime: string
  endTime: string
}

export class StakingRate {
  readonly ratePerHour: BN
  readonly startTime: BN
  readonly endTime: BN

  constructor(fields: StakingRateFields) {
    this.ratePerHour = fields.ratePerHour
    this.startTime = fields.startTime
    this.endTime = fields.endTime
  }

  static layout(property?: string) {
    return borsh.struct(
      [borsh.u64("ratePerHour"), borsh.i64("startTime"), borsh.i64("endTime")],
      property
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new StakingRate({
      ratePerHour: obj.ratePerHour,
      startTime: obj.startTime,
      endTime: obj.endTime,
    })
  }

  static toEncodable(fields: StakingRateFields) {
    return {
      ratePerHour: fields.ratePerHour,
      startTime: fields.startTime,
      endTime: fields.endTime,
    }
  }

  toJSON(): StakingRateJSON {
    return {
      ratePerHour: this.ratePerHour.toString(),
      startTime: this.startTime.toString(),
      endTime: this.endTime.toString(),
    }
  }

  static fromJSON(obj: StakingRateJSON): StakingRate {
    return new StakingRate({
      ratePerHour: new BN(obj.ratePerHour),
      startTime: new BN(obj.startTime),
      endTime: new BN(obj.endTime),
    })
  }

  toEncodable() {
    return StakingRate.toEncodable(this)
  }
}
