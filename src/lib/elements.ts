import _ from "lodash";
import { ELE_PROGRAM_ID } from "./constants";
import { Element, ElementJSON } from "./programs/elementerra/accounts";
import { solanaClient } from "./solanaClient";

export const PADDING_ADDRESS = "11111111111111111111111111111111";

const BROKEN_ELEMENTS = [
  "Fr6pnKEFTjGV36Y7NXNmGx7MBCjT6gUHE4M9azvBifni",
  "HJAmECqZCVp3pZniMrBViLvgVFHXsLgnpB7fA3sTtiGK",
];

export type ElementWithAddress = ElementJSON & {
  address: string;
  tierNumber: number;
  price: number;
};

export async function fetchElements(): Promise<ElementWithAddress[]> {
  const elementsRaw = await solanaClient.getProgramAccounts(ELE_PROGRAM_ID, {
    filters: [
      {
        memcmp: {
          offset: 0,
          bytes: Element.discriminator.toString("base64"),
          encoding: "base64",
        },
      },
    ],
  });

  const elements: ElementWithAddress[] = [];

  for (const rawElement of elementsRaw) {
    if (BROKEN_ELEMENTS.includes(rawElement.pubkey.toString())) {
      continue;
    }
    const e = Element.decode(rawElement.account.data);
    const tier = e.tier.discriminator;

    const element: ElementWithAddress = {
      ...e.toJSON(),
      address: rawElement.pubkey.toString(),
      tierNumber: tier,
      isDiscovered: tier === 0 ? true : e.isDiscovered,
      price: e.cost.toNumber(),
    };

    elements.push(element);
  }

  return elements;
}

export function getImageUrlByName(name: string): string {
  return `${import.meta.env.VITE_BASE_PATH}/images/elements/${_.kebabCase(
    name
  )}.png`;
}

export function slugifyElementName(name: string | undefined): string {
  return (name || "").replaceAll(" ", "").toLowerCase();
}

function recipeOrSelf(
  baseElements: string[],
  nextTier: number,
  element: ElementWithAddress
): string[] {
  if (baseElements.includes(element.address)) {
    return [element.address];
  }
  if (element.tierNumber < nextTier) {
    return [element.address];
  }
  return element.elementsRequired.filter((e) => e !== PADDING_ADDRESS);
}

function allBaseElements(baseElements: string[], recipe: string[]): boolean {
  for (const address of recipe) {
    if (!baseElements.includes(address)) {
      return false;
    }
  }
  return true;
}

export type ExtendedRecipe = Record<
  string,
  { element: ElementWithAddress; amount: number }
>;

export function getExtendedRecipe(
  element: ElementWithAddress,
  elements: ElementWithAddress[]
): ExtendedRecipe[] {
  const receipes: string[][] = [element.elementsRequired];
  const extendedRecipes: ExtendedRecipe[] = [];
  const baseElements = _.filter(elements, { tierNumber: 0 }).map(
    (e) => e.address
  );

  let sanityCheck = 0;

  let nextTier = element.tierNumber - 1;

  while (true) {
    const lastRecipe = _.last(receipes)!;

    let nextLevel: string[] = [];
    const extendedNextLevel: ExtendedRecipe = {};

    for (const item of lastRecipe) {
      const extendedItem = elements.find((e) => e.address === item);

      if (_.isNil(extendedItem)) {
        continue;
      }

      const elementName = extendedItem.name;
      if (!_.has(extendedNextLevel, elementName)) {
        extendedNextLevel[elementName] = {
          element: extendedItem,
          amount: 1,
        };
      } else {
        extendedNextLevel[elementName].amount += 1;
      }

      nextLevel = [
        ...nextLevel,
        ...recipeOrSelf(baseElements, nextTier, extendedItem),
      ];
    }

    extendedRecipes.push(extendedNextLevel);

    if (allBaseElements(baseElements, lastRecipe)) {
      break;
    }

    receipes.push(nextLevel);

    nextTier--;

    sanityCheck++;
    if (sanityCheck > 20) {
      break;
    }
  }

  return extendedRecipes;
}
