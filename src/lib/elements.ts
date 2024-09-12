import _ from "lodash";
import { ELE_PROGRAM_ID } from "./constants";
import { Element } from "./programs/elementerra/accounts";
import { solanaClient } from "./solanaClient";

export async function fetchElements() {
  const elementsRaw = await solanaClient.getProgramAccounts(ELE_PROGRAM_ID, {
    filters: [{ memcmp: { offset: 0, bytes: "Qhcg1qqD1g9" } }],
  });

  const elements = {};

  for (const rawElement of elementsRaw) {
    const e = Element.decode(rawElement.account.data);
    const season = e.seasonNumber;
    const name = e.name;
    const tier = e.tier.discriminator;

    const element = {
      ...e.toJSON(),
      tier,
    };

    _.set(elements, [season, name], element);
  }

  return elements;
}
