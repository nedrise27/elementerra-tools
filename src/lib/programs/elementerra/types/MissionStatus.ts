import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface NotStartedJSON {
  kind: "NotStarted"
}

export class NotStarted {
  static readonly discriminator = 0
  static readonly kind = "NotStarted"
  readonly discriminator = 0
  readonly kind = "NotStarted"

  toJSON(): NotStartedJSON {
    return {
      kind: "NotStarted",
    }
  }

  toEncodable() {
    return {
      NotStarted: {},
    }
  }
}

export interface PendingJSON {
  kind: "Pending"
}

export class Pending {
  static readonly discriminator = 1
  static readonly kind = "Pending"
  readonly discriminator = 1
  readonly kind = "Pending"

  toJSON(): PendingJSON {
    return {
      kind: "Pending",
    }
  }

  toEncodable() {
    return {
      Pending: {},
    }
  }
}

export interface StartedJSON {
  kind: "Started"
}

export class Started {
  static readonly discriminator = 2
  static readonly kind = "Started"
  readonly discriminator = 2
  readonly kind = "Started"

  toJSON(): StartedJSON {
    return {
      kind: "Started",
    }
  }

  toEncodable() {
    return {
      Started: {},
    }
  }
}

export interface CompletedJSON {
  kind: "Completed"
}

export class Completed {
  static readonly discriminator = 3
  static readonly kind = "Completed"
  readonly discriminator = 3
  readonly kind = "Completed"

  toJSON(): CompletedJSON {
    return {
      kind: "Completed",
    }
  }

  toEncodable() {
    return {
      Completed: {},
    }
  }
}

export interface ClaimableJSON {
  kind: "Claimable"
}

export class Claimable {
  static readonly discriminator = 4
  static readonly kind = "Claimable"
  readonly discriminator = 4
  readonly kind = "Claimable"

  toJSON(): ClaimableJSON {
    return {
      kind: "Claimable",
    }
  }

  toEncodable() {
    return {
      Claimable: {},
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDecoded(obj: any): types.MissionStatusKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("NotStarted" in obj) {
    return new NotStarted()
  }
  if ("Pending" in obj) {
    return new Pending()
  }
  if ("Started" in obj) {
    return new Started()
  }
  if ("Completed" in obj) {
    return new Completed()
  }
  if ("Claimable" in obj) {
    return new Claimable()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(
  obj: types.MissionStatusJSON
): types.MissionStatusKind {
  switch (obj.kind) {
    case "NotStarted": {
      return new NotStarted()
    }
    case "Pending": {
      return new Pending()
    }
    case "Started": {
      return new Started()
    }
    case "Completed": {
      return new Completed()
    }
    case "Claimable": {
      return new Claimable()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([], "NotStarted"),
    borsh.struct([], "Pending"),
    borsh.struct([], "Started"),
    borsh.struct([], "Completed"),
    borsh.struct([], "Claimable"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
