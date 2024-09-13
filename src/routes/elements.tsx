import { PublicKey } from "@solana/web3.js";
import _ from "lodash";
import { createResource, createSignal, For, Show, Suspense } from "solid-js";

import { ELEMENT_IMAGES_BASE_URL } from "~/lib/constants";
import { fetchElements, getImageUrlByName } from "~/lib/elements";
import { ElementJSON } from "~/lib/programs/elementerra/accounts";

type Elements = Record<number, Record<string, ElementJSON>>;

export default function Elements() {
  const [season, setSeason] = createSignal("2");
  const [tierFilter, setTierFilter] = createSignal<string[]>([]);

  const [elements] = createResource(fetchElements);

  function availableSeasons() {
    const e = elements();
    return _.keys(e);
  }

  function availableTiers() {
    const maxTier =
      _.max(_.values(_.get(elements(), season())).map((e) => e.tier)) || 1;
    return _.range(0, maxTier + 1);
  }

  function elementsById() {
    let elementRecord: Record<string, ElementJSON> = {};
    for (const e of _.values(_.get(elements(), season()))) {
      const hash = new PublicKey(e.hash).toString();
      _.set(elementRecord, hash, e);
    }

    return elementRecord;
  }

  function elementsDisplay() {
    let filtered = _.clone(_.values(_.get(elements(), season())));

    if (!_.isEmpty(tierFilter())) {
      filtered = filtered.filter((e) =>
        tierFilter().includes(e.tier.toString())
      );
    }

    return _.orderBy(filtered, ["tier", "name"]);
  }

  function elementReceipe(element: ElementJSON) {
    const record = elementsById();
    console.log(record);
    console.log(element.elementsRequired);
    console.log(element.elementsRequired.map((e) => _.get(record, e)));
    return "";
  }

  function handleChangeSeason(event: any) {
    setSeason(event.target.value);
  }

  function handleTierFilterSelect(target: HTMLInputElement) {
    const checked = target.checked;
    const tier = target.value;
    let tiers = _.clone(tierFilter());
    if (checked && !tiers.includes(tier)) {
      tiers.push(tier);
    }
    if (!checked && tiers.includes(tier)) {
      const i = tiers.indexOf(tier);
      if (i != -1) {
        tiers.splice(i, 1);
      }
    }
    setTierFilter(tiers);
  }

  return (
    <>
      <Suspense fallback={<strong>Fetching Elements ...</strong>}>
        <div class="w-full mb-4 pb-2 border-b border-gray-600 flex flex-wrap gap-1">
          <select
            class="min-w-28 mr-4 border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            value={season()}
            onInput={handleChangeSeason}
          >
            <For each={availableSeasons()}>
              {(s) => (
                <option selected={s == season()} value={s}>
                  Season {s}
                </option>
              )}
            </For>
          </select>

          <div class="flex flex-wrap items-center gap-3">
            <For each={availableTiers()}>
              {(tier) => (
                <div class="flex items-center">
                  <input
                    id={"tier-checkbox-" + tier}
                    type="checkbox"
                    value={tier}
                    onChange={({ currentTarget }) =>
                      handleTierFilterSelect(currentTarget)
                    }
                    class="w-4 h-4 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                  />
                  <label
                    for={"tier-checkbox-" + tier}
                    class="ms-2 text-sm font-medium text-gray-300"
                  >
                    T{tier}
                  </label>
                </div>
              )}
            </For>
          </div>
        </div>

        <Show
          when={!_.isNil(elements())}
          fallback={<strong>Loading ...</strong>}
        >
          <div class="w-full flex flex-wrap justify-center gap-1">
            <For each={elementsDisplay()}>
              {(element) => (
                <>
                  <div class="max-w-40 border rounded-lg shadow bg-gray-800 border-gray-700">
                    <a href="#">
                      <img
                        class="rounded-t-lg"
                        src={getImageUrlByName(element.name)}
                        alt=""
                      />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-l font-bold tracking-tight text-white">
                          {element.name}
                        </h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-400">
                        Tier: {element.tier}
                      </p>
                      <p class="mb-3 font-normal text-gray-400">
                        Price: {element.cost != "0" ? element.cost : "TBD"}
                      </p>
                      <p>
                        <Show
                          when={element.isDiscovered || element.tier == 0}
                          fallback={<p>Not discovered</p>}
                        >
                          <p>Discovered</p>
                        </Show>

                        <Show when={element.isDiscovered && element.tier != 0}>
                          <p>Inventor:</p>{" "}
                          <p class="text-sm">{element.inventor.toString()}</p>
                        </Show>

                        {/* <Show when={element.isDiscovered}>
                          <p>{elementReceipe(element)}</p>
                        </Show> */}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </For>
          </div>
        </Show>
      </Suspense>
    </>
  );
}
