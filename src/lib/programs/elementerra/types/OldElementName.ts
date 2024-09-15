import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface AirJSON {
  kind: "Air"
}

export class Air {
  static readonly discriminator = 0
  static readonly kind = "Air"
  readonly discriminator = 0
  readonly kind = "Air"

  toJSON(): AirJSON {
    return {
      kind: "Air",
    }
  }

  toEncodable() {
    return {
      Air: {},
    }
  }
}

export interface FireJSON {
  kind: "Fire"
}

export class Fire {
  static readonly discriminator = 1
  static readonly kind = "Fire"
  readonly discriminator = 1
  readonly kind = "Fire"

  toJSON(): FireJSON {
    return {
      kind: "Fire",
    }
  }

  toEncodable() {
    return {
      Fire: {},
    }
  }
}

export interface EarthJSON {
  kind: "Earth"
}

export class Earth {
  static readonly discriminator = 2
  static readonly kind = "Earth"
  readonly discriminator = 2
  readonly kind = "Earth"

  toJSON(): EarthJSON {
    return {
      kind: "Earth",
    }
  }

  toEncodable() {
    return {
      Earth: {},
    }
  }
}

export interface WaterJSON {
  kind: "Water"
}

export class Water {
  static readonly discriminator = 3
  static readonly kind = "Water"
  readonly discriminator = 3
  readonly kind = "Water"

  toJSON(): WaterJSON {
    return {
      kind: "Water",
    }
  }

  toEncodable() {
    return {
      Water: {},
    }
  }
}

export interface HeatJSON {
  kind: "Heat"
}

export class Heat {
  static readonly discriminator = 4
  static readonly kind = "Heat"
  readonly discriminator = 4
  readonly kind = "Heat"

  toJSON(): HeatJSON {
    return {
      kind: "Heat",
    }
  }

  toEncodable() {
    return {
      Heat: {},
    }
  }
}

export interface SteamJSON {
  kind: "Steam"
}

export class Steam {
  static readonly discriminator = 5
  static readonly kind = "Steam"
  readonly discriminator = 5
  readonly kind = "Steam"

  toJSON(): SteamJSON {
    return {
      kind: "Steam",
    }
  }

  toEncodable() {
    return {
      Steam: {},
    }
  }
}

export interface MudJSON {
  kind: "Mud"
}

export class Mud {
  static readonly discriminator = 6
  static readonly kind = "Mud"
  readonly discriminator = 6
  readonly kind = "Mud"

  toJSON(): MudJSON {
    return {
      kind: "Mud",
    }
  }

  toEncodable() {
    return {
      Mud: {},
    }
  }
}

export interface PressureJSON {
  kind: "Pressure"
}

export class Pressure {
  static readonly discriminator = 7
  static readonly kind = "Pressure"
  readonly discriminator = 7
  readonly kind = "Pressure"

  toJSON(): PressureJSON {
    return {
      kind: "Pressure",
    }
  }

  toEncodable() {
    return {
      Pressure: {},
    }
  }
}

export interface RainJSON {
  kind: "Rain"
}

export class Rain {
  static readonly discriminator = 8
  static readonly kind = "Rain"
  readonly discriminator = 8
  readonly kind = "Rain"

  toJSON(): RainJSON {
    return {
      kind: "Rain",
    }
  }

  toEncodable() {
    return {
      Rain: {},
    }
  }
}

export interface WindJSON {
  kind: "Wind"
}

export class Wind {
  static readonly discriminator = 9
  static readonly kind = "Wind"
  readonly discriminator = 9
  readonly kind = "Wind"

  toJSON(): WindJSON {
    return {
      kind: "Wind",
    }
  }

  toEncodable() {
    return {
      Wind: {},
    }
  }
}

export interface LavaJSON {
  kind: "Lava"
}

export class Lava {
  static readonly discriminator = 10
  static readonly kind = "Lava"
  readonly discriminator = 10
  readonly kind = "Lava"

  toJSON(): LavaJSON {
    return {
      kind: "Lava",
    }
  }

  toEncodable() {
    return {
      Lava: {},
    }
  }
}

export interface LifeJSON {
  kind: "Life"
}

export class Life {
  static readonly discriminator = 11
  static readonly kind = "Life"
  readonly discriminator = 11
  readonly kind = "Life"

  toJSON(): LifeJSON {
    return {
      kind: "Life",
    }
  }

  toEncodable() {
    return {
      Life: {},
    }
  }
}

export interface SmokeJSON {
  kind: "Smoke"
}

export class Smoke {
  static readonly discriminator = 12
  static readonly kind = "Smoke"
  readonly discriminator = 12
  readonly kind = "Smoke"

  toJSON(): SmokeJSON {
    return {
      kind: "Smoke",
    }
  }

  toEncodable() {
    return {
      Smoke: {},
    }
  }
}

export interface DustJSON {
  kind: "Dust"
}

export class Dust {
  static readonly discriminator = 13
  static readonly kind = "Dust"
  readonly discriminator = 13
  readonly kind = "Dust"

  toJSON(): DustJSON {
    return {
      kind: "Dust",
    }
  }

  toEncodable() {
    return {
      Dust: {},
    }
  }
}

export interface FogJSON {
  kind: "Fog"
}

export class Fog {
  static readonly discriminator = 14
  static readonly kind = "Fog"
  readonly discriminator = 14
  readonly kind = "Fog"

  toJSON(): FogJSON {
    return {
      kind: "Fog",
    }
  }

  toEncodable() {
    return {
      Fog: {},
    }
  }
}

export interface EnergyJSON {
  kind: "Energy"
}

export class Energy {
  static readonly discriminator = 15
  static readonly kind = "Energy"
  readonly discriminator = 15
  readonly kind = "Energy"

  toJSON(): EnergyJSON {
    return {
      kind: "Energy",
    }
  }

  toEncodable() {
    return {
      Energy: {},
    }
  }
}

export interface SeedJSON {
  kind: "Seed"
}

export class Seed {
  static readonly discriminator = 16
  static readonly kind = "Seed"
  readonly discriminator = 16
  readonly kind = "Seed"

  toJSON(): SeedJSON {
    return {
      kind: "Seed",
    }
  }

  toEncodable() {
    return {
      Seed: {},
    }
  }
}

export interface MetalJSON {
  kind: "Metal"
}

export class Metal {
  static readonly discriminator = 17
  static readonly kind = "Metal"
  readonly discriminator = 17
  readonly kind = "Metal"

  toJSON(): MetalJSON {
    return {
      kind: "Metal",
    }
  }

  toEncodable() {
    return {
      Metal: {},
    }
  }
}

export interface OceanJSON {
  kind: "Ocean"
}

export class Ocean {
  static readonly discriminator = 18
  static readonly kind = "Ocean"
  readonly discriminator = 18
  readonly kind = "Ocean"

  toJSON(): OceanJSON {
    return {
      kind: "Ocean",
    }
  }

  toEncodable() {
    return {
      Ocean: {},
    }
  }
}

export interface GlassJSON {
  kind: "Glass"
}

export class Glass {
  static readonly discriminator = 19
  static readonly kind = "Glass"
  readonly discriminator = 19
  readonly kind = "Glass"

  toJSON(): GlassJSON {
    return {
      kind: "Glass",
    }
  }

  toEncodable() {
    return {
      Glass: {},
    }
  }
}

export interface ClayJSON {
  kind: "Clay"
}

export class Clay {
  static readonly discriminator = 20
  static readonly kind = "Clay"
  readonly discriminator = 20
  readonly kind = "Clay"

  toJSON(): ClayJSON {
    return {
      kind: "Clay",
    }
  }

  toEncodable() {
    return {
      Clay: {},
    }
  }
}

export interface CloudJSON {
  kind: "Cloud"
}

export class Cloud {
  static readonly discriminator = 21
  static readonly kind = "Cloud"
  readonly discriminator = 21
  readonly kind = "Cloud"

  toJSON(): CloudJSON {
    return {
      kind: "Cloud",
    }
  }

  toEncodable() {
    return {
      Cloud: {},
    }
  }
}

export interface StoneJSON {
  kind: "Stone"
}

export class Stone {
  static readonly discriminator = 22
  static readonly kind = "Stone"
  readonly discriminator = 22
  readonly kind = "Stone"

  toJSON(): StoneJSON {
    return {
      kind: "Stone",
    }
  }

  toEncodable() {
    return {
      Stone: {},
    }
  }
}

export interface SunJSON {
  kind: "Sun"
}

export class Sun {
  static readonly discriminator = 23
  static readonly kind = "Sun"
  readonly discriminator = 23
  readonly kind = "Sun"

  toJSON(): SunJSON {
    return {
      kind: "Sun",
    }
  }

  toEncodable() {
    return {
      Sun: {},
    }
  }
}

export interface TimeJSON {
  kind: "Time"
}

export class Time {
  static readonly discriminator = 24
  static readonly kind = "Time"
  readonly discriminator = 24
  readonly kind = "Time"

  toJSON(): TimeJSON {
    return {
      kind: "Time",
    }
  }

  toEncodable() {
    return {
      Time: {},
    }
  }
}

export interface OilJSON {
  kind: "Oil"
}

export class Oil {
  static readonly discriminator = 25
  static readonly kind = "Oil"
  readonly discriminator = 25
  readonly kind = "Oil"

  toJSON(): OilJSON {
    return {
      kind: "Oil",
    }
  }

  toEncodable() {
    return {
      Oil: {},
    }
  }
}

export interface WaveJSON {
  kind: "Wave"
}

export class Wave {
  static readonly discriminator = 26
  static readonly kind = "Wave"
  readonly discriminator = 26
  readonly kind = "Wave"

  toJSON(): WaveJSON {
    return {
      kind: "Wave",
    }
  }

  toEncodable() {
    return {
      Wave: {},
    }
  }
}

export interface AshJSON {
  kind: "Ash"
}

export class Ash {
  static readonly discriminator = 27
  static readonly kind = "Ash"
  readonly discriminator = 27
  readonly kind = "Ash"

  toJSON(): AshJSON {
    return {
      kind: "Ash",
    }
  }

  toEncodable() {
    return {
      Ash: {},
    }
  }
}

export interface SwampJSON {
  kind: "Swamp"
}

export class Swamp {
  static readonly discriminator = 28
  static readonly kind = "Swamp"
  readonly discriminator = 28
  readonly kind = "Swamp"

  toJSON(): SwampJSON {
    return {
      kind: "Swamp",
    }
  }

  toEncodable() {
    return {
      Swamp: {},
    }
  }
}

export interface RiverJSON {
  kind: "River"
}

export class River {
  static readonly discriminator = 29
  static readonly kind = "River"
  readonly discriminator = 29
  readonly kind = "River"

  toJSON(): RiverJSON {
    return {
      kind: "River",
    }
  }

  toEncodable() {
    return {
      River: {},
    }
  }
}

export interface WormJSON {
  kind: "Worm"
}

export class Worm {
  static readonly discriminator = 30
  static readonly kind = "Worm"
  readonly discriminator = 30
  readonly kind = "Worm"

  toJSON(): WormJSON {
    return {
      kind: "Worm",
    }
  }

  toEncodable() {
    return {
      Worm: {},
    }
  }
}

export interface TornadoJSON {
  kind: "Tornado"
}

export class Tornado {
  static readonly discriminator = 31
  static readonly kind = "Tornado"
  readonly discriminator = 31
  readonly kind = "Tornado"

  toJSON(): TornadoJSON {
    return {
      kind: "Tornado",
    }
  }

  toEncodable() {
    return {
      Tornado: {},
    }
  }
}

export interface SandJSON {
  kind: "Sand"
}

export class Sand {
  static readonly discriminator = 32
  static readonly kind = "Sand"
  readonly discriminator = 32
  readonly kind = "Sand"

  toJSON(): SandJSON {
    return {
      kind: "Sand",
    }
  }

  toEncodable() {
    return {
      Sand: {},
    }
  }
}

export interface MountainJSON {
  kind: "Mountain"
}

export class Mountain {
  static readonly discriminator = 33
  static readonly kind = "Mountain"
  readonly discriminator = 33
  readonly kind = "Mountain"

  toJSON(): MountainJSON {
    return {
      kind: "Mountain",
    }
  }

  toEncodable() {
    return {
      Mountain: {},
    }
  }
}

export interface SnowJSON {
  kind: "Snow"
}

export class Snow {
  static readonly discriminator = 34
  static readonly kind = "Snow"
  readonly discriminator = 34
  readonly kind = "Snow"

  toJSON(): SnowJSON {
    return {
      kind: "Snow",
    }
  }

  toEncodable() {
    return {
      Snow: {},
    }
  }
}

export interface FrostJSON {
  kind: "Frost"
}

export class Frost {
  static readonly discriminator = 35
  static readonly kind = "Frost"
  readonly discriminator = 35
  readonly kind = "Frost"

  toJSON(): FrostJSON {
    return {
      kind: "Frost",
    }
  }

  toEncodable() {
    return {
      Frost: {},
    }
  }
}

export interface MagnetJSON {
  kind: "Magnet"
}

export class Magnet {
  static readonly discriminator = 36
  static readonly kind = "Magnet"
  readonly discriminator = 36
  readonly kind = "Magnet"

  toJSON(): MagnetJSON {
    return {
      kind: "Magnet",
    }
  }

  toEncodable() {
    return {
      Magnet: {},
    }
  }
}

export interface FossilJSON {
  kind: "Fossil"
}

export class Fossil {
  static readonly discriminator = 37
  static readonly kind = "Fossil"
  readonly discriminator = 37
  readonly kind = "Fossil"

  toJSON(): FossilJSON {
    return {
      kind: "Fossil",
    }
  }

  toEncodable() {
    return {
      Fossil: {},
    }
  }
}

export interface HotSpringsJSON {
  kind: "HotSprings"
}

export class HotSprings {
  static readonly discriminator = 38
  static readonly kind = "HotSprings"
  readonly discriminator = 38
  readonly kind = "HotSprings"

  toJSON(): HotSpringsJSON {
    return {
      kind: "HotSprings",
    }
  }

  toEncodable() {
    return {
      HotSprings: {},
    }
  }
}

export interface PondJSON {
  kind: "Pond"
}

export class Pond {
  static readonly discriminator = 39
  static readonly kind = "Pond"
  readonly discriminator = 39
  readonly kind = "Pond"

  toJSON(): PondJSON {
    return {
      kind: "Pond",
    }
  }

  toEncodable() {
    return {
      Pond: {},
    }
  }
}

export interface CoalJSON {
  kind: "Coal"
}

export class Coal {
  static readonly discriminator = 40
  static readonly kind = "Coal"
  readonly discriminator = 40
  readonly kind = "Coal"

  toJSON(): CoalJSON {
    return {
      kind: "Coal",
    }
  }

  toEncodable() {
    return {
      Coal: {},
    }
  }
}

export interface TelescopeJSON {
  kind: "Telescope"
}

export class Telescope {
  static readonly discriminator = 41
  static readonly kind = "Telescope"
  readonly discriminator = 41
  readonly kind = "Telescope"

  toJSON(): TelescopeJSON {
    return {
      kind: "Telescope",
    }
  }

  toEncodable() {
    return {
      Telescope: {},
    }
  }
}

export interface VolcanoJSON {
  kind: "Volcano"
}

export class Volcano {
  static readonly discriminator = 42
  static readonly kind = "Volcano"
  readonly discriminator = 42
  readonly kind = "Volcano"

  toJSON(): VolcanoJSON {
    return {
      kind: "Volcano",
    }
  }

  toEncodable() {
    return {
      Volcano: {},
    }
  }
}

export interface PlasticJSON {
  kind: "Plastic"
}

export class Plastic {
  static readonly discriminator = 43
  static readonly kind = "Plastic"
  readonly discriminator = 43
  readonly kind = "Plastic"

  toJSON(): PlasticJSON {
    return {
      kind: "Plastic",
    }
  }

  toEncodable() {
    return {
      Plastic: {},
    }
  }
}

export interface GasolineJSON {
  kind: "Gasoline"
}

export class Gasoline {
  static readonly discriminator = 44
  static readonly kind = "Gasoline"
  readonly discriminator = 44
  readonly kind = "Gasoline"

  toJSON(): GasolineJSON {
    return {
      kind: "Gasoline",
    }
  }

  toEncodable() {
    return {
      Gasoline: {},
    }
  }
}

export interface BottleJSON {
  kind: "Bottle"
}

export class Bottle {
  static readonly discriminator = 45
  static readonly kind = "Bottle"
  readonly discriminator = 45
  readonly kind = "Bottle"

  toJSON(): BottleJSON {
    return {
      kind: "Bottle",
    }
  }

  toEncodable() {
    return {
      Bottle: {},
    }
  }
}

export interface SkyJSON {
  kind: "Sky"
}

export class Sky {
  static readonly discriminator = 46
  static readonly kind = "Sky"
  readonly discriminator = 46
  readonly kind = "Sky"

  toJSON(): SkyJSON {
    return {
      kind: "Sky",
    }
  }

  toEncodable() {
    return {
      Sky: {},
    }
  }
}

export interface StormJSON {
  kind: "Storm"
}

export class Storm {
  static readonly discriminator = 47
  static readonly kind = "Storm"
  readonly discriminator = 47
  readonly kind = "Storm"

  toJSON(): StormJSON {
    return {
      kind: "Storm",
    }
  }

  toEncodable() {
    return {
      Storm: {},
    }
  }
}

export interface PlantJSON {
  kind: "Plant"
}

export class Plant {
  static readonly discriminator = 48
  static readonly kind = "Plant"
  readonly discriminator = 48
  readonly kind = "Plant"

  toJSON(): PlantJSON {
    return {
      kind: "Plant",
    }
  }

  toEncodable() {
    return {
      Plant: {},
    }
  }
}

export interface NailJSON {
  kind: "Nail"
}

export class Nail {
  static readonly discriminator = 49
  static readonly kind = "Nail"
  readonly discriminator = 49
  readonly kind = "Nail"

  toJSON(): NailJSON {
    return {
      kind: "Nail",
    }
  }

  toEncodable() {
    return {
      Nail: {},
    }
  }
}

export interface SoundJSON {
  kind: "Sound"
}

export class Sound {
  static readonly discriminator = 50
  static readonly kind = "Sound"
  readonly discriminator = 50
  readonly kind = "Sound"

  toJSON(): SoundJSON {
    return {
      kind: "Sound",
    }
  }

  toEncodable() {
    return {
      Sound: {},
    }
  }
}

export interface PaintJSON {
  kind: "Paint"
}

export class Paint {
  static readonly discriminator = 51
  static readonly kind = "Paint"
  readonly discriminator = 51
  readonly kind = "Paint"

  toJSON(): PaintJSON {
    return {
      kind: "Paint",
    }
  }

  toEncodable() {
    return {
      Paint: {},
    }
  }
}

export interface AlcoholJSON {
  kind: "Alcohol"
}

export class Alcohol {
  static readonly discriminator = 52
  static readonly kind = "Alcohol"
  readonly discriminator = 52
  readonly kind = "Alcohol"

  toJSON(): AlcoholJSON {
    return {
      kind: "Alcohol",
    }
  }

  toEncodable() {
    return {
      Alcohol: {},
    }
  }
}

export interface DesertJSON {
  kind: "Desert"
}

export class Desert {
  static readonly discriminator = 53
  static readonly kind = "Desert"
  readonly discriminator = 53
  readonly kind = "Desert"

  toJSON(): DesertJSON {
    return {
      kind: "Desert",
    }
  }

  toEncodable() {
    return {
      Desert: {},
    }
  }
}

export interface SolarPanelJSON {
  kind: "SolarPanel"
}

export class SolarPanel {
  static readonly discriminator = 54
  static readonly kind = "SolarPanel"
  readonly discriminator = 54
  readonly kind = "SolarPanel"

  toJSON(): SolarPanelJSON {
    return {
      kind: "SolarPanel",
    }
  }

  toEncodable() {
    return {
      SolarPanel: {},
    }
  }
}

export interface WindmillJSON {
  kind: "Windmill"
}

export class Windmill {
  static readonly discriminator = 55
  static readonly kind = "Windmill"
  readonly discriminator = 55
  readonly kind = "Windmill"

  toJSON(): WindmillJSON {
    return {
      kind: "Windmill",
    }
  }

  toEncodable() {
    return {
      Windmill: {},
    }
  }
}

export interface FurnaceJSON {
  kind: "Furnace"
}

export class Furnace {
  static readonly discriminator = 56
  static readonly kind = "Furnace"
  readonly discriminator = 56
  readonly kind = "Furnace"

  toJSON(): FurnaceJSON {
    return {
      kind: "Furnace",
    }
  }

  toEncodable() {
    return {
      Furnace: {},
    }
  }
}

export interface DamJSON {
  kind: "Dam"
}

export class Dam {
  static readonly discriminator = 57
  static readonly kind = "Dam"
  readonly discriminator = 57
  readonly kind = "Dam"

  toJSON(): DamJSON {
    return {
      kind: "Dam",
    }
  }

  toEncodable() {
    return {
      Dam: {},
    }
  }
}

export interface FireExtinguisherJSON {
  kind: "FireExtinguisher"
}

export class FireExtinguisher {
  static readonly discriminator = 58
  static readonly kind = "FireExtinguisher"
  readonly discriminator = 58
  readonly kind = "FireExtinguisher"

  toJSON(): FireExtinguisherJSON {
    return {
      kind: "FireExtinguisher",
    }
  }

  toEncodable() {
    return {
      FireExtinguisher: {},
    }
  }
}

export interface SquidJSON {
  kind: "Squid"
}

export class Squid {
  static readonly discriminator = 59
  static readonly kind = "Squid"
  readonly discriminator = 59
  readonly kind = "Squid"

  toJSON(): SquidJSON {
    return {
      kind: "Squid",
    }
  }

  toEncodable() {
    return {
      Squid: {},
    }
  }
}

export interface TreeJSON {
  kind: "Tree"
}

export class Tree {
  static readonly discriminator = 60
  static readonly kind = "Tree"
  readonly discriminator = 60
  readonly kind = "Tree"

  toJSON(): TreeJSON {
    return {
      kind: "Tree",
    }
  }

  toEncodable() {
    return {
      Tree: {},
    }
  }
}

export interface CoralJSON {
  kind: "Coral"
}

export class Coral {
  static readonly discriminator = 61
  static readonly kind = "Coral"
  readonly discriminator = 61
  readonly kind = "Coral"

  toJSON(): CoralJSON {
    return {
      kind: "Coral",
    }
  }

  toEncodable() {
    return {
      Coral: {},
    }
  }
}

export interface GasJSON {
  kind: "Gas"
}

export class Gas {
  static readonly discriminator = 62
  static readonly kind = "Gas"
  readonly discriminator = 62
  readonly kind = "Gas"

  toJSON(): GasJSON {
    return {
      kind: "Gas",
    }
  }

  toEncodable() {
    return {
      Gas: {},
    }
  }
}

export interface MeteorJSON {
  kind: "Meteor"
}

export class Meteor {
  static readonly discriminator = 63
  static readonly kind = "Meteor"
  readonly discriminator = 63
  readonly kind = "Meteor"

  toJSON(): MeteorJSON {
    return {
      kind: "Meteor",
    }
  }

  toEncodable() {
    return {
      Meteor: {},
    }
  }
}

export interface ElectricityJSON {
  kind: "Electricity"
}

export class Electricity {
  static readonly discriminator = 64
  static readonly kind = "Electricity"
  readonly discriminator = 64
  readonly kind = "Electricity"

  toJSON(): ElectricityJSON {
    return {
      kind: "Electricity",
    }
  }

  toEncodable() {
    return {
      Electricity: {},
    }
  }
}

export interface WireJSON {
  kind: "Wire"
}

export class Wire {
  static readonly discriminator = 65
  static readonly kind = "Wire"
  readonly discriminator = 65
  readonly kind = "Wire"

  toJSON(): WireJSON {
    return {
      kind: "Wire",
    }
  }

  toEncodable() {
    return {
      Wire: {},
    }
  }
}

export interface BeanJSON {
  kind: "Bean"
}

export class Bean {
  static readonly discriminator = 66
  static readonly kind = "Bean"
  readonly discriminator = 66
  readonly kind = "Bean"

  toJSON(): BeanJSON {
    return {
      kind: "Bean",
    }
  }

  toEncodable() {
    return {
      Bean: {},
    }
  }
}

export interface SugarJSON {
  kind: "Sugar"
}

export class Sugar {
  static readonly discriminator = 67
  static readonly kind = "Sugar"
  readonly discriminator = 67
  readonly kind = "Sugar"

  toJSON(): SugarJSON {
    return {
      kind: "Sugar",
    }
  }

  toEncodable() {
    return {
      Sugar: {},
    }
  }
}

export interface ExplosionJSON {
  kind: "Explosion"
}

export class Explosion {
  static readonly discriminator = 68
  static readonly kind = "Explosion"
  readonly discriminator = 68
  readonly kind = "Explosion"

  toJSON(): ExplosionJSON {
    return {
      kind: "Explosion",
    }
  }

  toEncodable() {
    return {
      Explosion: {},
    }
  }
}

export interface MusicJSON {
  kind: "Music"
}

export class Music {
  static readonly discriminator = 69
  static readonly kind = "Music"
  readonly discriminator = 69
  readonly kind = "Music"

  toJSON(): MusicJSON {
    return {
      kind: "Music",
    }
  }

  toEncodable() {
    return {
      Music: {},
    }
  }
}

export interface ClothJSON {
  kind: "Cloth"
}

export class Cloth {
  static readonly discriminator = 70
  static readonly kind = "Cloth"
  readonly discriminator = 70
  readonly kind = "Cloth"

  toJSON(): ClothJSON {
    return {
      kind: "Cloth",
    }
  }

  toEncodable() {
    return {
      Cloth: {},
    }
  }
}

export interface UmbrellaJSON {
  kind: "Umbrella"
}

export class Umbrella {
  static readonly discriminator = 71
  static readonly kind = "Umbrella"
  readonly discriminator = 71
  readonly kind = "Umbrella"

  toJSON(): UmbrellaJSON {
    return {
      kind: "Umbrella",
    }
  }

  toEncodable() {
    return {
      Umbrella: {},
    }
  }
}

export interface BalloonJSON {
  kind: "Balloon"
}

export class Balloon {
  static readonly discriminator = 72
  static readonly kind = "Balloon"
  readonly discriminator = 72
  readonly kind = "Balloon"

  toJSON(): BalloonJSON {
    return {
      kind: "Balloon",
    }
  }

  toEncodable() {
    return {
      Balloon: {},
    }
  }
}

export interface IslandJSON {
  kind: "Island"
}

export class Island {
  static readonly discriminator = 73
  static readonly kind = "Island"
  readonly discriminator = 73
  readonly kind = "Island"

  toJSON(): IslandJSON {
    return {
      kind: "Island",
    }
  }

  toEncodable() {
    return {
      Island: {},
    }
  }
}

export interface CactusJSON {
  kind: "Cactus"
}

export class Cactus {
  static readonly discriminator = 74
  static readonly kind = "Cactus"
  readonly discriminator = 74
  readonly kind = "Cactus"

  toJSON(): CactusJSON {
    return {
      kind: "Cactus",
    }
  }

  toEncodable() {
    return {
      Cactus: {},
    }
  }
}

export interface IceJSON {
  kind: "Ice"
}

export class Ice {
  static readonly discriminator = 75
  static readonly kind = "Ice"
  readonly discriminator = 75
  readonly kind = "Ice"

  toJSON(): IceJSON {
    return {
      kind: "Ice",
    }
  }

  toEncodable() {
    return {
      Ice: {},
    }
  }
}

export interface BlizzardJSON {
  kind: "Blizzard"
}

export class Blizzard {
  static readonly discriminator = 76
  static readonly kind = "Blizzard"
  readonly discriminator = 76
  readonly kind = "Blizzard"

  toJSON(): BlizzardJSON {
    return {
      kind: "Blizzard",
    }
  }

  toEncodable() {
    return {
      Blizzard: {},
    }
  }
}

export interface InkJSON {
  kind: "Ink"
}

export class Ink {
  static readonly discriminator = 77
  static readonly kind = "Ink"
  readonly discriminator = 77
  readonly kind = "Ink"

  toJSON(): InkJSON {
    return {
      kind: "Ink",
    }
  }

  toEncodable() {
    return {
      Ink: {},
    }
  }
}

export interface PaperJSON {
  kind: "Paper"
}

export class Paper {
  static readonly discriminator = 78
  static readonly kind = "Paper"
  readonly discriminator = 78
  readonly kind = "Paper"

  toJSON(): PaperJSON {
    return {
      kind: "Paper",
    }
  }

  toEncodable() {
    return {
      Paper: {},
    }
  }
}

export interface AppleJSON {
  kind: "Apple"
}

export class Apple {
  static readonly discriminator = 79
  static readonly kind = "Apple"
  readonly discriminator = 79
  readonly kind = "Apple"

  toJSON(): AppleJSON {
    return {
      kind: "Apple",
    }
  }

  toEncodable() {
    return {
      Apple: {},
    }
  }
}

export interface WoodJSON {
  kind: "Wood"
}

export class Wood {
  static readonly discriminator = 80
  static readonly kind = "Wood"
  readonly discriminator = 80
  readonly kind = "Wood"

  toJSON(): WoodJSON {
    return {
      kind: "Wood",
    }
  }

  toEncodable() {
    return {
      Wood: {},
    }
  }
}

export interface AntennaJSON {
  kind: "Antenna"
}

export class Antenna {
  static readonly discriminator = 81
  static readonly kind = "Antenna"
  readonly discriminator = 81
  readonly kind = "Antenna"

  toJSON(): AntennaJSON {
    return {
      kind: "Antenna",
    }
  }

  toEncodable() {
    return {
      Antenna: {},
    }
  }
}

export interface DolphinJSON {
  kind: "Dolphin"
}

export class Dolphin {
  static readonly discriminator = 82
  static readonly kind = "Dolphin"
  readonly discriminator = 82
  readonly kind = "Dolphin"

  toJSON(): DolphinJSON {
    return {
      kind: "Dolphin",
    }
  }

  toEncodable() {
    return {
      Dolphin: {},
    }
  }
}

export interface BeachJSON {
  kind: "Beach"
}

export class Beach {
  static readonly discriminator = 83
  static readonly kind = "Beach"
  readonly discriminator = 83
  readonly kind = "Beach"

  toJSON(): BeachJSON {
    return {
      kind: "Beach",
    }
  }

  toEncodable() {
    return {
      Beach: {},
    }
  }
}

export interface FireworksJSON {
  kind: "Fireworks"
}

export class Fireworks {
  static readonly discriminator = 84
  static readonly kind = "Fireworks"
  readonly discriminator = 84
  readonly kind = "Fireworks"

  toJSON(): FireworksJSON {
    return {
      kind: "Fireworks",
    }
  }

  toEncodable() {
    return {
      Fireworks: {},
    }
  }
}

export interface LightningJSON {
  kind: "Lightning"
}

export class Lightning {
  static readonly discriminator = 85
  static readonly kind = "Lightning"
  readonly discriminator = 85
  readonly kind = "Lightning"

  toJSON(): LightningJSON {
    return {
      kind: "Lightning",
    }
  }

  toEncodable() {
    return {
      Lightning: {},
    }
  }
}

export interface HailJSON {
  kind: "Hail"
}

export class Hail {
  static readonly discriminator = 86
  static readonly kind = "Hail"
  readonly discriminator = 86
  readonly kind = "Hail"

  toJSON(): HailJSON {
    return {
      kind: "Hail",
    }
  }

  toEncodable() {
    return {
      Hail: {},
    }
  }
}

export interface ArtJSON {
  kind: "Art"
}

export class Art {
  static readonly discriminator = 87
  static readonly kind = "Art"
  readonly discriminator = 87
  readonly kind = "Art"

  toJSON(): ArtJSON {
    return {
      kind: "Art",
    }
  }

  toEncodable() {
    return {
      Art: {},
    }
  }
}

export interface CoffeeJSON {
  kind: "Coffee"
}

export class Coffee {
  static readonly discriminator = 88
  static readonly kind = "Coffee"
  readonly discriminator = 88
  readonly kind = "Coffee"

  toJSON(): CoffeeJSON {
    return {
      kind: "Coffee",
    }
  }

  toEncodable() {
    return {
      Coffee: {},
    }
  }
}

export interface TequilaJSON {
  kind: "Tequila"
}

export class Tequila {
  static readonly discriminator = 89
  static readonly kind = "Tequila"
  readonly discriminator = 89
  readonly kind = "Tequila"

  toJSON(): TequilaJSON {
    return {
      kind: "Tequila",
    }
  }

  toEncodable() {
    return {
      Tequila: {},
    }
  }
}

export interface RodJSON {
  kind: "Rod"
}

export class Rod {
  static readonly discriminator = 90
  static readonly kind = "Rod"
  readonly discriminator = 90
  readonly kind = "Rod"

  toJSON(): RodJSON {
    return {
      kind: "Rod",
    }
  }

  toEncodable() {
    return {
      Rod: {},
    }
  }
}

export interface BlueprintJSON {
  kind: "Blueprint"
}

export class Blueprint {
  static readonly discriminator = 91
  static readonly kind = "Blueprint"
  readonly discriminator = 91
  readonly kind = "Blueprint"

  toJSON(): BlueprintJSON {
    return {
      kind: "Blueprint",
    }
  }

  toEncodable() {
    return {
      Blueprint: {},
    }
  }
}

export interface HammerJSON {
  kind: "Hammer"
}

export class Hammer {
  static readonly discriminator = 92
  static readonly kind = "Hammer"
  readonly discriminator = 92
  readonly kind = "Hammer"

  toJSON(): HammerJSON {
    return {
      kind: "Hammer",
    }
  }

  toEncodable() {
    return {
      Hammer: {},
    }
  }
}

export interface FishJSON {
  kind: "Fish"
}

export class Fish {
  static readonly discriminator = 93
  static readonly kind = "Fish"
  readonly discriminator = 93
  readonly kind = "Fish"

  toJSON(): FishJSON {
    return {
      kind: "Fish",
    }
  }

  toEncodable() {
    return {
      Fish: {},
    }
  }
}

export interface CoinJSON {
  kind: "Coin"
}

export class Coin {
  static readonly discriminator = 94
  static readonly kind = "Coin"
  readonly discriminator = 94
  readonly kind = "Coin"

  toJSON(): CoinJSON {
    return {
      kind: "Coin",
    }
  }

  toEncodable() {
    return {
      Coin: {},
    }
  }
}

export interface IceStormJSON {
  kind: "IceStorm"
}

export class IceStorm {
  static readonly discriminator = 95
  static readonly kind = "IceStorm"
  readonly discriminator = 95
  readonly kind = "IceStorm"

  toJSON(): IceStormJSON {
    return {
      kind: "IceStorm",
    }
  }

  toEncodable() {
    return {
      IceStorm: {},
    }
  }
}

export interface TShirtJSON {
  kind: "TShirt"
}

export class TShirt {
  static readonly discriminator = 96
  static readonly kind = "TShirt"
  readonly discriminator = 96
  readonly kind = "TShirt"

  toJSON(): TShirtJSON {
    return {
      kind: "TShirt",
    }
  }

  toEncodable() {
    return {
      TShirt: {},
    }
  }
}

export interface YachtJSON {
  kind: "Yacht"
}

export class Yacht {
  static readonly discriminator = 97
  static readonly kind = "Yacht"
  readonly discriminator = 97
  readonly kind = "Yacht"

  toJSON(): YachtJSON {
    return {
      kind: "Yacht",
    }
  }

  toEncodable() {
    return {
      Yacht: {},
    }
  }
}

export interface PartyJSON {
  kind: "Party"
}

export class Party {
  static readonly discriminator = 98
  static readonly kind = "Party"
  readonly discriminator = 98
  readonly kind = "Party"

  toJSON(): PartyJSON {
    return {
      kind: "Party",
    }
  }

  toEncodable() {
    return {
      Party: {},
    }
  }
}

export interface WhaleJSON {
  kind: "Whale"
}

export class Whale {
  static readonly discriminator = 99
  static readonly kind = "Whale"
  readonly discriminator = 99
  readonly kind = "Whale"

  toJSON(): WhaleJSON {
    return {
      kind: "Whale",
    }
  }

  toEncodable() {
    return {
      Whale: {},
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDecoded(obj: any): types.OldElementNameKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("Air" in obj) {
    return new Air()
  }
  if ("Fire" in obj) {
    return new Fire()
  }
  if ("Earth" in obj) {
    return new Earth()
  }
  if ("Water" in obj) {
    return new Water()
  }
  if ("Heat" in obj) {
    return new Heat()
  }
  if ("Steam" in obj) {
    return new Steam()
  }
  if ("Mud" in obj) {
    return new Mud()
  }
  if ("Pressure" in obj) {
    return new Pressure()
  }
  if ("Rain" in obj) {
    return new Rain()
  }
  if ("Wind" in obj) {
    return new Wind()
  }
  if ("Lava" in obj) {
    return new Lava()
  }
  if ("Life" in obj) {
    return new Life()
  }
  if ("Smoke" in obj) {
    return new Smoke()
  }
  if ("Dust" in obj) {
    return new Dust()
  }
  if ("Fog" in obj) {
    return new Fog()
  }
  if ("Energy" in obj) {
    return new Energy()
  }
  if ("Seed" in obj) {
    return new Seed()
  }
  if ("Metal" in obj) {
    return new Metal()
  }
  if ("Ocean" in obj) {
    return new Ocean()
  }
  if ("Glass" in obj) {
    return new Glass()
  }
  if ("Clay" in obj) {
    return new Clay()
  }
  if ("Cloud" in obj) {
    return new Cloud()
  }
  if ("Stone" in obj) {
    return new Stone()
  }
  if ("Sun" in obj) {
    return new Sun()
  }
  if ("Time" in obj) {
    return new Time()
  }
  if ("Oil" in obj) {
    return new Oil()
  }
  if ("Wave" in obj) {
    return new Wave()
  }
  if ("Ash" in obj) {
    return new Ash()
  }
  if ("Swamp" in obj) {
    return new Swamp()
  }
  if ("River" in obj) {
    return new River()
  }
  if ("Worm" in obj) {
    return new Worm()
  }
  if ("Tornado" in obj) {
    return new Tornado()
  }
  if ("Sand" in obj) {
    return new Sand()
  }
  if ("Mountain" in obj) {
    return new Mountain()
  }
  if ("Snow" in obj) {
    return new Snow()
  }
  if ("Frost" in obj) {
    return new Frost()
  }
  if ("Magnet" in obj) {
    return new Magnet()
  }
  if ("Fossil" in obj) {
    return new Fossil()
  }
  if ("HotSprings" in obj) {
    return new HotSprings()
  }
  if ("Pond" in obj) {
    return new Pond()
  }
  if ("Coal" in obj) {
    return new Coal()
  }
  if ("Telescope" in obj) {
    return new Telescope()
  }
  if ("Volcano" in obj) {
    return new Volcano()
  }
  if ("Plastic" in obj) {
    return new Plastic()
  }
  if ("Gasoline" in obj) {
    return new Gasoline()
  }
  if ("Bottle" in obj) {
    return new Bottle()
  }
  if ("Sky" in obj) {
    return new Sky()
  }
  if ("Storm" in obj) {
    return new Storm()
  }
  if ("Plant" in obj) {
    return new Plant()
  }
  if ("Nail" in obj) {
    return new Nail()
  }
  if ("Sound" in obj) {
    return new Sound()
  }
  if ("Paint" in obj) {
    return new Paint()
  }
  if ("Alcohol" in obj) {
    return new Alcohol()
  }
  if ("Desert" in obj) {
    return new Desert()
  }
  if ("SolarPanel" in obj) {
    return new SolarPanel()
  }
  if ("Windmill" in obj) {
    return new Windmill()
  }
  if ("Furnace" in obj) {
    return new Furnace()
  }
  if ("Dam" in obj) {
    return new Dam()
  }
  if ("FireExtinguisher" in obj) {
    return new FireExtinguisher()
  }
  if ("Squid" in obj) {
    return new Squid()
  }
  if ("Tree" in obj) {
    return new Tree()
  }
  if ("Coral" in obj) {
    return new Coral()
  }
  if ("Gas" in obj) {
    return new Gas()
  }
  if ("Meteor" in obj) {
    return new Meteor()
  }
  if ("Electricity" in obj) {
    return new Electricity()
  }
  if ("Wire" in obj) {
    return new Wire()
  }
  if ("Bean" in obj) {
    return new Bean()
  }
  if ("Sugar" in obj) {
    return new Sugar()
  }
  if ("Explosion" in obj) {
    return new Explosion()
  }
  if ("Music" in obj) {
    return new Music()
  }
  if ("Cloth" in obj) {
    return new Cloth()
  }
  if ("Umbrella" in obj) {
    return new Umbrella()
  }
  if ("Balloon" in obj) {
    return new Balloon()
  }
  if ("Island" in obj) {
    return new Island()
  }
  if ("Cactus" in obj) {
    return new Cactus()
  }
  if ("Ice" in obj) {
    return new Ice()
  }
  if ("Blizzard" in obj) {
    return new Blizzard()
  }
  if ("Ink" in obj) {
    return new Ink()
  }
  if ("Paper" in obj) {
    return new Paper()
  }
  if ("Apple" in obj) {
    return new Apple()
  }
  if ("Wood" in obj) {
    return new Wood()
  }
  if ("Antenna" in obj) {
    return new Antenna()
  }
  if ("Dolphin" in obj) {
    return new Dolphin()
  }
  if ("Beach" in obj) {
    return new Beach()
  }
  if ("Fireworks" in obj) {
    return new Fireworks()
  }
  if ("Lightning" in obj) {
    return new Lightning()
  }
  if ("Hail" in obj) {
    return new Hail()
  }
  if ("Art" in obj) {
    return new Art()
  }
  if ("Coffee" in obj) {
    return new Coffee()
  }
  if ("Tequila" in obj) {
    return new Tequila()
  }
  if ("Rod" in obj) {
    return new Rod()
  }
  if ("Blueprint" in obj) {
    return new Blueprint()
  }
  if ("Hammer" in obj) {
    return new Hammer()
  }
  if ("Fish" in obj) {
    return new Fish()
  }
  if ("Coin" in obj) {
    return new Coin()
  }
  if ("IceStorm" in obj) {
    return new IceStorm()
  }
  if ("TShirt" in obj) {
    return new TShirt()
  }
  if ("Yacht" in obj) {
    return new Yacht()
  }
  if ("Party" in obj) {
    return new Party()
  }
  if ("Whale" in obj) {
    return new Whale()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(
  obj: types.OldElementNameJSON
): types.OldElementNameKind {
  switch (obj.kind) {
    case "Air": {
      return new Air()
    }
    case "Fire": {
      return new Fire()
    }
    case "Earth": {
      return new Earth()
    }
    case "Water": {
      return new Water()
    }
    case "Heat": {
      return new Heat()
    }
    case "Steam": {
      return new Steam()
    }
    case "Mud": {
      return new Mud()
    }
    case "Pressure": {
      return new Pressure()
    }
    case "Rain": {
      return new Rain()
    }
    case "Wind": {
      return new Wind()
    }
    case "Lava": {
      return new Lava()
    }
    case "Life": {
      return new Life()
    }
    case "Smoke": {
      return new Smoke()
    }
    case "Dust": {
      return new Dust()
    }
    case "Fog": {
      return new Fog()
    }
    case "Energy": {
      return new Energy()
    }
    case "Seed": {
      return new Seed()
    }
    case "Metal": {
      return new Metal()
    }
    case "Ocean": {
      return new Ocean()
    }
    case "Glass": {
      return new Glass()
    }
    case "Clay": {
      return new Clay()
    }
    case "Cloud": {
      return new Cloud()
    }
    case "Stone": {
      return new Stone()
    }
    case "Sun": {
      return new Sun()
    }
    case "Time": {
      return new Time()
    }
    case "Oil": {
      return new Oil()
    }
    case "Wave": {
      return new Wave()
    }
    case "Ash": {
      return new Ash()
    }
    case "Swamp": {
      return new Swamp()
    }
    case "River": {
      return new River()
    }
    case "Worm": {
      return new Worm()
    }
    case "Tornado": {
      return new Tornado()
    }
    case "Sand": {
      return new Sand()
    }
    case "Mountain": {
      return new Mountain()
    }
    case "Snow": {
      return new Snow()
    }
    case "Frost": {
      return new Frost()
    }
    case "Magnet": {
      return new Magnet()
    }
    case "Fossil": {
      return new Fossil()
    }
    case "HotSprings": {
      return new HotSprings()
    }
    case "Pond": {
      return new Pond()
    }
    case "Coal": {
      return new Coal()
    }
    case "Telescope": {
      return new Telescope()
    }
    case "Volcano": {
      return new Volcano()
    }
    case "Plastic": {
      return new Plastic()
    }
    case "Gasoline": {
      return new Gasoline()
    }
    case "Bottle": {
      return new Bottle()
    }
    case "Sky": {
      return new Sky()
    }
    case "Storm": {
      return new Storm()
    }
    case "Plant": {
      return new Plant()
    }
    case "Nail": {
      return new Nail()
    }
    case "Sound": {
      return new Sound()
    }
    case "Paint": {
      return new Paint()
    }
    case "Alcohol": {
      return new Alcohol()
    }
    case "Desert": {
      return new Desert()
    }
    case "SolarPanel": {
      return new SolarPanel()
    }
    case "Windmill": {
      return new Windmill()
    }
    case "Furnace": {
      return new Furnace()
    }
    case "Dam": {
      return new Dam()
    }
    case "FireExtinguisher": {
      return new FireExtinguisher()
    }
    case "Squid": {
      return new Squid()
    }
    case "Tree": {
      return new Tree()
    }
    case "Coral": {
      return new Coral()
    }
    case "Gas": {
      return new Gas()
    }
    case "Meteor": {
      return new Meteor()
    }
    case "Electricity": {
      return new Electricity()
    }
    case "Wire": {
      return new Wire()
    }
    case "Bean": {
      return new Bean()
    }
    case "Sugar": {
      return new Sugar()
    }
    case "Explosion": {
      return new Explosion()
    }
    case "Music": {
      return new Music()
    }
    case "Cloth": {
      return new Cloth()
    }
    case "Umbrella": {
      return new Umbrella()
    }
    case "Balloon": {
      return new Balloon()
    }
    case "Island": {
      return new Island()
    }
    case "Cactus": {
      return new Cactus()
    }
    case "Ice": {
      return new Ice()
    }
    case "Blizzard": {
      return new Blizzard()
    }
    case "Ink": {
      return new Ink()
    }
    case "Paper": {
      return new Paper()
    }
    case "Apple": {
      return new Apple()
    }
    case "Wood": {
      return new Wood()
    }
    case "Antenna": {
      return new Antenna()
    }
    case "Dolphin": {
      return new Dolphin()
    }
    case "Beach": {
      return new Beach()
    }
    case "Fireworks": {
      return new Fireworks()
    }
    case "Lightning": {
      return new Lightning()
    }
    case "Hail": {
      return new Hail()
    }
    case "Art": {
      return new Art()
    }
    case "Coffee": {
      return new Coffee()
    }
    case "Tequila": {
      return new Tequila()
    }
    case "Rod": {
      return new Rod()
    }
    case "Blueprint": {
      return new Blueprint()
    }
    case "Hammer": {
      return new Hammer()
    }
    case "Fish": {
      return new Fish()
    }
    case "Coin": {
      return new Coin()
    }
    case "IceStorm": {
      return new IceStorm()
    }
    case "TShirt": {
      return new TShirt()
    }
    case "Yacht": {
      return new Yacht()
    }
    case "Party": {
      return new Party()
    }
    case "Whale": {
      return new Whale()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([], "Air"),
    borsh.struct([], "Fire"),
    borsh.struct([], "Earth"),
    borsh.struct([], "Water"),
    borsh.struct([], "Heat"),
    borsh.struct([], "Steam"),
    borsh.struct([], "Mud"),
    borsh.struct([], "Pressure"),
    borsh.struct([], "Rain"),
    borsh.struct([], "Wind"),
    borsh.struct([], "Lava"),
    borsh.struct([], "Life"),
    borsh.struct([], "Smoke"),
    borsh.struct([], "Dust"),
    borsh.struct([], "Fog"),
    borsh.struct([], "Energy"),
    borsh.struct([], "Seed"),
    borsh.struct([], "Metal"),
    borsh.struct([], "Ocean"),
    borsh.struct([], "Glass"),
    borsh.struct([], "Clay"),
    borsh.struct([], "Cloud"),
    borsh.struct([], "Stone"),
    borsh.struct([], "Sun"),
    borsh.struct([], "Time"),
    borsh.struct([], "Oil"),
    borsh.struct([], "Wave"),
    borsh.struct([], "Ash"),
    borsh.struct([], "Swamp"),
    borsh.struct([], "River"),
    borsh.struct([], "Worm"),
    borsh.struct([], "Tornado"),
    borsh.struct([], "Sand"),
    borsh.struct([], "Mountain"),
    borsh.struct([], "Snow"),
    borsh.struct([], "Frost"),
    borsh.struct([], "Magnet"),
    borsh.struct([], "Fossil"),
    borsh.struct([], "HotSprings"),
    borsh.struct([], "Pond"),
    borsh.struct([], "Coal"),
    borsh.struct([], "Telescope"),
    borsh.struct([], "Volcano"),
    borsh.struct([], "Plastic"),
    borsh.struct([], "Gasoline"),
    borsh.struct([], "Bottle"),
    borsh.struct([], "Sky"),
    borsh.struct([], "Storm"),
    borsh.struct([], "Plant"),
    borsh.struct([], "Nail"),
    borsh.struct([], "Sound"),
    borsh.struct([], "Paint"),
    borsh.struct([], "Alcohol"),
    borsh.struct([], "Desert"),
    borsh.struct([], "SolarPanel"),
    borsh.struct([], "Windmill"),
    borsh.struct([], "Furnace"),
    borsh.struct([], "Dam"),
    borsh.struct([], "FireExtinguisher"),
    borsh.struct([], "Squid"),
    borsh.struct([], "Tree"),
    borsh.struct([], "Coral"),
    borsh.struct([], "Gas"),
    borsh.struct([], "Meteor"),
    borsh.struct([], "Electricity"),
    borsh.struct([], "Wire"),
    borsh.struct([], "Bean"),
    borsh.struct([], "Sugar"),
    borsh.struct([], "Explosion"),
    borsh.struct([], "Music"),
    borsh.struct([], "Cloth"),
    borsh.struct([], "Umbrella"),
    borsh.struct([], "Balloon"),
    borsh.struct([], "Island"),
    borsh.struct([], "Cactus"),
    borsh.struct([], "Ice"),
    borsh.struct([], "Blizzard"),
    borsh.struct([], "Ink"),
    borsh.struct([], "Paper"),
    borsh.struct([], "Apple"),
    borsh.struct([], "Wood"),
    borsh.struct([], "Antenna"),
    borsh.struct([], "Dolphin"),
    borsh.struct([], "Beach"),
    borsh.struct([], "Fireworks"),
    borsh.struct([], "Lightning"),
    borsh.struct([], "Hail"),
    borsh.struct([], "Art"),
    borsh.struct([], "Coffee"),
    borsh.struct([], "Tequila"),
    borsh.struct([], "Rod"),
    borsh.struct([], "Blueprint"),
    borsh.struct([], "Hammer"),
    borsh.struct([], "Fish"),
    borsh.struct([], "Coin"),
    borsh.struct([], "IceStorm"),
    borsh.struct([], "TShirt"),
    borsh.struct([], "Yacht"),
    borsh.struct([], "Party"),
    borsh.struct([], "Whale"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
