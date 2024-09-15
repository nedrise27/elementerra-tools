import * as CnftToBurnType from "./CnftToBurnType"
import * as CnftToBurn from "./CnftToBurn"
import * as CrystalTier from "./CrystalTier"
import * as ElementName from "./ElementName"
import * as OldElementName from "./OldElementName"
import * as NFTType from "./NFTType"
import * as ElementerraPNFTCriteria from "./ElementerraPNFTCriteria"
import * as ElementerraCNFTCriteria from "./ElementerraCNFTCriteria"
import * as MissionRequirement from "./MissionRequirement"
import * as FamiliarType from "./FamiliarType"
import * as NFTRewardType from "./NFTRewardType"
import * as ElementerraCNFTType from "./ElementerraCNFTType"
import * as MissionReward from "./MissionReward"
import * as MissionStatus from "./MissionStatus"
import * as PendingGuessStatus from "./PendingGuessStatus"
import * as StakingType from "./StakingType"
import * as Tier from "./Tier"

export { AddRequirementParams } from "./AddRequirementParams"
export type {
  AddRequirementParamsFields,
  AddRequirementParamsJSON,
} from "./AddRequirementParams"
export { RemoveRequirementParams } from "./RemoveRequirementParams"
export type {
  RemoveRequirementParamsFields,
  RemoveRequirementParamsJSON,
} from "./RemoveRequirementParams"
export { LevelUpRequirements } from "./LevelUpRequirements"
export type {
  LevelUpRequirementsFields,
  LevelUpRequirementsJSON,
} from "./LevelUpRequirements"
export { MissionOdds } from "./MissionOdds"
export type { MissionOddsFields, MissionOddsJSON } from "./MissionOdds"
export { Ticket } from "./Ticket"
export type { TicketFields, TicketJSON } from "./Ticket"
export { StakingRate } from "./StakingRate"
export type { StakingRateFields, StakingRateJSON } from "./StakingRate"
export { CnftToBurnType }

export type CnftToBurnTypeKind =
  | CnftToBurnType.Element
  | CnftToBurnType.Crystal
  | CnftToBurnType.None
export type CnftToBurnTypeJSON =
  | CnftToBurnType.ElementJSON
  | CnftToBurnType.CrystalJSON
  | CnftToBurnType.NoneJSON

export { CnftToBurn }

export type CnftToBurnKind =
  | CnftToBurn.Crystal
  | CnftToBurn.Element
  | CnftToBurn.None
export type CnftToBurnJSON =
  | CnftToBurn.CrystalJSON
  | CnftToBurn.ElementJSON
  | CnftToBurn.NoneJSON

export { CrystalTier }

export type CrystalTierKind =
  | CrystalTier.Tier1
  | CrystalTier.Tier2
  | CrystalTier.Tier3
  | CrystalTier.Tier4
  | CrystalTier.Tier5
  | CrystalTier.Tier6
  | CrystalTier.Tier7
  | CrystalTier.Tier8
  | CrystalTier.Tier9
  | CrystalTier.Tier10
  | CrystalTier.Tier11
  | CrystalTier.Tier12
  | CrystalTier.Tier13
  | CrystalTier.Tier14
  | CrystalTier.Tier15
  | CrystalTier.Tier16
  | CrystalTier.Tier17
  | CrystalTier.Tier18
  | CrystalTier.Tier19
  | CrystalTier.Tier20
export type CrystalTierJSON =
  | CrystalTier.Tier1JSON
  | CrystalTier.Tier2JSON
  | CrystalTier.Tier3JSON
  | CrystalTier.Tier4JSON
  | CrystalTier.Tier5JSON
  | CrystalTier.Tier6JSON
  | CrystalTier.Tier7JSON
  | CrystalTier.Tier8JSON
  | CrystalTier.Tier9JSON
  | CrystalTier.Tier10JSON
  | CrystalTier.Tier11JSON
  | CrystalTier.Tier12JSON
  | CrystalTier.Tier13JSON
  | CrystalTier.Tier14JSON
  | CrystalTier.Tier15JSON
  | CrystalTier.Tier16JSON
  | CrystalTier.Tier17JSON
  | CrystalTier.Tier18JSON
  | CrystalTier.Tier19JSON
  | CrystalTier.Tier20JSON

export { ElementName }

export type ElementNameKind =
  | ElementName.Flame
  | ElementName.Sea
  | ElementName.Leaf
  | ElementName.Stick
  | ElementName.BrokenGlass
  | ElementName.Compression
  | ElementName.Rubber
  | ElementName.Pebble
  | ElementName.Oxygen
  | ElementName.Carbon
  | ElementName.Rock
  | ElementName.Toxic
  | ElementName.TemperedGlass
  | ElementName.Salt
  | ElementName.FreshWater
  | ElementName.Flower
  | ElementName.Mold
  | ElementName.WoodenPlank
  | ElementName.Nest
  | ElementName.Bones
  | ElementName.Iron
  | ElementName.Organism
  | ElementName.Lead
  | ElementName.Brick
  | ElementName.Bee
  | ElementName.Hourglass
  | ElementName.Tire
  | ElementName.Aluminum
  | ElementName.Silver
  | ElementName.Soil
  | ElementName.Marble
  | ElementName.Gravel
  | ElementName.String
  | ElementName.Chair
  | ElementName.Fireplace
  | ElementName.Window
  | ElementName.Egg
  | ElementName.Blood
  | ElementName.Spinach
  | ElementName.Steel
  | ElementName.Wheel
  | ElementName.PalmTree
  | ElementName.Wall
  | ElementName.Wax
  | ElementName.Acid
  | ElementName.Diamond
  | ElementName.Fuel
  | ElementName.Chain
  | ElementName.Spider
  | ElementName.Duck
  | ElementName.Silicone
  | ElementName.Blade
  | ElementName.Puppet
  | ElementName.Grass
  | ElementName.Bench
  | ElementName.Greenhouse
  | ElementName.Vine
  | ElementName.Heart
  | ElementName.Mussel
  | ElementName.Coconut
  | ElementName.Horseshoe
  | ElementName.Mouse
  | ElementName.Key
  | ElementName.Honey
  | ElementName.Banana
  | ElementName.Ring
  | ElementName.Engine
  | ElementName.Kiwi
  | ElementName.Gold
  | ElementName.Web
  | ElementName.Battery
  | ElementName.Microchip
  | ElementName.Sword
  | ElementName.Mirror
  | ElementName.Garden
  | ElementName.Ruby
  | ElementName.Pearl
  | ElementName.Blender
  | ElementName.Car
  | ElementName.Horse
  | ElementName.Computer
  | ElementName.Piano
  | ElementName.Money
  | ElementName.Keyboard
  | ElementName.Bike
  | ElementName.Necklace
  | ElementName.Statue
  | ElementName.Monkey
  | ElementName.Cellphone
  | ElementName.House
  | ElementName.Boat
  | ElementName.Smoothie
  | ElementName.Internet
  | ElementName.Thief
  | ElementName.LoanShark
  | ElementName.Zoo
  | ElementName.Safe
  | ElementName.Race
  | ElementName.Toy
  | ElementName.Gift
export type ElementNameJSON =
  | ElementName.FlameJSON
  | ElementName.SeaJSON
  | ElementName.LeafJSON
  | ElementName.StickJSON
  | ElementName.BrokenGlassJSON
  | ElementName.CompressionJSON
  | ElementName.RubberJSON
  | ElementName.PebbleJSON
  | ElementName.OxygenJSON
  | ElementName.CarbonJSON
  | ElementName.RockJSON
  | ElementName.ToxicJSON
  | ElementName.TemperedGlassJSON
  | ElementName.SaltJSON
  | ElementName.FreshWaterJSON
  | ElementName.FlowerJSON
  | ElementName.MoldJSON
  | ElementName.WoodenPlankJSON
  | ElementName.NestJSON
  | ElementName.BonesJSON
  | ElementName.IronJSON
  | ElementName.OrganismJSON
  | ElementName.LeadJSON
  | ElementName.BrickJSON
  | ElementName.BeeJSON
  | ElementName.HourglassJSON
  | ElementName.TireJSON
  | ElementName.AluminumJSON
  | ElementName.SilverJSON
  | ElementName.SoilJSON
  | ElementName.MarbleJSON
  | ElementName.GravelJSON
  | ElementName.StringJSON
  | ElementName.ChairJSON
  | ElementName.FireplaceJSON
  | ElementName.WindowJSON
  | ElementName.EggJSON
  | ElementName.BloodJSON
  | ElementName.SpinachJSON
  | ElementName.SteelJSON
  | ElementName.WheelJSON
  | ElementName.PalmTreeJSON
  | ElementName.WallJSON
  | ElementName.WaxJSON
  | ElementName.AcidJSON
  | ElementName.DiamondJSON
  | ElementName.FuelJSON
  | ElementName.ChainJSON
  | ElementName.SpiderJSON
  | ElementName.DuckJSON
  | ElementName.SiliconeJSON
  | ElementName.BladeJSON
  | ElementName.PuppetJSON
  | ElementName.GrassJSON
  | ElementName.BenchJSON
  | ElementName.GreenhouseJSON
  | ElementName.VineJSON
  | ElementName.HeartJSON
  | ElementName.MusselJSON
  | ElementName.CoconutJSON
  | ElementName.HorseshoeJSON
  | ElementName.MouseJSON
  | ElementName.KeyJSON
  | ElementName.HoneyJSON
  | ElementName.BananaJSON
  | ElementName.RingJSON
  | ElementName.EngineJSON
  | ElementName.KiwiJSON
  | ElementName.GoldJSON
  | ElementName.WebJSON
  | ElementName.BatteryJSON
  | ElementName.MicrochipJSON
  | ElementName.SwordJSON
  | ElementName.MirrorJSON
  | ElementName.GardenJSON
  | ElementName.RubyJSON
  | ElementName.PearlJSON
  | ElementName.BlenderJSON
  | ElementName.CarJSON
  | ElementName.HorseJSON
  | ElementName.ComputerJSON
  | ElementName.PianoJSON
  | ElementName.MoneyJSON
  | ElementName.KeyboardJSON
  | ElementName.BikeJSON
  | ElementName.NecklaceJSON
  | ElementName.StatueJSON
  | ElementName.MonkeyJSON
  | ElementName.CellphoneJSON
  | ElementName.HouseJSON
  | ElementName.BoatJSON
  | ElementName.SmoothieJSON
  | ElementName.InternetJSON
  | ElementName.ThiefJSON
  | ElementName.LoanSharkJSON
  | ElementName.ZooJSON
  | ElementName.SafeJSON
  | ElementName.RaceJSON
  | ElementName.ToyJSON
  | ElementName.GiftJSON

export { OldElementName }

export type OldElementNameKind =
  | OldElementName.Air
  | OldElementName.Fire
  | OldElementName.Earth
  | OldElementName.Water
  | OldElementName.Heat
  | OldElementName.Steam
  | OldElementName.Mud
  | OldElementName.Pressure
  | OldElementName.Rain
  | OldElementName.Wind
  | OldElementName.Lava
  | OldElementName.Life
  | OldElementName.Smoke
  | OldElementName.Dust
  | OldElementName.Fog
  | OldElementName.Energy
  | OldElementName.Seed
  | OldElementName.Metal
  | OldElementName.Ocean
  | OldElementName.Glass
  | OldElementName.Clay
  | OldElementName.Cloud
  | OldElementName.Stone
  | OldElementName.Sun
  | OldElementName.Time
  | OldElementName.Oil
  | OldElementName.Wave
  | OldElementName.Ash
  | OldElementName.Swamp
  | OldElementName.River
  | OldElementName.Worm
  | OldElementName.Tornado
  | OldElementName.Sand
  | OldElementName.Mountain
  | OldElementName.Snow
  | OldElementName.Frost
  | OldElementName.Magnet
  | OldElementName.Fossil
  | OldElementName.HotSprings
  | OldElementName.Pond
  | OldElementName.Coal
  | OldElementName.Telescope
  | OldElementName.Volcano
  | OldElementName.Plastic
  | OldElementName.Gasoline
  | OldElementName.Bottle
  | OldElementName.Sky
  | OldElementName.Storm
  | OldElementName.Plant
  | OldElementName.Nail
  | OldElementName.Sound
  | OldElementName.Paint
  | OldElementName.Alcohol
  | OldElementName.Desert
  | OldElementName.SolarPanel
  | OldElementName.Windmill
  | OldElementName.Furnace
  | OldElementName.Dam
  | OldElementName.FireExtinguisher
  | OldElementName.Squid
  | OldElementName.Tree
  | OldElementName.Coral
  | OldElementName.Gas
  | OldElementName.Meteor
  | OldElementName.Electricity
  | OldElementName.Wire
  | OldElementName.Bean
  | OldElementName.Sugar
  | OldElementName.Explosion
  | OldElementName.Music
  | OldElementName.Cloth
  | OldElementName.Umbrella
  | OldElementName.Balloon
  | OldElementName.Island
  | OldElementName.Cactus
  | OldElementName.Ice
  | OldElementName.Blizzard
  | OldElementName.Ink
  | OldElementName.Paper
  | OldElementName.Apple
  | OldElementName.Wood
  | OldElementName.Antenna
  | OldElementName.Dolphin
  | OldElementName.Beach
  | OldElementName.Fireworks
  | OldElementName.Lightning
  | OldElementName.Hail
  | OldElementName.Art
  | OldElementName.Coffee
  | OldElementName.Tequila
  | OldElementName.Rod
  | OldElementName.Blueprint
  | OldElementName.Hammer
  | OldElementName.Fish
  | OldElementName.Coin
  | OldElementName.IceStorm
  | OldElementName.TShirt
  | OldElementName.Yacht
  | OldElementName.Party
  | OldElementName.Whale
export type OldElementNameJSON =
  | OldElementName.AirJSON
  | OldElementName.FireJSON
  | OldElementName.EarthJSON
  | OldElementName.WaterJSON
  | OldElementName.HeatJSON
  | OldElementName.SteamJSON
  | OldElementName.MudJSON
  | OldElementName.PressureJSON
  | OldElementName.RainJSON
  | OldElementName.WindJSON
  | OldElementName.LavaJSON
  | OldElementName.LifeJSON
  | OldElementName.SmokeJSON
  | OldElementName.DustJSON
  | OldElementName.FogJSON
  | OldElementName.EnergyJSON
  | OldElementName.SeedJSON
  | OldElementName.MetalJSON
  | OldElementName.OceanJSON
  | OldElementName.GlassJSON
  | OldElementName.ClayJSON
  | OldElementName.CloudJSON
  | OldElementName.StoneJSON
  | OldElementName.SunJSON
  | OldElementName.TimeJSON
  | OldElementName.OilJSON
  | OldElementName.WaveJSON
  | OldElementName.AshJSON
  | OldElementName.SwampJSON
  | OldElementName.RiverJSON
  | OldElementName.WormJSON
  | OldElementName.TornadoJSON
  | OldElementName.SandJSON
  | OldElementName.MountainJSON
  | OldElementName.SnowJSON
  | OldElementName.FrostJSON
  | OldElementName.MagnetJSON
  | OldElementName.FossilJSON
  | OldElementName.HotSpringsJSON
  | OldElementName.PondJSON
  | OldElementName.CoalJSON
  | OldElementName.TelescopeJSON
  | OldElementName.VolcanoJSON
  | OldElementName.PlasticJSON
  | OldElementName.GasolineJSON
  | OldElementName.BottleJSON
  | OldElementName.SkyJSON
  | OldElementName.StormJSON
  | OldElementName.PlantJSON
  | OldElementName.NailJSON
  | OldElementName.SoundJSON
  | OldElementName.PaintJSON
  | OldElementName.AlcoholJSON
  | OldElementName.DesertJSON
  | OldElementName.SolarPanelJSON
  | OldElementName.WindmillJSON
  | OldElementName.FurnaceJSON
  | OldElementName.DamJSON
  | OldElementName.FireExtinguisherJSON
  | OldElementName.SquidJSON
  | OldElementName.TreeJSON
  | OldElementName.CoralJSON
  | OldElementName.GasJSON
  | OldElementName.MeteorJSON
  | OldElementName.ElectricityJSON
  | OldElementName.WireJSON
  | OldElementName.BeanJSON
  | OldElementName.SugarJSON
  | OldElementName.ExplosionJSON
  | OldElementName.MusicJSON
  | OldElementName.ClothJSON
  | OldElementName.UmbrellaJSON
  | OldElementName.BalloonJSON
  | OldElementName.IslandJSON
  | OldElementName.CactusJSON
  | OldElementName.IceJSON
  | OldElementName.BlizzardJSON
  | OldElementName.InkJSON
  | OldElementName.PaperJSON
  | OldElementName.AppleJSON
  | OldElementName.WoodJSON
  | OldElementName.AntennaJSON
  | OldElementName.DolphinJSON
  | OldElementName.BeachJSON
  | OldElementName.FireworksJSON
  | OldElementName.LightningJSON
  | OldElementName.HailJSON
  | OldElementName.ArtJSON
  | OldElementName.CoffeeJSON
  | OldElementName.TequilaJSON
  | OldElementName.RodJSON
  | OldElementName.BlueprintJSON
  | OldElementName.HammerJSON
  | OldElementName.FishJSON
  | OldElementName.CoinJSON
  | OldElementName.IceStormJSON
  | OldElementName.TShirtJSON
  | OldElementName.YachtJSON
  | OldElementName.PartyJSON
  | OldElementName.WhaleJSON

export { NFTType }

export type NFTTypeKind = NFTType.Normal | NFTType.PNFT | NFTType.CNFT
export type NFTTypeJSON =
  | NFTType.NormalJSON
  | NFTType.PNFTJSON
  | NFTType.CNFTJSON

export { ElementerraPNFTCriteria }

export type ElementerraPNFTCriteriaKind =
  | ElementerraPNFTCriteria.Rabbit
  | ElementerraPNFTCriteria.Inventor
  | ElementerraPNFTCriteria.Familiar
  | ElementerraPNFTCriteria.None
export type ElementerraPNFTCriteriaJSON =
  | ElementerraPNFTCriteria.RabbitJSON
  | ElementerraPNFTCriteria.InventorJSON
  | ElementerraPNFTCriteria.FamiliarJSON
  | ElementerraPNFTCriteria.NoneJSON

export { ElementerraCNFTCriteria }

export type ElementerraCNFTCriteriaKind =
  | ElementerraCNFTCriteria.Crystal
  | ElementerraCNFTCriteria.Element
  | ElementerraCNFTCriteria.None
export type ElementerraCNFTCriteriaJSON =
  | ElementerraCNFTCriteria.CrystalJSON
  | ElementerraCNFTCriteria.ElementJSON
  | ElementerraCNFTCriteria.NoneJSON

export { MissionRequirement }

export type MissionRequirementKind =
  | MissionRequirement.ElementerraPnft
  | MissionRequirement.Token
  | MissionRequirement.None
export type MissionRequirementJSON =
  | MissionRequirement.ElementerraPnftJSON
  | MissionRequirement.TokenJSON
  | MissionRequirement.NoneJSON

export { FamiliarType }

export type FamiliarTypeKind =
  | FamiliarType.Cat
  | FamiliarType.Raccoon
  | FamiliarType.Rhino
  | FamiliarType.Dog
  | FamiliarType.Fox
  | FamiliarType.Dragon
  | FamiliarType.Mouse
  | FamiliarType.Deer
  | FamiliarType.Bear
  | FamiliarType.Griffin
  | FamiliarType.Sheep
  | FamiliarType.Monkey
  | FamiliarType.None
export type FamiliarTypeJSON =
  | FamiliarType.CatJSON
  | FamiliarType.RaccoonJSON
  | FamiliarType.RhinoJSON
  | FamiliarType.DogJSON
  | FamiliarType.FoxJSON
  | FamiliarType.DragonJSON
  | FamiliarType.MouseJSON
  | FamiliarType.DeerJSON
  | FamiliarType.BearJSON
  | FamiliarType.GriffinJSON
  | FamiliarType.SheepJSON
  | FamiliarType.MonkeyJSON
  | FamiliarType.NoneJSON

export { NFTRewardType }

export type NFTRewardTypeKind = NFTRewardType.Ticket | NFTRewardType.CNFT
export type NFTRewardTypeJSON =
  | NFTRewardType.TicketJSON
  | NFTRewardType.CNFTJSON

export { ElementerraCNFTType }

export type ElementerraCNFTTypeKind =
  | ElementerraCNFTType.Crystal
  | ElementerraCNFTType.Element
  | ElementerraCNFTType.Pack
  | ElementerraCNFTType.None
export type ElementerraCNFTTypeJSON =
  | ElementerraCNFTType.CrystalJSON
  | ElementerraCNFTType.ElementJSON
  | ElementerraCNFTType.PackJSON
  | ElementerraCNFTType.NoneJSON

export { MissionReward }

export type MissionRewardKind =
  | MissionReward.Token
  | MissionReward.LoseNFT
  | MissionReward.WinNft
  | MissionReward.Nothing
export type MissionRewardJSON =
  | MissionReward.TokenJSON
  | MissionReward.LoseNFTJSON
  | MissionReward.WinNftJSON
  | MissionReward.NothingJSON

export { MissionStatus }

export type MissionStatusKind =
  | MissionStatus.NotStarted
  | MissionStatus.Pending
  | MissionStatus.Started
  | MissionStatus.Completed
  | MissionStatus.Claimable
export type MissionStatusJSON =
  | MissionStatus.NotStartedJSON
  | MissionStatus.PendingJSON
  | MissionStatus.StartedJSON
  | MissionStatus.CompletedJSON
  | MissionStatus.ClaimableJSON

export { PendingGuessStatus }

export type PendingGuessStatusKind =
  | PendingGuessStatus.NotClaimed
  | PendingGuessStatus.Inventor
  | PendingGuessStatus.Reward
  | PendingGuessStatus.Normal
export type PendingGuessStatusJSON =
  | PendingGuessStatus.NotClaimedJSON
  | PendingGuessStatus.InventorJSON
  | PendingGuessStatus.RewardJSON
  | PendingGuessStatus.NormalJSON

export { StakingType }

export type StakingTypeKind = StakingType.Collection | StakingType.MerkleNode
export type StakingTypeJSON =
  | StakingType.CollectionJSON
  | StakingType.MerkleNodeJSON

export { Tier }

export type TierKind =
  | Tier.Tier0
  | Tier.Tier1
  | Tier.Tier2
  | Tier.Tier3
  | Tier.Tier4
  | Tier.Tier5
  | Tier.Tier6
  | Tier.Tier7
  | Tier.Tier8
  | Tier.Tier9
  | Tier.Tier10
  | Tier.Tier11
  | Tier.Tier12
export type TierJSON =
  | Tier.Tier0JSON
  | Tier.Tier1JSON
  | Tier.Tier2JSON
  | Tier.Tier3JSON
  | Tier.Tier4JSON
  | Tier.Tier5JSON
  | Tier.Tier6JSON
  | Tier.Tier7JSON
  | Tier.Tier8JSON
  | Tier.Tier9JSON
  | Tier.Tier10JSON
  | Tier.Tier11JSON
  | Tier.Tier12JSON
