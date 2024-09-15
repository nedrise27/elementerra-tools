import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface FlameJSON {
  kind: "Flame"
}

export class Flame {
  static readonly discriminator = 0
  static readonly kind = "Flame"
  readonly discriminator = 0
  readonly kind = "Flame"

  toJSON(): FlameJSON {
    return {
      kind: "Flame",
    }
  }

  toEncodable() {
    return {
      Flame: {},
    }
  }
}

export interface SeaJSON {
  kind: "Sea"
}

export class Sea {
  static readonly discriminator = 1
  static readonly kind = "Sea"
  readonly discriminator = 1
  readonly kind = "Sea"

  toJSON(): SeaJSON {
    return {
      kind: "Sea",
    }
  }

  toEncodable() {
    return {
      Sea: {},
    }
  }
}

export interface LeafJSON {
  kind: "Leaf"
}

export class Leaf {
  static readonly discriminator = 2
  static readonly kind = "Leaf"
  readonly discriminator = 2
  readonly kind = "Leaf"

  toJSON(): LeafJSON {
    return {
      kind: "Leaf",
    }
  }

  toEncodable() {
    return {
      Leaf: {},
    }
  }
}

export interface StickJSON {
  kind: "Stick"
}

export class Stick {
  static readonly discriminator = 3
  static readonly kind = "Stick"
  readonly discriminator = 3
  readonly kind = "Stick"

  toJSON(): StickJSON {
    return {
      kind: "Stick",
    }
  }

  toEncodable() {
    return {
      Stick: {},
    }
  }
}

export interface BrokenGlassJSON {
  kind: "BrokenGlass"
}

export class BrokenGlass {
  static readonly discriminator = 4
  static readonly kind = "BrokenGlass"
  readonly discriminator = 4
  readonly kind = "BrokenGlass"

  toJSON(): BrokenGlassJSON {
    return {
      kind: "BrokenGlass",
    }
  }

  toEncodable() {
    return {
      BrokenGlass: {},
    }
  }
}

export interface CompressionJSON {
  kind: "Compression"
}

export class Compression {
  static readonly discriminator = 5
  static readonly kind = "Compression"
  readonly discriminator = 5
  readonly kind = "Compression"

  toJSON(): CompressionJSON {
    return {
      kind: "Compression",
    }
  }

  toEncodable() {
    return {
      Compression: {},
    }
  }
}

export interface RubberJSON {
  kind: "Rubber"
}

export class Rubber {
  static readonly discriminator = 6
  static readonly kind = "Rubber"
  readonly discriminator = 6
  readonly kind = "Rubber"

  toJSON(): RubberJSON {
    return {
      kind: "Rubber",
    }
  }

  toEncodable() {
    return {
      Rubber: {},
    }
  }
}

export interface PebbleJSON {
  kind: "Pebble"
}

export class Pebble {
  static readonly discriminator = 7
  static readonly kind = "Pebble"
  readonly discriminator = 7
  readonly kind = "Pebble"

  toJSON(): PebbleJSON {
    return {
      kind: "Pebble",
    }
  }

  toEncodable() {
    return {
      Pebble: {},
    }
  }
}

export interface OxygenJSON {
  kind: "Oxygen"
}

export class Oxygen {
  static readonly discriminator = 8
  static readonly kind = "Oxygen"
  readonly discriminator = 8
  readonly kind = "Oxygen"

  toJSON(): OxygenJSON {
    return {
      kind: "Oxygen",
    }
  }

  toEncodable() {
    return {
      Oxygen: {},
    }
  }
}

export interface CarbonJSON {
  kind: "Carbon"
}

export class Carbon {
  static readonly discriminator = 9
  static readonly kind = "Carbon"
  readonly discriminator = 9
  readonly kind = "Carbon"

  toJSON(): CarbonJSON {
    return {
      kind: "Carbon",
    }
  }

  toEncodable() {
    return {
      Carbon: {},
    }
  }
}

export interface RockJSON {
  kind: "Rock"
}

export class Rock {
  static readonly discriminator = 10
  static readonly kind = "Rock"
  readonly discriminator = 10
  readonly kind = "Rock"

  toJSON(): RockJSON {
    return {
      kind: "Rock",
    }
  }

  toEncodable() {
    return {
      Rock: {},
    }
  }
}

export interface ToxicJSON {
  kind: "Toxic"
}

export class Toxic {
  static readonly discriminator = 11
  static readonly kind = "Toxic"
  readonly discriminator = 11
  readonly kind = "Toxic"

  toJSON(): ToxicJSON {
    return {
      kind: "Toxic",
    }
  }

  toEncodable() {
    return {
      Toxic: {},
    }
  }
}

export interface TemperedGlassJSON {
  kind: "TemperedGlass"
}

export class TemperedGlass {
  static readonly discriminator = 12
  static readonly kind = "TemperedGlass"
  readonly discriminator = 12
  readonly kind = "TemperedGlass"

  toJSON(): TemperedGlassJSON {
    return {
      kind: "TemperedGlass",
    }
  }

  toEncodable() {
    return {
      TemperedGlass: {},
    }
  }
}

export interface SaltJSON {
  kind: "Salt"
}

export class Salt {
  static readonly discriminator = 13
  static readonly kind = "Salt"
  readonly discriminator = 13
  readonly kind = "Salt"

  toJSON(): SaltJSON {
    return {
      kind: "Salt",
    }
  }

  toEncodable() {
    return {
      Salt: {},
    }
  }
}

export interface FreshWaterJSON {
  kind: "FreshWater"
}

export class FreshWater {
  static readonly discriminator = 14
  static readonly kind = "FreshWater"
  readonly discriminator = 14
  readonly kind = "FreshWater"

  toJSON(): FreshWaterJSON {
    return {
      kind: "FreshWater",
    }
  }

  toEncodable() {
    return {
      FreshWater: {},
    }
  }
}

export interface FlowerJSON {
  kind: "Flower"
}

export class Flower {
  static readonly discriminator = 15
  static readonly kind = "Flower"
  readonly discriminator = 15
  readonly kind = "Flower"

  toJSON(): FlowerJSON {
    return {
      kind: "Flower",
    }
  }

  toEncodable() {
    return {
      Flower: {},
    }
  }
}

export interface MoldJSON {
  kind: "Mold"
}

export class Mold {
  static readonly discriminator = 16
  static readonly kind = "Mold"
  readonly discriminator = 16
  readonly kind = "Mold"

  toJSON(): MoldJSON {
    return {
      kind: "Mold",
    }
  }

  toEncodable() {
    return {
      Mold: {},
    }
  }
}

export interface WoodenPlankJSON {
  kind: "WoodenPlank"
}

export class WoodenPlank {
  static readonly discriminator = 17
  static readonly kind = "WoodenPlank"
  readonly discriminator = 17
  readonly kind = "WoodenPlank"

  toJSON(): WoodenPlankJSON {
    return {
      kind: "WoodenPlank",
    }
  }

  toEncodable() {
    return {
      WoodenPlank: {},
    }
  }
}

export interface NestJSON {
  kind: "Nest"
}

export class Nest {
  static readonly discriminator = 18
  static readonly kind = "Nest"
  readonly discriminator = 18
  readonly kind = "Nest"

  toJSON(): NestJSON {
    return {
      kind: "Nest",
    }
  }

  toEncodable() {
    return {
      Nest: {},
    }
  }
}

export interface BonesJSON {
  kind: "Bones"
}

export class Bones {
  static readonly discriminator = 19
  static readonly kind = "Bones"
  readonly discriminator = 19
  readonly kind = "Bones"

  toJSON(): BonesJSON {
    return {
      kind: "Bones",
    }
  }

  toEncodable() {
    return {
      Bones: {},
    }
  }
}

export interface IronJSON {
  kind: "Iron"
}

export class Iron {
  static readonly discriminator = 20
  static readonly kind = "Iron"
  readonly discriminator = 20
  readonly kind = "Iron"

  toJSON(): IronJSON {
    return {
      kind: "Iron",
    }
  }

  toEncodable() {
    return {
      Iron: {},
    }
  }
}

export interface OrganismJSON {
  kind: "Organism"
}

export class Organism {
  static readonly discriminator = 21
  static readonly kind = "Organism"
  readonly discriminator = 21
  readonly kind = "Organism"

  toJSON(): OrganismJSON {
    return {
      kind: "Organism",
    }
  }

  toEncodable() {
    return {
      Organism: {},
    }
  }
}

export interface LeadJSON {
  kind: "Lead"
}

export class Lead {
  static readonly discriminator = 22
  static readonly kind = "Lead"
  readonly discriminator = 22
  readonly kind = "Lead"

  toJSON(): LeadJSON {
    return {
      kind: "Lead",
    }
  }

  toEncodable() {
    return {
      Lead: {},
    }
  }
}

export interface BrickJSON {
  kind: "Brick"
}

export class Brick {
  static readonly discriminator = 23
  static readonly kind = "Brick"
  readonly discriminator = 23
  readonly kind = "Brick"

  toJSON(): BrickJSON {
    return {
      kind: "Brick",
    }
  }

  toEncodable() {
    return {
      Brick: {},
    }
  }
}

export interface BeeJSON {
  kind: "Bee"
}

export class Bee {
  static readonly discriminator = 24
  static readonly kind = "Bee"
  readonly discriminator = 24
  readonly kind = "Bee"

  toJSON(): BeeJSON {
    return {
      kind: "Bee",
    }
  }

  toEncodable() {
    return {
      Bee: {},
    }
  }
}

export interface HourglassJSON {
  kind: "Hourglass"
}

export class Hourglass {
  static readonly discriminator = 25
  static readonly kind = "Hourglass"
  readonly discriminator = 25
  readonly kind = "Hourglass"

  toJSON(): HourglassJSON {
    return {
      kind: "Hourglass",
    }
  }

  toEncodable() {
    return {
      Hourglass: {},
    }
  }
}

export interface TireJSON {
  kind: "Tire"
}

export class Tire {
  static readonly discriminator = 26
  static readonly kind = "Tire"
  readonly discriminator = 26
  readonly kind = "Tire"

  toJSON(): TireJSON {
    return {
      kind: "Tire",
    }
  }

  toEncodable() {
    return {
      Tire: {},
    }
  }
}

export interface AluminumJSON {
  kind: "Aluminum"
}

export class Aluminum {
  static readonly discriminator = 27
  static readonly kind = "Aluminum"
  readonly discriminator = 27
  readonly kind = "Aluminum"

  toJSON(): AluminumJSON {
    return {
      kind: "Aluminum",
    }
  }

  toEncodable() {
    return {
      Aluminum: {},
    }
  }
}

export interface SilverJSON {
  kind: "Silver"
}

export class Silver {
  static readonly discriminator = 28
  static readonly kind = "Silver"
  readonly discriminator = 28
  readonly kind = "Silver"

  toJSON(): SilverJSON {
    return {
      kind: "Silver",
    }
  }

  toEncodable() {
    return {
      Silver: {},
    }
  }
}

export interface SoilJSON {
  kind: "Soil"
}

export class Soil {
  static readonly discriminator = 29
  static readonly kind = "Soil"
  readonly discriminator = 29
  readonly kind = "Soil"

  toJSON(): SoilJSON {
    return {
      kind: "Soil",
    }
  }

  toEncodable() {
    return {
      Soil: {},
    }
  }
}

export interface MarbleJSON {
  kind: "Marble"
}

export class Marble {
  static readonly discriminator = 30
  static readonly kind = "Marble"
  readonly discriminator = 30
  readonly kind = "Marble"

  toJSON(): MarbleJSON {
    return {
      kind: "Marble",
    }
  }

  toEncodable() {
    return {
      Marble: {},
    }
  }
}

export interface GravelJSON {
  kind: "Gravel"
}

export class Gravel {
  static readonly discriminator = 31
  static readonly kind = "Gravel"
  readonly discriminator = 31
  readonly kind = "Gravel"

  toJSON(): GravelJSON {
    return {
      kind: "Gravel",
    }
  }

  toEncodable() {
    return {
      Gravel: {},
    }
  }
}

export interface StringJSON {
  kind: "String"
}

export class String {
  static readonly discriminator = 32
  static readonly kind = "String"
  readonly discriminator = 32
  readonly kind = "String"

  toJSON(): StringJSON {
    return {
      kind: "String",
    }
  }

  toEncodable() {
    return {
      String: {},
    }
  }
}

export interface ChairJSON {
  kind: "Chair"
}

export class Chair {
  static readonly discriminator = 33
  static readonly kind = "Chair"
  readonly discriminator = 33
  readonly kind = "Chair"

  toJSON(): ChairJSON {
    return {
      kind: "Chair",
    }
  }

  toEncodable() {
    return {
      Chair: {},
    }
  }
}

export interface FireplaceJSON {
  kind: "Fireplace"
}

export class Fireplace {
  static readonly discriminator = 34
  static readonly kind = "Fireplace"
  readonly discriminator = 34
  readonly kind = "Fireplace"

  toJSON(): FireplaceJSON {
    return {
      kind: "Fireplace",
    }
  }

  toEncodable() {
    return {
      Fireplace: {},
    }
  }
}

export interface WindowJSON {
  kind: "Window"
}

export class Window {
  static readonly discriminator = 35
  static readonly kind = "Window"
  readonly discriminator = 35
  readonly kind = "Window"

  toJSON(): WindowJSON {
    return {
      kind: "Window",
    }
  }

  toEncodable() {
    return {
      Window: {},
    }
  }
}

export interface EggJSON {
  kind: "Egg"
}

export class Egg {
  static readonly discriminator = 36
  static readonly kind = "Egg"
  readonly discriminator = 36
  readonly kind = "Egg"

  toJSON(): EggJSON {
    return {
      kind: "Egg",
    }
  }

  toEncodable() {
    return {
      Egg: {},
    }
  }
}

export interface BloodJSON {
  kind: "Blood"
}

export class Blood {
  static readonly discriminator = 37
  static readonly kind = "Blood"
  readonly discriminator = 37
  readonly kind = "Blood"

  toJSON(): BloodJSON {
    return {
      kind: "Blood",
    }
  }

  toEncodable() {
    return {
      Blood: {},
    }
  }
}

export interface SpinachJSON {
  kind: "Spinach"
}

export class Spinach {
  static readonly discriminator = 38
  static readonly kind = "Spinach"
  readonly discriminator = 38
  readonly kind = "Spinach"

  toJSON(): SpinachJSON {
    return {
      kind: "Spinach",
    }
  }

  toEncodable() {
    return {
      Spinach: {},
    }
  }
}

export interface SteelJSON {
  kind: "Steel"
}

export class Steel {
  static readonly discriminator = 39
  static readonly kind = "Steel"
  readonly discriminator = 39
  readonly kind = "Steel"

  toJSON(): SteelJSON {
    return {
      kind: "Steel",
    }
  }

  toEncodable() {
    return {
      Steel: {},
    }
  }
}

export interface WheelJSON {
  kind: "Wheel"
}

export class Wheel {
  static readonly discriminator = 40
  static readonly kind = "Wheel"
  readonly discriminator = 40
  readonly kind = "Wheel"

  toJSON(): WheelJSON {
    return {
      kind: "Wheel",
    }
  }

  toEncodable() {
    return {
      Wheel: {},
    }
  }
}

export interface PalmTreeJSON {
  kind: "PalmTree"
}

export class PalmTree {
  static readonly discriminator = 41
  static readonly kind = "PalmTree"
  readonly discriminator = 41
  readonly kind = "PalmTree"

  toJSON(): PalmTreeJSON {
    return {
      kind: "PalmTree",
    }
  }

  toEncodable() {
    return {
      PalmTree: {},
    }
  }
}

export interface WallJSON {
  kind: "Wall"
}

export class Wall {
  static readonly discriminator = 42
  static readonly kind = "Wall"
  readonly discriminator = 42
  readonly kind = "Wall"

  toJSON(): WallJSON {
    return {
      kind: "Wall",
    }
  }

  toEncodable() {
    return {
      Wall: {},
    }
  }
}

export interface WaxJSON {
  kind: "Wax"
}

export class Wax {
  static readonly discriminator = 43
  static readonly kind = "Wax"
  readonly discriminator = 43
  readonly kind = "Wax"

  toJSON(): WaxJSON {
    return {
      kind: "Wax",
    }
  }

  toEncodable() {
    return {
      Wax: {},
    }
  }
}

export interface AcidJSON {
  kind: "Acid"
}

export class Acid {
  static readonly discriminator = 44
  static readonly kind = "Acid"
  readonly discriminator = 44
  readonly kind = "Acid"

  toJSON(): AcidJSON {
    return {
      kind: "Acid",
    }
  }

  toEncodable() {
    return {
      Acid: {},
    }
  }
}

export interface DiamondJSON {
  kind: "Diamond"
}

export class Diamond {
  static readonly discriminator = 45
  static readonly kind = "Diamond"
  readonly discriminator = 45
  readonly kind = "Diamond"

  toJSON(): DiamondJSON {
    return {
      kind: "Diamond",
    }
  }

  toEncodable() {
    return {
      Diamond: {},
    }
  }
}

export interface FuelJSON {
  kind: "Fuel"
}

export class Fuel {
  static readonly discriminator = 46
  static readonly kind = "Fuel"
  readonly discriminator = 46
  readonly kind = "Fuel"

  toJSON(): FuelJSON {
    return {
      kind: "Fuel",
    }
  }

  toEncodable() {
    return {
      Fuel: {},
    }
  }
}

export interface ChainJSON {
  kind: "Chain"
}

export class Chain {
  static readonly discriminator = 47
  static readonly kind = "Chain"
  readonly discriminator = 47
  readonly kind = "Chain"

  toJSON(): ChainJSON {
    return {
      kind: "Chain",
    }
  }

  toEncodable() {
    return {
      Chain: {},
    }
  }
}

export interface SpiderJSON {
  kind: "Spider"
}

export class Spider {
  static readonly discriminator = 48
  static readonly kind = "Spider"
  readonly discriminator = 48
  readonly kind = "Spider"

  toJSON(): SpiderJSON {
    return {
      kind: "Spider",
    }
  }

  toEncodable() {
    return {
      Spider: {},
    }
  }
}

export interface DuckJSON {
  kind: "Duck"
}

export class Duck {
  static readonly discriminator = 49
  static readonly kind = "Duck"
  readonly discriminator = 49
  readonly kind = "Duck"

  toJSON(): DuckJSON {
    return {
      kind: "Duck",
    }
  }

  toEncodable() {
    return {
      Duck: {},
    }
  }
}

export interface SiliconeJSON {
  kind: "Silicone"
}

export class Silicone {
  static readonly discriminator = 50
  static readonly kind = "Silicone"
  readonly discriminator = 50
  readonly kind = "Silicone"

  toJSON(): SiliconeJSON {
    return {
      kind: "Silicone",
    }
  }

  toEncodable() {
    return {
      Silicone: {},
    }
  }
}

export interface BladeJSON {
  kind: "Blade"
}

export class Blade {
  static readonly discriminator = 51
  static readonly kind = "Blade"
  readonly discriminator = 51
  readonly kind = "Blade"

  toJSON(): BladeJSON {
    return {
      kind: "Blade",
    }
  }

  toEncodable() {
    return {
      Blade: {},
    }
  }
}

export interface PuppetJSON {
  kind: "Puppet"
}

export class Puppet {
  static readonly discriminator = 52
  static readonly kind = "Puppet"
  readonly discriminator = 52
  readonly kind = "Puppet"

  toJSON(): PuppetJSON {
    return {
      kind: "Puppet",
    }
  }

  toEncodable() {
    return {
      Puppet: {},
    }
  }
}

export interface GrassJSON {
  kind: "Grass"
}

export class Grass {
  static readonly discriminator = 53
  static readonly kind = "Grass"
  readonly discriminator = 53
  readonly kind = "Grass"

  toJSON(): GrassJSON {
    return {
      kind: "Grass",
    }
  }

  toEncodable() {
    return {
      Grass: {},
    }
  }
}

export interface BenchJSON {
  kind: "Bench"
}

export class Bench {
  static readonly discriminator = 54
  static readonly kind = "Bench"
  readonly discriminator = 54
  readonly kind = "Bench"

  toJSON(): BenchJSON {
    return {
      kind: "Bench",
    }
  }

  toEncodable() {
    return {
      Bench: {},
    }
  }
}

export interface GreenhouseJSON {
  kind: "Greenhouse"
}

export class Greenhouse {
  static readonly discriminator = 55
  static readonly kind = "Greenhouse"
  readonly discriminator = 55
  readonly kind = "Greenhouse"

  toJSON(): GreenhouseJSON {
    return {
      kind: "Greenhouse",
    }
  }

  toEncodable() {
    return {
      Greenhouse: {},
    }
  }
}

export interface VineJSON {
  kind: "Vine"
}

export class Vine {
  static readonly discriminator = 56
  static readonly kind = "Vine"
  readonly discriminator = 56
  readonly kind = "Vine"

  toJSON(): VineJSON {
    return {
      kind: "Vine",
    }
  }

  toEncodable() {
    return {
      Vine: {},
    }
  }
}

export interface HeartJSON {
  kind: "Heart"
}

export class Heart {
  static readonly discriminator = 57
  static readonly kind = "Heart"
  readonly discriminator = 57
  readonly kind = "Heart"

  toJSON(): HeartJSON {
    return {
      kind: "Heart",
    }
  }

  toEncodable() {
    return {
      Heart: {},
    }
  }
}

export interface MusselJSON {
  kind: "Mussel"
}

export class Mussel {
  static readonly discriminator = 58
  static readonly kind = "Mussel"
  readonly discriminator = 58
  readonly kind = "Mussel"

  toJSON(): MusselJSON {
    return {
      kind: "Mussel",
    }
  }

  toEncodable() {
    return {
      Mussel: {},
    }
  }
}

export interface CoconutJSON {
  kind: "Coconut"
}

export class Coconut {
  static readonly discriminator = 59
  static readonly kind = "Coconut"
  readonly discriminator = 59
  readonly kind = "Coconut"

  toJSON(): CoconutJSON {
    return {
      kind: "Coconut",
    }
  }

  toEncodable() {
    return {
      Coconut: {},
    }
  }
}

export interface HorseshoeJSON {
  kind: "Horseshoe"
}

export class Horseshoe {
  static readonly discriminator = 60
  static readonly kind = "Horseshoe"
  readonly discriminator = 60
  readonly kind = "Horseshoe"

  toJSON(): HorseshoeJSON {
    return {
      kind: "Horseshoe",
    }
  }

  toEncodable() {
    return {
      Horseshoe: {},
    }
  }
}

export interface MouseJSON {
  kind: "Mouse"
}

export class Mouse {
  static readonly discriminator = 61
  static readonly kind = "Mouse"
  readonly discriminator = 61
  readonly kind = "Mouse"

  toJSON(): MouseJSON {
    return {
      kind: "Mouse",
    }
  }

  toEncodable() {
    return {
      Mouse: {},
    }
  }
}

export interface KeyJSON {
  kind: "Key"
}

export class Key {
  static readonly discriminator = 62
  static readonly kind = "Key"
  readonly discriminator = 62
  readonly kind = "Key"

  toJSON(): KeyJSON {
    return {
      kind: "Key",
    }
  }

  toEncodable() {
    return {
      Key: {},
    }
  }
}

export interface HoneyJSON {
  kind: "Honey"
}

export class Honey {
  static readonly discriminator = 63
  static readonly kind = "Honey"
  readonly discriminator = 63
  readonly kind = "Honey"

  toJSON(): HoneyJSON {
    return {
      kind: "Honey",
    }
  }

  toEncodable() {
    return {
      Honey: {},
    }
  }
}

export interface BananaJSON {
  kind: "Banana"
}

export class Banana {
  static readonly discriminator = 64
  static readonly kind = "Banana"
  readonly discriminator = 64
  readonly kind = "Banana"

  toJSON(): BananaJSON {
    return {
      kind: "Banana",
    }
  }

  toEncodable() {
    return {
      Banana: {},
    }
  }
}

export interface RingJSON {
  kind: "Ring"
}

export class Ring {
  static readonly discriminator = 65
  static readonly kind = "Ring"
  readonly discriminator = 65
  readonly kind = "Ring"

  toJSON(): RingJSON {
    return {
      kind: "Ring",
    }
  }

  toEncodable() {
    return {
      Ring: {},
    }
  }
}

export interface EngineJSON {
  kind: "Engine"
}

export class Engine {
  static readonly discriminator = 66
  static readonly kind = "Engine"
  readonly discriminator = 66
  readonly kind = "Engine"

  toJSON(): EngineJSON {
    return {
      kind: "Engine",
    }
  }

  toEncodable() {
    return {
      Engine: {},
    }
  }
}

export interface KiwiJSON {
  kind: "Kiwi"
}

export class Kiwi {
  static readonly discriminator = 67
  static readonly kind = "Kiwi"
  readonly discriminator = 67
  readonly kind = "Kiwi"

  toJSON(): KiwiJSON {
    return {
      kind: "Kiwi",
    }
  }

  toEncodable() {
    return {
      Kiwi: {},
    }
  }
}

export interface GoldJSON {
  kind: "Gold"
}

export class Gold {
  static readonly discriminator = 68
  static readonly kind = "Gold"
  readonly discriminator = 68
  readonly kind = "Gold"

  toJSON(): GoldJSON {
    return {
      kind: "Gold",
    }
  }

  toEncodable() {
    return {
      Gold: {},
    }
  }
}

export interface WebJSON {
  kind: "Web"
}

export class Web {
  static readonly discriminator = 69
  static readonly kind = "Web"
  readonly discriminator = 69
  readonly kind = "Web"

  toJSON(): WebJSON {
    return {
      kind: "Web",
    }
  }

  toEncodable() {
    return {
      Web: {},
    }
  }
}

export interface BatteryJSON {
  kind: "Battery"
}

export class Battery {
  static readonly discriminator = 70
  static readonly kind = "Battery"
  readonly discriminator = 70
  readonly kind = "Battery"

  toJSON(): BatteryJSON {
    return {
      kind: "Battery",
    }
  }

  toEncodable() {
    return {
      Battery: {},
    }
  }
}

export interface MicrochipJSON {
  kind: "Microchip"
}

export class Microchip {
  static readonly discriminator = 71
  static readonly kind = "Microchip"
  readonly discriminator = 71
  readonly kind = "Microchip"

  toJSON(): MicrochipJSON {
    return {
      kind: "Microchip",
    }
  }

  toEncodable() {
    return {
      Microchip: {},
    }
  }
}

export interface SwordJSON {
  kind: "Sword"
}

export class Sword {
  static readonly discriminator = 72
  static readonly kind = "Sword"
  readonly discriminator = 72
  readonly kind = "Sword"

  toJSON(): SwordJSON {
    return {
      kind: "Sword",
    }
  }

  toEncodable() {
    return {
      Sword: {},
    }
  }
}

export interface MirrorJSON {
  kind: "Mirror"
}

export class Mirror {
  static readonly discriminator = 73
  static readonly kind = "Mirror"
  readonly discriminator = 73
  readonly kind = "Mirror"

  toJSON(): MirrorJSON {
    return {
      kind: "Mirror",
    }
  }

  toEncodable() {
    return {
      Mirror: {},
    }
  }
}

export interface GardenJSON {
  kind: "Garden"
}

export class Garden {
  static readonly discriminator = 74
  static readonly kind = "Garden"
  readonly discriminator = 74
  readonly kind = "Garden"

  toJSON(): GardenJSON {
    return {
      kind: "Garden",
    }
  }

  toEncodable() {
    return {
      Garden: {},
    }
  }
}

export interface RubyJSON {
  kind: "Ruby"
}

export class Ruby {
  static readonly discriminator = 75
  static readonly kind = "Ruby"
  readonly discriminator = 75
  readonly kind = "Ruby"

  toJSON(): RubyJSON {
    return {
      kind: "Ruby",
    }
  }

  toEncodable() {
    return {
      Ruby: {},
    }
  }
}

export interface PearlJSON {
  kind: "Pearl"
}

export class Pearl {
  static readonly discriminator = 76
  static readonly kind = "Pearl"
  readonly discriminator = 76
  readonly kind = "Pearl"

  toJSON(): PearlJSON {
    return {
      kind: "Pearl",
    }
  }

  toEncodable() {
    return {
      Pearl: {},
    }
  }
}

export interface BlenderJSON {
  kind: "Blender"
}

export class Blender {
  static readonly discriminator = 77
  static readonly kind = "Blender"
  readonly discriminator = 77
  readonly kind = "Blender"

  toJSON(): BlenderJSON {
    return {
      kind: "Blender",
    }
  }

  toEncodable() {
    return {
      Blender: {},
    }
  }
}

export interface CarJSON {
  kind: "Car"
}

export class Car {
  static readonly discriminator = 78
  static readonly kind = "Car"
  readonly discriminator = 78
  readonly kind = "Car"

  toJSON(): CarJSON {
    return {
      kind: "Car",
    }
  }

  toEncodable() {
    return {
      Car: {},
    }
  }
}

export interface HorseJSON {
  kind: "Horse"
}

export class Horse {
  static readonly discriminator = 79
  static readonly kind = "Horse"
  readonly discriminator = 79
  readonly kind = "Horse"

  toJSON(): HorseJSON {
    return {
      kind: "Horse",
    }
  }

  toEncodable() {
    return {
      Horse: {},
    }
  }
}

export interface ComputerJSON {
  kind: "Computer"
}

export class Computer {
  static readonly discriminator = 80
  static readonly kind = "Computer"
  readonly discriminator = 80
  readonly kind = "Computer"

  toJSON(): ComputerJSON {
    return {
      kind: "Computer",
    }
  }

  toEncodable() {
    return {
      Computer: {},
    }
  }
}

export interface PianoJSON {
  kind: "Piano"
}

export class Piano {
  static readonly discriminator = 81
  static readonly kind = "Piano"
  readonly discriminator = 81
  readonly kind = "Piano"

  toJSON(): PianoJSON {
    return {
      kind: "Piano",
    }
  }

  toEncodable() {
    return {
      Piano: {},
    }
  }
}

export interface MoneyJSON {
  kind: "Money"
}

export class Money {
  static readonly discriminator = 82
  static readonly kind = "Money"
  readonly discriminator = 82
  readonly kind = "Money"

  toJSON(): MoneyJSON {
    return {
      kind: "Money",
    }
  }

  toEncodable() {
    return {
      Money: {},
    }
  }
}

export interface KeyboardJSON {
  kind: "Keyboard"
}

export class Keyboard {
  static readonly discriminator = 83
  static readonly kind = "Keyboard"
  readonly discriminator = 83
  readonly kind = "Keyboard"

  toJSON(): KeyboardJSON {
    return {
      kind: "Keyboard",
    }
  }

  toEncodable() {
    return {
      Keyboard: {},
    }
  }
}

export interface BikeJSON {
  kind: "Bike"
}

export class Bike {
  static readonly discriminator = 84
  static readonly kind = "Bike"
  readonly discriminator = 84
  readonly kind = "Bike"

  toJSON(): BikeJSON {
    return {
      kind: "Bike",
    }
  }

  toEncodable() {
    return {
      Bike: {},
    }
  }
}

export interface NecklaceJSON {
  kind: "Necklace"
}

export class Necklace {
  static readonly discriminator = 85
  static readonly kind = "Necklace"
  readonly discriminator = 85
  readonly kind = "Necklace"

  toJSON(): NecklaceJSON {
    return {
      kind: "Necklace",
    }
  }

  toEncodable() {
    return {
      Necklace: {},
    }
  }
}

export interface StatueJSON {
  kind: "Statue"
}

export class Statue {
  static readonly discriminator = 86
  static readonly kind = "Statue"
  readonly discriminator = 86
  readonly kind = "Statue"

  toJSON(): StatueJSON {
    return {
      kind: "Statue",
    }
  }

  toEncodable() {
    return {
      Statue: {},
    }
  }
}

export interface MonkeyJSON {
  kind: "Monkey"
}

export class Monkey {
  static readonly discriminator = 87
  static readonly kind = "Monkey"
  readonly discriminator = 87
  readonly kind = "Monkey"

  toJSON(): MonkeyJSON {
    return {
      kind: "Monkey",
    }
  }

  toEncodable() {
    return {
      Monkey: {},
    }
  }
}

export interface CellphoneJSON {
  kind: "Cellphone"
}

export class Cellphone {
  static readonly discriminator = 88
  static readonly kind = "Cellphone"
  readonly discriminator = 88
  readonly kind = "Cellphone"

  toJSON(): CellphoneJSON {
    return {
      kind: "Cellphone",
    }
  }

  toEncodable() {
    return {
      Cellphone: {},
    }
  }
}

export interface HouseJSON {
  kind: "House"
}

export class House {
  static readonly discriminator = 89
  static readonly kind = "House"
  readonly discriminator = 89
  readonly kind = "House"

  toJSON(): HouseJSON {
    return {
      kind: "House",
    }
  }

  toEncodable() {
    return {
      House: {},
    }
  }
}

export interface BoatJSON {
  kind: "Boat"
}

export class Boat {
  static readonly discriminator = 90
  static readonly kind = "Boat"
  readonly discriminator = 90
  readonly kind = "Boat"

  toJSON(): BoatJSON {
    return {
      kind: "Boat",
    }
  }

  toEncodable() {
    return {
      Boat: {},
    }
  }
}

export interface SmoothieJSON {
  kind: "Smoothie"
}

export class Smoothie {
  static readonly discriminator = 91
  static readonly kind = "Smoothie"
  readonly discriminator = 91
  readonly kind = "Smoothie"

  toJSON(): SmoothieJSON {
    return {
      kind: "Smoothie",
    }
  }

  toEncodable() {
    return {
      Smoothie: {},
    }
  }
}

export interface InternetJSON {
  kind: "Internet"
}

export class Internet {
  static readonly discriminator = 92
  static readonly kind = "Internet"
  readonly discriminator = 92
  readonly kind = "Internet"

  toJSON(): InternetJSON {
    return {
      kind: "Internet",
    }
  }

  toEncodable() {
    return {
      Internet: {},
    }
  }
}

export interface ThiefJSON {
  kind: "Thief"
}

export class Thief {
  static readonly discriminator = 93
  static readonly kind = "Thief"
  readonly discriminator = 93
  readonly kind = "Thief"

  toJSON(): ThiefJSON {
    return {
      kind: "Thief",
    }
  }

  toEncodable() {
    return {
      Thief: {},
    }
  }
}

export interface LoanSharkJSON {
  kind: "LoanShark"
}

export class LoanShark {
  static readonly discriminator = 94
  static readonly kind = "LoanShark"
  readonly discriminator = 94
  readonly kind = "LoanShark"

  toJSON(): LoanSharkJSON {
    return {
      kind: "LoanShark",
    }
  }

  toEncodable() {
    return {
      LoanShark: {},
    }
  }
}

export interface ZooJSON {
  kind: "Zoo"
}

export class Zoo {
  static readonly discriminator = 95
  static readonly kind = "Zoo"
  readonly discriminator = 95
  readonly kind = "Zoo"

  toJSON(): ZooJSON {
    return {
      kind: "Zoo",
    }
  }

  toEncodable() {
    return {
      Zoo: {},
    }
  }
}

export interface SafeJSON {
  kind: "Safe"
}

export class Safe {
  static readonly discriminator = 96
  static readonly kind = "Safe"
  readonly discriminator = 96
  readonly kind = "Safe"

  toJSON(): SafeJSON {
    return {
      kind: "Safe",
    }
  }

  toEncodable() {
    return {
      Safe: {},
    }
  }
}

export interface RaceJSON {
  kind: "Race"
}

export class Race {
  static readonly discriminator = 97
  static readonly kind = "Race"
  readonly discriminator = 97
  readonly kind = "Race"

  toJSON(): RaceJSON {
    return {
      kind: "Race",
    }
  }

  toEncodable() {
    return {
      Race: {},
    }
  }
}

export interface ToyJSON {
  kind: "Toy"
}

export class Toy {
  static readonly discriminator = 98
  static readonly kind = "Toy"
  readonly discriminator = 98
  readonly kind = "Toy"

  toJSON(): ToyJSON {
    return {
      kind: "Toy",
    }
  }

  toEncodable() {
    return {
      Toy: {},
    }
  }
}

export interface GiftJSON {
  kind: "Gift"
}

export class Gift {
  static readonly discriminator = 99
  static readonly kind = "Gift"
  readonly discriminator = 99
  readonly kind = "Gift"

  toJSON(): GiftJSON {
    return {
      kind: "Gift",
    }
  }

  toEncodable() {
    return {
      Gift: {},
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDecoded(obj: any): types.ElementNameKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("Flame" in obj) {
    return new Flame()
  }
  if ("Sea" in obj) {
    return new Sea()
  }
  if ("Leaf" in obj) {
    return new Leaf()
  }
  if ("Stick" in obj) {
    return new Stick()
  }
  if ("BrokenGlass" in obj) {
    return new BrokenGlass()
  }
  if ("Compression" in obj) {
    return new Compression()
  }
  if ("Rubber" in obj) {
    return new Rubber()
  }
  if ("Pebble" in obj) {
    return new Pebble()
  }
  if ("Oxygen" in obj) {
    return new Oxygen()
  }
  if ("Carbon" in obj) {
    return new Carbon()
  }
  if ("Rock" in obj) {
    return new Rock()
  }
  if ("Toxic" in obj) {
    return new Toxic()
  }
  if ("TemperedGlass" in obj) {
    return new TemperedGlass()
  }
  if ("Salt" in obj) {
    return new Salt()
  }
  if ("FreshWater" in obj) {
    return new FreshWater()
  }
  if ("Flower" in obj) {
    return new Flower()
  }
  if ("Mold" in obj) {
    return new Mold()
  }
  if ("WoodenPlank" in obj) {
    return new WoodenPlank()
  }
  if ("Nest" in obj) {
    return new Nest()
  }
  if ("Bones" in obj) {
    return new Bones()
  }
  if ("Iron" in obj) {
    return new Iron()
  }
  if ("Organism" in obj) {
    return new Organism()
  }
  if ("Lead" in obj) {
    return new Lead()
  }
  if ("Brick" in obj) {
    return new Brick()
  }
  if ("Bee" in obj) {
    return new Bee()
  }
  if ("Hourglass" in obj) {
    return new Hourglass()
  }
  if ("Tire" in obj) {
    return new Tire()
  }
  if ("Aluminum" in obj) {
    return new Aluminum()
  }
  if ("Silver" in obj) {
    return new Silver()
  }
  if ("Soil" in obj) {
    return new Soil()
  }
  if ("Marble" in obj) {
    return new Marble()
  }
  if ("Gravel" in obj) {
    return new Gravel()
  }
  if ("String" in obj) {
    return new String()
  }
  if ("Chair" in obj) {
    return new Chair()
  }
  if ("Fireplace" in obj) {
    return new Fireplace()
  }
  if ("Window" in obj) {
    return new Window()
  }
  if ("Egg" in obj) {
    return new Egg()
  }
  if ("Blood" in obj) {
    return new Blood()
  }
  if ("Spinach" in obj) {
    return new Spinach()
  }
  if ("Steel" in obj) {
    return new Steel()
  }
  if ("Wheel" in obj) {
    return new Wheel()
  }
  if ("PalmTree" in obj) {
    return new PalmTree()
  }
  if ("Wall" in obj) {
    return new Wall()
  }
  if ("Wax" in obj) {
    return new Wax()
  }
  if ("Acid" in obj) {
    return new Acid()
  }
  if ("Diamond" in obj) {
    return new Diamond()
  }
  if ("Fuel" in obj) {
    return new Fuel()
  }
  if ("Chain" in obj) {
    return new Chain()
  }
  if ("Spider" in obj) {
    return new Spider()
  }
  if ("Duck" in obj) {
    return new Duck()
  }
  if ("Silicone" in obj) {
    return new Silicone()
  }
  if ("Blade" in obj) {
    return new Blade()
  }
  if ("Puppet" in obj) {
    return new Puppet()
  }
  if ("Grass" in obj) {
    return new Grass()
  }
  if ("Bench" in obj) {
    return new Bench()
  }
  if ("Greenhouse" in obj) {
    return new Greenhouse()
  }
  if ("Vine" in obj) {
    return new Vine()
  }
  if ("Heart" in obj) {
    return new Heart()
  }
  if ("Mussel" in obj) {
    return new Mussel()
  }
  if ("Coconut" in obj) {
    return new Coconut()
  }
  if ("Horseshoe" in obj) {
    return new Horseshoe()
  }
  if ("Mouse" in obj) {
    return new Mouse()
  }
  if ("Key" in obj) {
    return new Key()
  }
  if ("Honey" in obj) {
    return new Honey()
  }
  if ("Banana" in obj) {
    return new Banana()
  }
  if ("Ring" in obj) {
    return new Ring()
  }
  if ("Engine" in obj) {
    return new Engine()
  }
  if ("Kiwi" in obj) {
    return new Kiwi()
  }
  if ("Gold" in obj) {
    return new Gold()
  }
  if ("Web" in obj) {
    return new Web()
  }
  if ("Battery" in obj) {
    return new Battery()
  }
  if ("Microchip" in obj) {
    return new Microchip()
  }
  if ("Sword" in obj) {
    return new Sword()
  }
  if ("Mirror" in obj) {
    return new Mirror()
  }
  if ("Garden" in obj) {
    return new Garden()
  }
  if ("Ruby" in obj) {
    return new Ruby()
  }
  if ("Pearl" in obj) {
    return new Pearl()
  }
  if ("Blender" in obj) {
    return new Blender()
  }
  if ("Car" in obj) {
    return new Car()
  }
  if ("Horse" in obj) {
    return new Horse()
  }
  if ("Computer" in obj) {
    return new Computer()
  }
  if ("Piano" in obj) {
    return new Piano()
  }
  if ("Money" in obj) {
    return new Money()
  }
  if ("Keyboard" in obj) {
    return new Keyboard()
  }
  if ("Bike" in obj) {
    return new Bike()
  }
  if ("Necklace" in obj) {
    return new Necklace()
  }
  if ("Statue" in obj) {
    return new Statue()
  }
  if ("Monkey" in obj) {
    return new Monkey()
  }
  if ("Cellphone" in obj) {
    return new Cellphone()
  }
  if ("House" in obj) {
    return new House()
  }
  if ("Boat" in obj) {
    return new Boat()
  }
  if ("Smoothie" in obj) {
    return new Smoothie()
  }
  if ("Internet" in obj) {
    return new Internet()
  }
  if ("Thief" in obj) {
    return new Thief()
  }
  if ("LoanShark" in obj) {
    return new LoanShark()
  }
  if ("Zoo" in obj) {
    return new Zoo()
  }
  if ("Safe" in obj) {
    return new Safe()
  }
  if ("Race" in obj) {
    return new Race()
  }
  if ("Toy" in obj) {
    return new Toy()
  }
  if ("Gift" in obj) {
    return new Gift()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(obj: types.ElementNameJSON): types.ElementNameKind {
  switch (obj.kind) {
    case "Flame": {
      return new Flame()
    }
    case "Sea": {
      return new Sea()
    }
    case "Leaf": {
      return new Leaf()
    }
    case "Stick": {
      return new Stick()
    }
    case "BrokenGlass": {
      return new BrokenGlass()
    }
    case "Compression": {
      return new Compression()
    }
    case "Rubber": {
      return new Rubber()
    }
    case "Pebble": {
      return new Pebble()
    }
    case "Oxygen": {
      return new Oxygen()
    }
    case "Carbon": {
      return new Carbon()
    }
    case "Rock": {
      return new Rock()
    }
    case "Toxic": {
      return new Toxic()
    }
    case "TemperedGlass": {
      return new TemperedGlass()
    }
    case "Salt": {
      return new Salt()
    }
    case "FreshWater": {
      return new FreshWater()
    }
    case "Flower": {
      return new Flower()
    }
    case "Mold": {
      return new Mold()
    }
    case "WoodenPlank": {
      return new WoodenPlank()
    }
    case "Nest": {
      return new Nest()
    }
    case "Bones": {
      return new Bones()
    }
    case "Iron": {
      return new Iron()
    }
    case "Organism": {
      return new Organism()
    }
    case "Lead": {
      return new Lead()
    }
    case "Brick": {
      return new Brick()
    }
    case "Bee": {
      return new Bee()
    }
    case "Hourglass": {
      return new Hourglass()
    }
    case "Tire": {
      return new Tire()
    }
    case "Aluminum": {
      return new Aluminum()
    }
    case "Silver": {
      return new Silver()
    }
    case "Soil": {
      return new Soil()
    }
    case "Marble": {
      return new Marble()
    }
    case "Gravel": {
      return new Gravel()
    }
    case "String": {
      return new String()
    }
    case "Chair": {
      return new Chair()
    }
    case "Fireplace": {
      return new Fireplace()
    }
    case "Window": {
      return new Window()
    }
    case "Egg": {
      return new Egg()
    }
    case "Blood": {
      return new Blood()
    }
    case "Spinach": {
      return new Spinach()
    }
    case "Steel": {
      return new Steel()
    }
    case "Wheel": {
      return new Wheel()
    }
    case "PalmTree": {
      return new PalmTree()
    }
    case "Wall": {
      return new Wall()
    }
    case "Wax": {
      return new Wax()
    }
    case "Acid": {
      return new Acid()
    }
    case "Diamond": {
      return new Diamond()
    }
    case "Fuel": {
      return new Fuel()
    }
    case "Chain": {
      return new Chain()
    }
    case "Spider": {
      return new Spider()
    }
    case "Duck": {
      return new Duck()
    }
    case "Silicone": {
      return new Silicone()
    }
    case "Blade": {
      return new Blade()
    }
    case "Puppet": {
      return new Puppet()
    }
    case "Grass": {
      return new Grass()
    }
    case "Bench": {
      return new Bench()
    }
    case "Greenhouse": {
      return new Greenhouse()
    }
    case "Vine": {
      return new Vine()
    }
    case "Heart": {
      return new Heart()
    }
    case "Mussel": {
      return new Mussel()
    }
    case "Coconut": {
      return new Coconut()
    }
    case "Horseshoe": {
      return new Horseshoe()
    }
    case "Mouse": {
      return new Mouse()
    }
    case "Key": {
      return new Key()
    }
    case "Honey": {
      return new Honey()
    }
    case "Banana": {
      return new Banana()
    }
    case "Ring": {
      return new Ring()
    }
    case "Engine": {
      return new Engine()
    }
    case "Kiwi": {
      return new Kiwi()
    }
    case "Gold": {
      return new Gold()
    }
    case "Web": {
      return new Web()
    }
    case "Battery": {
      return new Battery()
    }
    case "Microchip": {
      return new Microchip()
    }
    case "Sword": {
      return new Sword()
    }
    case "Mirror": {
      return new Mirror()
    }
    case "Garden": {
      return new Garden()
    }
    case "Ruby": {
      return new Ruby()
    }
    case "Pearl": {
      return new Pearl()
    }
    case "Blender": {
      return new Blender()
    }
    case "Car": {
      return new Car()
    }
    case "Horse": {
      return new Horse()
    }
    case "Computer": {
      return new Computer()
    }
    case "Piano": {
      return new Piano()
    }
    case "Money": {
      return new Money()
    }
    case "Keyboard": {
      return new Keyboard()
    }
    case "Bike": {
      return new Bike()
    }
    case "Necklace": {
      return new Necklace()
    }
    case "Statue": {
      return new Statue()
    }
    case "Monkey": {
      return new Monkey()
    }
    case "Cellphone": {
      return new Cellphone()
    }
    case "House": {
      return new House()
    }
    case "Boat": {
      return new Boat()
    }
    case "Smoothie": {
      return new Smoothie()
    }
    case "Internet": {
      return new Internet()
    }
    case "Thief": {
      return new Thief()
    }
    case "LoanShark": {
      return new LoanShark()
    }
    case "Zoo": {
      return new Zoo()
    }
    case "Safe": {
      return new Safe()
    }
    case "Race": {
      return new Race()
    }
    case "Toy": {
      return new Toy()
    }
    case "Gift": {
      return new Gift()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([], "Flame"),
    borsh.struct([], "Sea"),
    borsh.struct([], "Leaf"),
    borsh.struct([], "Stick"),
    borsh.struct([], "BrokenGlass"),
    borsh.struct([], "Compression"),
    borsh.struct([], "Rubber"),
    borsh.struct([], "Pebble"),
    borsh.struct([], "Oxygen"),
    borsh.struct([], "Carbon"),
    borsh.struct([], "Rock"),
    borsh.struct([], "Toxic"),
    borsh.struct([], "TemperedGlass"),
    borsh.struct([], "Salt"),
    borsh.struct([], "FreshWater"),
    borsh.struct([], "Flower"),
    borsh.struct([], "Mold"),
    borsh.struct([], "WoodenPlank"),
    borsh.struct([], "Nest"),
    borsh.struct([], "Bones"),
    borsh.struct([], "Iron"),
    borsh.struct([], "Organism"),
    borsh.struct([], "Lead"),
    borsh.struct([], "Brick"),
    borsh.struct([], "Bee"),
    borsh.struct([], "Hourglass"),
    borsh.struct([], "Tire"),
    borsh.struct([], "Aluminum"),
    borsh.struct([], "Silver"),
    borsh.struct([], "Soil"),
    borsh.struct([], "Marble"),
    borsh.struct([], "Gravel"),
    borsh.struct([], "String"),
    borsh.struct([], "Chair"),
    borsh.struct([], "Fireplace"),
    borsh.struct([], "Window"),
    borsh.struct([], "Egg"),
    borsh.struct([], "Blood"),
    borsh.struct([], "Spinach"),
    borsh.struct([], "Steel"),
    borsh.struct([], "Wheel"),
    borsh.struct([], "PalmTree"),
    borsh.struct([], "Wall"),
    borsh.struct([], "Wax"),
    borsh.struct([], "Acid"),
    borsh.struct([], "Diamond"),
    borsh.struct([], "Fuel"),
    borsh.struct([], "Chain"),
    borsh.struct([], "Spider"),
    borsh.struct([], "Duck"),
    borsh.struct([], "Silicone"),
    borsh.struct([], "Blade"),
    borsh.struct([], "Puppet"),
    borsh.struct([], "Grass"),
    borsh.struct([], "Bench"),
    borsh.struct([], "Greenhouse"),
    borsh.struct([], "Vine"),
    borsh.struct([], "Heart"),
    borsh.struct([], "Mussel"),
    borsh.struct([], "Coconut"),
    borsh.struct([], "Horseshoe"),
    borsh.struct([], "Mouse"),
    borsh.struct([], "Key"),
    borsh.struct([], "Honey"),
    borsh.struct([], "Banana"),
    borsh.struct([], "Ring"),
    borsh.struct([], "Engine"),
    borsh.struct([], "Kiwi"),
    borsh.struct([], "Gold"),
    borsh.struct([], "Web"),
    borsh.struct([], "Battery"),
    borsh.struct([], "Microchip"),
    borsh.struct([], "Sword"),
    borsh.struct([], "Mirror"),
    borsh.struct([], "Garden"),
    borsh.struct([], "Ruby"),
    borsh.struct([], "Pearl"),
    borsh.struct([], "Blender"),
    borsh.struct([], "Car"),
    borsh.struct([], "Horse"),
    borsh.struct([], "Computer"),
    borsh.struct([], "Piano"),
    borsh.struct([], "Money"),
    borsh.struct([], "Keyboard"),
    borsh.struct([], "Bike"),
    borsh.struct([], "Necklace"),
    borsh.struct([], "Statue"),
    borsh.struct([], "Monkey"),
    borsh.struct([], "Cellphone"),
    borsh.struct([], "House"),
    borsh.struct([], "Boat"),
    borsh.struct([], "Smoothie"),
    borsh.struct([], "Internet"),
    borsh.struct([], "Thief"),
    borsh.struct([], "LoanShark"),
    borsh.struct([], "Zoo"),
    borsh.struct([], "Safe"),
    borsh.struct([], "Race"),
    borsh.struct([], "Toy"),
    borsh.struct([], "Gift"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
