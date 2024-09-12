import _ from "lodash";
import { createResource, createSignal, For, Show, Suspense } from "solid-js";

import { ELEMENT_IMAGES_BASE_URL } from "~/lib/constants";
import { fetchElements } from "~/lib/elements";
import { ElementJSON } from "~/lib/programs/elementerra/accounts";

type Elements = Record<number, Record<string, ElementJSON>>;

export default function Elements() {
  const [season, setSeason] = createSignal("2");

  const [elements] = createResource(fetchElements);

  function availableSeasons() {
    const e = elements();
    return _.keys(e);
  }

  function elementsDisplay() {
    const e = _.values(_.get(elements(), season()));
    return _.orderBy(e, ["tier", "name"]);
  }

  function imageUrl(name: string) {
    return `${ELEMENT_IMAGES_BASE_URL}/${_.kebabCase(name)}.png`;
  }

  function handleChangeSeason(event: any) {
    setSeason(event.target.value);
  }

  return (
    <>
      <Suspense fallback={<strong>Fetching Elements ...</strong>}>
        <Show
          when={!_.isNil(elements())}
          fallback={<strong>Loading ...</strong>}
        >
          <select
            class="mb-2 border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            value={season()}
            onInput={handleChangeSeason}
          >
            <For each={availableSeasons()}>
              {(season) => <option value={season}>Season {season}</option>}
            </For>
          </select>

          <div class="w-full flex flex-wrap justify-center gap-1">
            <For each={elementsDisplay()}>
              {(element) => (
                <>
                  <div class="max-w-40 border rounded-lg shadow bg-gray-800 border-gray-700">
                    <a href="#">
                      <img
                        class="rounded-t-lg"
                        src={imageUrl(element.name)}
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
