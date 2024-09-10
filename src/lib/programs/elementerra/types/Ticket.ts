import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface TicketFields {}

export interface TicketJSON {}

export class Ticket {
  constructor(fields: TicketFields) {}

  static layout(property?: string) {
    return borsh.struct([], property)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new Ticket({})
  }

  static toEncodable(fields: TicketFields) {
    return {}
  }

  toJSON(): TicketJSON {
    return {}
  }

  static fromJSON(obj: TicketJSON): Ticket {
    return new Ticket({})
  }

  toEncodable() {
    return Ticket.toEncodable(this)
  }
}
