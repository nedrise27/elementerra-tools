export type CustomError =
  | NotSuperAdmin
  | NotBackend
  | NotAuthorized
  | InvalidValue
  | InvalidElementName
  | NotCurrentSeason
  | MissingElementInPendingGuess
  | HashAlreadySet
  | InvalidTree
  | InvalidElementProvided
  | ElementDoesNotMatchElementAccount
  | PendingGuessFull
  | IndexError
  | InvalidCollection
  | InvalidElementumMint
  | CantBuyThisElement
  | CantRemoveElementFromThisPendingGuess
  | ElementNotPartOfPendingGuess
  | InvalidSolTreasury
  | PendingGuessInvalidStatus
  | InvalidStakingRates
  | StakeableCollectionIsNotEnabled
  | NotMatchingSeason
  | InvalidNFTMint
  | InvalidNFTOwner
  | InvalidNFTAmount
  | InvalidBump
  | StakeBeforeClaiming
  | TooEarlyToClaim
  | InvalidPackTier
  | InvalidLevel
  | InvalidTokenAccount
  | InvalidStakingType
  | InvalidTierType
  | InvalidReferral
  | InvalidPackProvided
  | InvalidCrystalProvided
  | FluffleClaimNotEnabled
  | FluffleAlreadyClaimed
  | InvalidFluffleMint
  | NotValidFluffleClaimValues
  | TooManyRequirementsOrRewards
  | InvalidTime
  | TooManyMissions
  | InvalidSeasonNumber
  | LockedResources
  | InvalidMissionStatus
  | MissingRequirement
  | StillHasRequirementsLeft
  | InvalidMint
  | InvalidProgram
  | InvalidDrkeMint
  | InvalidIndex
  | RequirementAlreadyFilled
  | RequirementMismatch
  | InvalidRequirement
  | RequiredArgument
  | NoRequirementsLeftToComplete
  | InvalidOwner
  | MissingCNFTAttributes
  | InvalidCNFTAttributes
  | RequirementAlreadyRemoved
  | NoRequirementsToRemove
  | PendingGuessEmpty
  | MissionNotAvailable
  | MissionNotReadyToBeCompleted
  | InvalidRandomData
  | RandomnessNotResolved
  | InvalidCnftToBurn
  | CrystalDoesNotMatchCrystalAccount
  | InvalidFamiliarType
  | FamiliarTypeMismatch
  | UserNotWhitelisted

export class NotSuperAdmin extends Error {
  static readonly code = 6000
  readonly code = 6000
  readonly name = "NotSuperAdmin"
  readonly msg = "Only super admin can do this action"

  constructor(readonly logs?: string[]) {
    super("6000: Only super admin can do this action")
  }
}

export class NotBackend extends Error {
  static readonly code = 6001
  readonly code = 6001
  readonly name = "NotBackend"
  readonly msg = "Only backend can do this action"

  constructor(readonly logs?: string[]) {
    super("6001: Only backend can do this action")
  }
}

export class NotAuthorized extends Error {
  static readonly code = 6002
  readonly code = 6002
  readonly name = "NotAuthorized"
  readonly msg = "Not Authorized"

  constructor(readonly logs?: string[]) {
    super("6002: Not Authorized")
  }
}

export class InvalidValue extends Error {
  static readonly code = 6003
  readonly code = 6003
  readonly name = "InvalidValue"
  readonly msg = "Invalid value provided to instruction"

  constructor(readonly logs?: string[]) {
    super("6003: Invalid value provided to instruction")
  }
}

export class InvalidElementName extends Error {
  static readonly code = 6004
  readonly code = 6004
  readonly name = "InvalidElementName"
  readonly msg = "Invalid element name"

  constructor(readonly logs?: string[]) {
    super("6004: Invalid element name")
  }
}

export class NotCurrentSeason extends Error {
  static readonly code = 6005
  readonly code = 6005
  readonly name = "NotCurrentSeason"
  readonly msg = "Is not current season"

  constructor(readonly logs?: string[]) {
    super("6005: Is not current season")
  }
}

export class MissingElementInPendingGuess extends Error {
  static readonly code = 6006
  readonly code = 6006
  readonly name = "MissingElementInPendingGuess"
  readonly msg = "There needs to be 4 elements in the pending guess"

  constructor(readonly logs?: string[]) {
    super("6006: There needs to be 4 elements in the pending guess")
  }
}

export class HashAlreadySet extends Error {
  static readonly code = 6007
  readonly code = 6007
  readonly name = "HashAlreadySet"
  readonly msg = "Hash already set on pending guess"

  constructor(readonly logs?: string[]) {
    super("6007: Hash already set on pending guess")
  }
}

export class InvalidTree extends Error {
  static readonly code = 6008
  readonly code = 6008
  readonly name = "InvalidTree"
  readonly msg = "Invalid tree"

  constructor(readonly logs?: string[]) {
    super("6008: Invalid tree")
  }
}

export class InvalidElementProvided extends Error {
  static readonly code = 6009
  readonly code = 6009
  readonly name = "InvalidElementProvided"
  readonly msg = "Invalid element provided"

  constructor(readonly logs?: string[]) {
    super("6009: Invalid element provided")
  }
}

export class ElementDoesNotMatchElementAccount extends Error {
  static readonly code = 6010
  readonly code = 6010
  readonly name = "ElementDoesNotMatchElementAccount"
  readonly msg = "Element does not match element"

  constructor(readonly logs?: string[]) {
    super("6010: Element does not match element")
  }
}

export class PendingGuessFull extends Error {
  static readonly code = 6011
  readonly code = 6011
  readonly name = "PendingGuessFull"
  readonly msg = "Pending guess is full"

  constructor(readonly logs?: string[]) {
    super("6011: Pending guess is full")
  }
}

export class IndexError extends Error {
  static readonly code = 6012
  readonly code = 6012
  readonly name = "IndexError"
  readonly msg = "Index error"

  constructor(readonly logs?: string[]) {
    super("6012: Index error")
  }
}

export class InvalidCollection extends Error {
  static readonly code = 6013
  readonly code = 6013
  readonly name = "InvalidCollection"
  readonly msg = "Invalid collection"

  constructor(readonly logs?: string[]) {
    super("6013: Invalid collection")
  }
}

export class InvalidElementumMint extends Error {
  static readonly code = 6014
  readonly code = 6014
  readonly name = "InvalidElementumMint"
  readonly msg = "Invalid elementum mint"

  constructor(readonly logs?: string[]) {
    super("6014: Invalid elementum mint")
  }
}

export class CantBuyThisElement extends Error {
  static readonly code = 6015
  readonly code = 6015
  readonly name = "CantBuyThisElement"
  readonly msg = "Can't buy this element"

  constructor(readonly logs?: string[]) {
    super("6015: Can't buy this element")
  }
}

export class CantRemoveElementFromThisPendingGuess extends Error {
  static readonly code = 6016
  readonly code = 6016
  readonly name = "CantRemoveElementFromThisPendingGuess"
  readonly msg = "Can't remove element from this pending guess"

  constructor(readonly logs?: string[]) {
    super("6016: Can't remove element from this pending guess")
  }
}

export class ElementNotPartOfPendingGuess extends Error {
  static readonly code = 6017
  readonly code = 6017
  readonly name = "ElementNotPartOfPendingGuess"
  readonly msg = "Element is not part of pending guess"

  constructor(readonly logs?: string[]) {
    super("6017: Element is not part of pending guess")
  }
}

export class InvalidSolTreasury extends Error {
  static readonly code = 6018
  readonly code = 6018
  readonly name = "InvalidSolTreasury"
  readonly msg = "Invalid SOL receiver treasury"

  constructor(readonly logs?: string[]) {
    super("6018: Invalid SOL receiver treasury")
  }
}

export class PendingGuessInvalidStatus extends Error {
  static readonly code = 6019
  readonly code = 6019
  readonly name = "PendingGuessInvalidStatus"
  readonly msg = "Pending guess has invalid status for that action"

  constructor(readonly logs?: string[]) {
    super("6019: Pending guess has invalid status for that action")
  }
}

export class InvalidStakingRates extends Error {
  static readonly code = 6020
  readonly code = 6020
  readonly name = "InvalidStakingRates"
  readonly msg = "Invalid staking rates"

  constructor(readonly logs?: string[]) {
    super("6020: Invalid staking rates")
  }
}

export class StakeableCollectionIsNotEnabled extends Error {
  static readonly code = 6021
  readonly code = 6021
  readonly name = "StakeableCollectionIsNotEnabled"
  readonly msg = "Collection not enabled for staking."

  constructor(readonly logs?: string[]) {
    super("6021: Collection not enabled for staking.")
  }
}

export class NotMatchingSeason extends Error {
  static readonly code = 6022
  readonly code = 6022
  readonly name = "NotMatchingSeason"
  readonly msg = "Season numbers don't match"

  constructor(readonly logs?: string[]) {
    super("6022: Season numbers don't match")
  }
}

export class InvalidNFTMint extends Error {
  static readonly code = 6023
  readonly code = 6023
  readonly name = "InvalidNFTMint"
  readonly msg = "Invalid NFT mint"

  constructor(readonly logs?: string[]) {
    super("6023: Invalid NFT mint")
  }
}

export class InvalidNFTOwner extends Error {
  static readonly code = 6024
  readonly code = 6024
  readonly name = "InvalidNFTOwner"
  readonly msg = "Invalid NFT owner"

  constructor(readonly logs?: string[]) {
    super("6024: Invalid NFT owner")
  }
}

export class InvalidNFTAmount extends Error {
  static readonly code = 6025
  readonly code = 6025
  readonly name = "InvalidNFTAmount"
  readonly msg = "Invalid NFT amount"

  constructor(readonly logs?: string[]) {
    super("6025: Invalid NFT amount")
  }
}

export class InvalidBump extends Error {
  static readonly code = 6026
  readonly code = 6026
  readonly name = "InvalidBump"
  readonly msg = "Invalid bump for PDA"

  constructor(readonly logs?: string[]) {
    super("6026: Invalid bump for PDA")
  }
}

export class StakeBeforeClaiming extends Error {
  static readonly code = 6027
  readonly code = 6027
  readonly name = "StakeBeforeClaiming"
  readonly msg = "You need to stake before claiming"

  constructor(readonly logs?: string[]) {
    super("6027: You need to stake before claiming")
  }
}

export class TooEarlyToClaim extends Error {
  static readonly code = 6028
  readonly code = 6028
  readonly name = "TooEarlyToClaim"
  readonly msg = "Too early to claim"

  constructor(readonly logs?: string[]) {
    super("6028: Too early to claim")
  }
}

export class InvalidPackTier extends Error {
  static readonly code = 6029
  readonly code = 6029
  readonly name = "InvalidPackTier"
  readonly msg = "Invalid pack tier"

  constructor(readonly logs?: string[]) {
    super("6029: Invalid pack tier")
  }
}

export class InvalidLevel extends Error {
  static readonly code = 6030
  readonly code = 6030
  readonly name = "InvalidLevel"
  readonly msg = "Invalid level"

  constructor(readonly logs?: string[]) {
    super("6030: Invalid level")
  }
}

export class InvalidTokenAccount extends Error {
  static readonly code = 6031
  readonly code = 6031
  readonly name = "InvalidTokenAccount"
  readonly msg = "Invalid token account"

  constructor(readonly logs?: string[]) {
    super("6031: Invalid token account")
  }
}

export class InvalidStakingType extends Error {
  static readonly code = 6032
  readonly code = 6032
  readonly name = "InvalidStakingType"
  readonly msg = "Invalid staking type"

  constructor(readonly logs?: string[]) {
    super("6032: Invalid staking type")
  }
}

export class InvalidTierType extends Error {
  static readonly code = 6033
  readonly code = 6033
  readonly name = "InvalidTierType"
  readonly msg = "Invalid tier type"

  constructor(readonly logs?: string[]) {
    super("6033: Invalid tier type")
  }
}

export class InvalidReferral extends Error {
  static readonly code = 6034
  readonly code = 6034
  readonly name = "InvalidReferral"
  readonly msg = "Invalid referral"

  constructor(readonly logs?: string[]) {
    super("6034: Invalid referral")
  }
}

export class InvalidPackProvided extends Error {
  static readonly code = 6035
  readonly code = 6035
  readonly name = "InvalidPackProvided"
  readonly msg = "Invalid pack provided"

  constructor(readonly logs?: string[]) {
    super("6035: Invalid pack provided")
  }
}

export class InvalidCrystalProvided extends Error {
  static readonly code = 6036
  readonly code = 6036
  readonly name = "InvalidCrystalProvided"
  readonly msg = "Invalid crystal provided"

  constructor(readonly logs?: string[]) {
    super("6036: Invalid crystal provided")
  }
}

export class FluffleClaimNotEnabled extends Error {
  static readonly code = 6037
  readonly code = 6037
  readonly name = "FluffleClaimNotEnabled"
  readonly msg = "Fluffle claim not enabled."

  constructor(readonly logs?: string[]) {
    super("6037: Fluffle claim not enabled.")
  }
}

export class FluffleAlreadyClaimed extends Error {
  static readonly code = 6038
  readonly code = 6038
  readonly name = "FluffleAlreadyClaimed"
  readonly msg = "Fluffle already claimed."

  constructor(readonly logs?: string[]) {
    super("6038: Fluffle already claimed.")
  }
}

export class InvalidFluffleMint extends Error {
  static readonly code = 6039
  readonly code = 6039
  readonly name = "InvalidFluffleMint"
  readonly msg = "Invalid Fluffle mint."

  constructor(readonly logs?: string[]) {
    super("6039: Invalid Fluffle mint.")
  }
}

export class NotValidFluffleClaimValues extends Error {
  static readonly code = 6040
  readonly code = 6040
  readonly name = "NotValidFluffleClaimValues"
  readonly msg = "Not valid Fluffle claim values."

  constructor(readonly logs?: string[]) {
    super("6040: Not valid Fluffle claim values.")
  }
}

export class TooManyRequirementsOrRewards extends Error {
  static readonly code = 6041
  readonly code = 6041
  readonly name = "TooManyRequirementsOrRewards"
  readonly msg = "Too many requirements or rewards."

  constructor(readonly logs?: string[]) {
    super("6041: Too many requirements or rewards.")
  }
}

export class InvalidTime extends Error {
  static readonly code = 6042
  readonly code = 6042
  readonly name = "InvalidTime"
  readonly msg = "Invalid time"

  constructor(readonly logs?: string[]) {
    super("6042: Invalid time")
  }
}

export class TooManyMissions extends Error {
  static readonly code = 6043
  readonly code = 6043
  readonly name = "TooManyMissions"
  readonly msg = "Too many missions"

  constructor(readonly logs?: string[]) {
    super("6043: Too many missions")
  }
}

export class InvalidSeasonNumber extends Error {
  static readonly code = 6044
  readonly code = 6044
  readonly name = "InvalidSeasonNumber"
  readonly msg = "Invalid season for feature."

  constructor(readonly logs?: string[]) {
    super("6044: Invalid season for feature.")
  }
}

export class LockedResources extends Error {
  static readonly code = 6045
  readonly code = 6045
  readonly name = "LockedResources"
  readonly msg = "Resources are locked."

  constructor(readonly logs?: string[]) {
    super("6045: Resources are locked.")
  }
}

export class InvalidMissionStatus extends Error {
  static readonly code = 6046
  readonly code = 6046
  readonly name = "InvalidMissionStatus"
  readonly msg = "Invalid mission status."

  constructor(readonly logs?: string[]) {
    super("6046: Invalid mission status.")
  }
}

export class MissingRequirement extends Error {
  static readonly code = 6047
  readonly code = 6047
  readonly name = "MissingRequirement"
  readonly msg = "Missing requirement."

  constructor(readonly logs?: string[]) {
    super("6047: Missing requirement.")
  }
}

export class StillHasRequirementsLeft extends Error {
  static readonly code = 6048
  readonly code = 6048
  readonly name = "StillHasRequirementsLeft"
  readonly msg = "Need to remove all requirements before cancelling."

  constructor(readonly logs?: string[]) {
    super("6048: Need to remove all requirements before cancelling.")
  }
}

export class InvalidMint extends Error {
  static readonly code = 6049
  readonly code = 6049
  readonly name = "InvalidMint"
  readonly msg = "Invalid mint"

  constructor(readonly logs?: string[]) {
    super("6049: Invalid mint")
  }
}

export class InvalidProgram extends Error {
  static readonly code = 6050
  readonly code = 6050
  readonly name = "InvalidProgram"
  readonly msg = "Invalid program"

  constructor(readonly logs?: string[]) {
    super("6050: Invalid program")
  }
}

export class InvalidDrkeMint extends Error {
  static readonly code = 6051
  readonly code = 6051
  readonly name = "InvalidDrkeMint"
  readonly msg = "Invalid drke mint."

  constructor(readonly logs?: string[]) {
    super("6051: Invalid drke mint.")
  }
}

export class InvalidIndex extends Error {
  static readonly code = 6052
  readonly code = 6052
  readonly name = "InvalidIndex"
  readonly msg = "Invalid index."

  constructor(readonly logs?: string[]) {
    super("6052: Invalid index.")
  }
}

export class RequirementAlreadyFilled extends Error {
  static readonly code = 6053
  readonly code = 6053
  readonly name = "RequirementAlreadyFilled"
  readonly msg = "Requirement already filled."

  constructor(readonly logs?: string[]) {
    super("6053: Requirement already filled.")
  }
}

export class RequirementMismatch extends Error {
  static readonly code = 6054
  readonly code = 6054
  readonly name = "RequirementMismatch"
  readonly msg = "Requirement mismatch."

  constructor(readonly logs?: string[]) {
    super("6054: Requirement mismatch.")
  }
}

export class InvalidRequirement extends Error {
  static readonly code = 6055
  readonly code = 6055
  readonly name = "InvalidRequirement"
  readonly msg = "Invalid requirement."

  constructor(readonly logs?: string[]) {
    super("6055: Invalid requirement.")
  }
}

export class RequiredArgument extends Error {
  static readonly code = 6056
  readonly code = 6056
  readonly name = "RequiredArgument"
  readonly msg = "Required argument."

  constructor(readonly logs?: string[]) {
    super("6056: Required argument.")
  }
}

export class NoRequirementsLeftToComplete extends Error {
  static readonly code = 6057
  readonly code = 6057
  readonly name = "NoRequirementsLeftToComplete"
  readonly msg = "No requirements left to complete."

  constructor(readonly logs?: string[]) {
    super("6057: No requirements left to complete.")
  }
}

export class InvalidOwner extends Error {
  static readonly code = 6058
  readonly code = 6058
  readonly name = "InvalidOwner"
  readonly msg = "Invalid owner."

  constructor(readonly logs?: string[]) {
    super("6058: Invalid owner.")
  }
}

export class MissingCNFTAttributes extends Error {
  static readonly code = 6059
  readonly code = 6059
  readonly name = "MissingCNFTAttributes"
  readonly msg = "Missing CNFTAttributes."

  constructor(readonly logs?: string[]) {
    super("6059: Missing CNFTAttributes.")
  }
}

export class InvalidCNFTAttributes extends Error {
  static readonly code = 6060
  readonly code = 6060
  readonly name = "InvalidCNFTAttributes"
  readonly msg = "Invalid CNFTAttributes."

  constructor(readonly logs?: string[]) {
    super("6060: Invalid CNFTAttributes.")
  }
}

export class RequirementAlreadyRemoved extends Error {
  static readonly code = 6061
  readonly code = 6061
  readonly name = "RequirementAlreadyRemoved"
  readonly msg = "Requirement already removed."

  constructor(readonly logs?: string[]) {
    super("6061: Requirement already removed.")
  }
}

export class NoRequirementsToRemove extends Error {
  static readonly code = 6062
  readonly code = 6062
  readonly name = "NoRequirementsToRemove"
  readonly msg = "No requirements to remove."

  constructor(readonly logs?: string[]) {
    super("6062: No requirements to remove.")
  }
}

export class PendingGuessEmpty extends Error {
  static readonly code = 6063
  readonly code = 6063
  readonly name = "PendingGuessEmpty"
  readonly msg = "Pending guess is empty."

  constructor(readonly logs?: string[]) {
    super("6063: Pending guess is empty.")
  }
}

export class MissionNotAvailable extends Error {
  static readonly code = 6064
  readonly code = 6064
  readonly name = "MissionNotAvailable"
  readonly msg = "Mission not currently available."

  constructor(readonly logs?: string[]) {
    super("6064: Mission not currently available.")
  }
}

export class MissionNotReadyToBeCompleted extends Error {
  static readonly code = 6065
  readonly code = 6065
  readonly name = "MissionNotReadyToBeCompleted"
  readonly msg = "Mission not ready to be completed."

  constructor(readonly logs?: string[]) {
    super("6065: Mission not ready to be completed.")
  }
}

export class InvalidRandomData extends Error {
  static readonly code = 6066
  readonly code = 6066
  readonly name = "InvalidRandomData"
  readonly msg = "Invalid random data."

  constructor(readonly logs?: string[]) {
    super("6066: Invalid random data.")
  }
}

export class RandomnessNotResolved extends Error {
  static readonly code = 6067
  readonly code = 6067
  readonly name = "RandomnessNotResolved"
  readonly msg = "Randomness not resolved."

  constructor(readonly logs?: string[]) {
    super("6067: Randomness not resolved.")
  }
}

export class InvalidCnftToBurn extends Error {
  static readonly code = 6068
  readonly code = 6068
  readonly name = "InvalidCnftToBurn"
  readonly msg = "Invalid CNFT to burn."

  constructor(readonly logs?: string[]) {
    super("6068: Invalid CNFT to burn.")
  }
}

export class CrystalDoesNotMatchCrystalAccount extends Error {
  static readonly code = 6069
  readonly code = 6069
  readonly name = "CrystalDoesNotMatchCrystalAccount"
  readonly msg = "Crystal does not match crystal account"

  constructor(readonly logs?: string[]) {
    super("6069: Crystal does not match crystal account")
  }
}

export class InvalidFamiliarType extends Error {
  static readonly code = 6070
  readonly code = 6070
  readonly name = "InvalidFamiliarType"
  readonly msg = "Invalid familiar type."

  constructor(readonly logs?: string[]) {
    super("6070: Invalid familiar type.")
  }
}

export class FamiliarTypeMismatch extends Error {
  static readonly code = 6071
  readonly code = 6071
  readonly name = "FamiliarTypeMismatch"
  readonly msg = "Familiar nft name does not match requirements."

  constructor(readonly logs?: string[]) {
    super("6071: Familiar nft name does not match requirements.")
  }
}

export class UserNotWhitelisted extends Error {
  static readonly code = 6072
  readonly code = 6072
  readonly name = "UserNotWhitelisted"
  readonly msg = "User not whitelisted."

  constructor(readonly logs?: string[]) {
    super("6072: User not whitelisted.")
  }
}

export function fromCode(code: number, logs?: string[]): CustomError | null {
  switch (code) {
    case 6000:
      return new NotSuperAdmin(logs)
    case 6001:
      return new NotBackend(logs)
    case 6002:
      return new NotAuthorized(logs)
    case 6003:
      return new InvalidValue(logs)
    case 6004:
      return new InvalidElementName(logs)
    case 6005:
      return new NotCurrentSeason(logs)
    case 6006:
      return new MissingElementInPendingGuess(logs)
    case 6007:
      return new HashAlreadySet(logs)
    case 6008:
      return new InvalidTree(logs)
    case 6009:
      return new InvalidElementProvided(logs)
    case 6010:
      return new ElementDoesNotMatchElementAccount(logs)
    case 6011:
      return new PendingGuessFull(logs)
    case 6012:
      return new IndexError(logs)
    case 6013:
      return new InvalidCollection(logs)
    case 6014:
      return new InvalidElementumMint(logs)
    case 6015:
      return new CantBuyThisElement(logs)
    case 6016:
      return new CantRemoveElementFromThisPendingGuess(logs)
    case 6017:
      return new ElementNotPartOfPendingGuess(logs)
    case 6018:
      return new InvalidSolTreasury(logs)
    case 6019:
      return new PendingGuessInvalidStatus(logs)
    case 6020:
      return new InvalidStakingRates(logs)
    case 6021:
      return new StakeableCollectionIsNotEnabled(logs)
    case 6022:
      return new NotMatchingSeason(logs)
    case 6023:
      return new InvalidNFTMint(logs)
    case 6024:
      return new InvalidNFTOwner(logs)
    case 6025:
      return new InvalidNFTAmount(logs)
    case 6026:
      return new InvalidBump(logs)
    case 6027:
      return new StakeBeforeClaiming(logs)
    case 6028:
      return new TooEarlyToClaim(logs)
    case 6029:
      return new InvalidPackTier(logs)
    case 6030:
      return new InvalidLevel(logs)
    case 6031:
      return new InvalidTokenAccount(logs)
    case 6032:
      return new InvalidStakingType(logs)
    case 6033:
      return new InvalidTierType(logs)
    case 6034:
      return new InvalidReferral(logs)
    case 6035:
      return new InvalidPackProvided(logs)
    case 6036:
      return new InvalidCrystalProvided(logs)
    case 6037:
      return new FluffleClaimNotEnabled(logs)
    case 6038:
      return new FluffleAlreadyClaimed(logs)
    case 6039:
      return new InvalidFluffleMint(logs)
    case 6040:
      return new NotValidFluffleClaimValues(logs)
    case 6041:
      return new TooManyRequirementsOrRewards(logs)
    case 6042:
      return new InvalidTime(logs)
    case 6043:
      return new TooManyMissions(logs)
    case 6044:
      return new InvalidSeasonNumber(logs)
    case 6045:
      return new LockedResources(logs)
    case 6046:
      return new InvalidMissionStatus(logs)
    case 6047:
      return new MissingRequirement(logs)
    case 6048:
      return new StillHasRequirementsLeft(logs)
    case 6049:
      return new InvalidMint(logs)
    case 6050:
      return new InvalidProgram(logs)
    case 6051:
      return new InvalidDrkeMint(logs)
    case 6052:
      return new InvalidIndex(logs)
    case 6053:
      return new RequirementAlreadyFilled(logs)
    case 6054:
      return new RequirementMismatch(logs)
    case 6055:
      return new InvalidRequirement(logs)
    case 6056:
      return new RequiredArgument(logs)
    case 6057:
      return new NoRequirementsLeftToComplete(logs)
    case 6058:
      return new InvalidOwner(logs)
    case 6059:
      return new MissingCNFTAttributes(logs)
    case 6060:
      return new InvalidCNFTAttributes(logs)
    case 6061:
      return new RequirementAlreadyRemoved(logs)
    case 6062:
      return new NoRequirementsToRemove(logs)
    case 6063:
      return new PendingGuessEmpty(logs)
    case 6064:
      return new MissionNotAvailable(logs)
    case 6065:
      return new MissionNotReadyToBeCompleted(logs)
    case 6066:
      return new InvalidRandomData(logs)
    case 6067:
      return new RandomnessNotResolved(logs)
    case 6068:
      return new InvalidCnftToBurn(logs)
    case 6069:
      return new CrystalDoesNotMatchCrystalAccount(logs)
    case 6070:
      return new InvalidFamiliarType(logs)
    case 6071:
      return new FamiliarTypeMismatch(logs)
    case 6072:
      return new UserNotWhitelisted(logs)
  }

  return null
}
