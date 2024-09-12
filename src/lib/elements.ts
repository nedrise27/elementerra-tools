import _ from "lodash";
import { ELE_PROGRAM_ID } from "./constants";
import { Element as RawElement } from "./programs/elementerra/accounts";
import { solanaClient } from "./solanaClient";

export type ElementJSON = {
  bump: number;
  seasonNumber: number;
  hash: Array<number>;
  inventor: string;
  tier: number;
  isDiscovered: boolean;
  numberOfTimesCreated: string;
  numberOfRewards: number;
  cost: string;
  elementsRequired: Array<string>;
  name: string;
  padding: Array<number>;
};

export async function fetchElements() {
  const elementsRaw = await solanaClient.getProgramAccounts(ELE_PROGRAM_ID, {
    filters: [{ memcmp: { offset: 0, bytes: "Qhcg1qqD1g9" } }],
  });

  const elements: Record<string, Record<string, ElementJSON>> = {};

  for (const rawElement of elementsRaw) {
    const e = RawElement.decode(rawElement.account.data);
    const season = e.seasonNumber;
    const name = e.name;
    const tier = e.tier.discriminator;

    const element: ElementJSON = {
      ...e.toJSON(),
      tier,
    };

    _.set(elements, [season, name], element);
  }

  return elements;
}
