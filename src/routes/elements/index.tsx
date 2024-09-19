import { PublicKey } from "@solana/web3.js";
import _, { values } from "lodash";
import {
  createEffect,
  createResource,
  createSignal,
  For,
  Show,
  Suspense,
} from "solid-js";

import { A } from "@solidjs/router";
import stringSimilarity from "string-similarity-js";
import { useElementsContext } from "~/contexts/ElementsContext";
import { ElementWithAddress, getImageUrlByName } from "~/lib/elements";
import { ElementJSON } from "~/lib/programs/elementerra/accounts";
import { elementDetailPath } from "./[id]";
import { Select } from "~/components/Select";
import { Button } from "~/components/Button";

type Elements = Record<number, Record<string, ElementJSON>>;

type Ordering =
  | "tierNumber:asc"
  | "tierNumber:desc"
  | "price:asc"
  | "price:desc"
  | "name:asc"
  | "name:desc";

type Filter =
  | "all"
  | "invented"
  | "not invented"
  | "chests available"
  | "no chests available";

export default function Elements() {
  const { refreshElements } = useElementsContext();

  const [season, setSeason] = createSignal(2);
  const [ordering, setOrdering] = createSignal<Ordering>("tierNumber:asc");
  const [search, setSearch] = createSignal<string>("");
  const [tierFilters, setTierFilters] = createSignal<Set<number>>(new Set());
  const [inventedFilter, setInventedFilter] = createSignal<Filter>("all");

  const [elements, { refetch }] = createResource(async () => refreshElements());
  const [elementsDisplay, setElementsDisplay] = createSignal<
    ElementWithAddress[]
  >([]);

  function availableSeasons() {
    return [
      { key: "Season 1", value: "1" },
      { key: "Season 2", value: "2" },
    ];
  }

  function availableOrdering() {
    return [
      { key: "Tier ascending", value: "tierNumber:asc" },
      { key: "Tier descending", value: "tierNumber:desc" },
      { key: "Name ascending", value: "name:asc" },
      { key: "Name descending", value: "name:desc" },
      { key: "Price ascending", value: "price:asc" },
      { key: "Price descending", value: "price:desc" },
    ];
  }

  function availableFilters() {
    return [
      { key: "All", value: "all" },
      { key: "Invented", value: "invented" },
      { key: "Not invented", value: "not invented" },
      { key: "Chests available", value: "chests available" },
      { key: "No Chests Available", value: "no chests available" },
    ];
  }

  function availableTiers() {
    return [
      { key: "T0", value: "0" },
      { key: "T1", value: "1" },
      { key: "T2", value: "2" },
      { key: "T3", value: "3" },
      { key: "T4", value: "4" },
      { key: "T5", value: "5" },
      { key: "T6", value: "6" },
      { key: "T7", value: "7" },
    ];
  }

  createEffect(() => {
    const elements_ = (elements() || []).filter(
      (e) => e.seasonNumber === season()
    );

    let filtered: ElementWithAddress[];

    if (inventedFilter() === "invented") {
      filtered = _.filter(elements_, { isDiscovered: true });
    } else if (inventedFilter() === "not invented") {
      filtered = _.filter(elements_, { isDiscovered: false });
    } else if (inventedFilter() === "chests available") {
      filtered = _.filter(
        elements_,
        ({ numberOfRewards, isDiscovered }) =>
          numberOfRewards > 0 && isDiscovered
      );
    } else if (inventedFilter() === "no chests available") {
      filtered = _.filter(
        elements_,
        ({ numberOfRewards, isDiscovered }) =>
          numberOfRewards <= 0 || !isDiscovered
      );
    } else {
      filtered = _.clone(elements_);
    }

    // tierFilters
    if (!_.isEmpty(tierFilters())) {
      filtered = filtered.filter((e) =>
        Array.from(tierFilters()).includes(e.tierNumber)
      );
    }

    // ordering
    const field = ordering().split(":")[0];
    const order = ordering().split(":")[1];

    if (order !== "asc" && order !== "desc") {
      throw new Error(`Unkown order: "${order}"`);
    }

    filtered = _.orderBy(filtered, [field, "name"], [order, "asc"]);

    if (field === "price") {
      const parts = _.partition(filtered, (e) => e.price != 0);
      filtered = [...parts[0], ...parts[1]];
    }

    // search
    if (!_.isNil(search) || !_.isEmpty(search)) {
      filtered = _.sortBy(
        filtered,
        (a) =>
          stringSimilarity(a.name.toLowerCase(), search().toLowerCase()) * -1
      );
    }

    setElementsDisplay(filtered);
  });

  function handleSearchInput(value: string) {
    setSearch(value);
  }

  function handleChangeSeason(value: string) {
    setSeason(parseInt(value, 10));
  }

  function handleChangeOrdering(value: string) {
    setOrdering(value as Ordering);
  }

  function handleChangeFilter(value: string) {
    setInventedFilter(value as Filter);
  }

  function handleTierFilterSelect(target: HTMLInputElement) {
    const checked = target.checked;
    const tier = parseInt(target.value, 10);
    let tiersToFilter = _.clone(tierFilters());
    if (checked) {
      tiersToFilter.add(tier);
    } else {
      tiersToFilter.delete(tier);
    }
    setTierFilters(tiersToFilter);
  }

  async function handleRefreshElements() {
    await refetch();
  }

  return (
    <>
      <div class="w-full mb-4">
        <label for="search" class="mb-2 text-sm font-medium sr-only text-white">
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            class="block w-full p-4 ps-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search"
            value={search()}
            onInput={({ currentTarget }) =>
              handleSearchInput(currentTarget.value)
            }
          />
        </div>
      </div>

      <div class="w-full mb-4 pb-2 border-b border-gray-600 flex flex-wrap gap-1">
        <Select
          value={season()}
          options={availableSeasons()}
          onInput={handleChangeSeason}
        />
        <Select
          value={ordering()}
          options={availableOrdering()}
          onInput={handleChangeOrdering}
        />
        <Select
          value={inventedFilter()}
          options={availableFilters()}
          onInput={handleChangeFilter}
        />

        <div class="flex flex-wrap items-center gap-3">
          <For each={availableTiers()}>
            {({ key, value }) => (
              <div class="flex items-center">
                <input
                  id={"tier-checkbox-" + key}
                  type="checkbox"
                  value={value}
                  onChange={({ currentTarget }) =>
                    handleTierFilterSelect(currentTarget)
                  }
                  class="w-4 h-4 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                />
                <label
                  for={"tier-checkbox-" + key}
                  class="ms-2 text-sm font-medium text-gray-300"
                >
                  {key}
                </label>
              </div>
            )}
          </For>
        </div>

        <div class="flex-1 flex justify-end">
          <Button onClick={handleRefreshElements}>Refresh</Button>
        </div>
      </div>

      <Suspense fallback={<strong>Fetching Elements ...</strong>}>
        <Show
          when={!_.isNil(elements())}
          fallback={<strong>Loading ...</strong>}
        >
          <div class="w-full flex flex-wrap justify-center gap-2">
            <For each={elementsDisplay()}>
              {(element) => (
                <>
                  <div
                    class="w-44 p-4 border rounded-lg shadow bg-gray-800 border-gray-700"
                    classList={{
                      "border-sky-400":
                        element.numberOfRewards > 0 && element.isDiscovered,
                    }}
                  >
                    <div class="flex felx-wrap justify-between">
                      <div>
                        <p class="text-nowrap">T{element.tierNumber}</p>
                        <p class="text-nowrap">
                          {element.isDiscovered ? "invented" : "not invented"}
                        </p>
                      </div>
                      <A href={elementDetailPath(element.address)}>
                        <img
                          class="max-w-16 rounded-t-lg"
                          classList={{
                            grayscale: !element.isDiscovered,
                          }}
                          src={getImageUrlByName(element.name)}
                          alt=""
                        />
                      </A>
                    </div>
                    <div class="">
                      <A
                        href={elementDetailPath(element.address)}
                        class="font-lg text-nowrap"
                      >
                        {element.name}
                      </A>
                      <p class="font-normal text-gray-400">
                        {element.price === 0
                          ? "Price TBD"
                          : element.price + " DKRE"}
                      </p>
                      <Show
                        when={
                          element.numberOfRewards > 0 && element.isDiscovered
                        }
                      >
                        <p class="text-gray-400">
                          chests left: {element.numberOfRewards}
                        </p>
                      </Show>
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
