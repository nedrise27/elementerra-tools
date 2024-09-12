import _ from "lodash";
import { createEffect, createResource, For, Suspense } from "solid-js";
import { ELEMENT_IMAGES_BASE_URL } from "~/lib/constants";
import { fetchElements, getImageUrlByName } from "~/lib/elements";

export default function Invent() {
  const [elements] = createResource(async () => {
    const e = await fetchElements();
    return e[import.meta.env.VITE_ELEMENTERRA_SEASON];
  });

  function elementsDisplay() {
    const e = _.values(elements());
    return _.orderBy(e, ["tier", "name"]);
  }

  return (
    <>
      <Suspense fallback={<strong>Fetching Elements ...</strong>}>
        <div class="w-full flex flex-wrap justify-center gap-1">
          <For each={elementsDisplay()}>
            {(element) => (
              <>
                <div class="relative w-28 border rounded shadow border-gray-700">
                  <div class="absolute top-1 right-1 w-2 h-2">
                    {element.tier}
                  </div>
                  <img
                    class="rounded max-w-28"
                    src={getImageUrlByName(element.name)}
                  />
                </div>
              </>
            )}
          </For>
        </div>
      </Suspense>
    </>
  );
}
