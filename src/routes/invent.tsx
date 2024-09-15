import _ from "lodash";
import { createResource, For, Suspense } from "solid-js";
import { useElementsContext } from "~/contexts/ElementsContext";
import { getImageUrlByName } from "~/lib/elements";

export default function Invent() {
  const { getElements } = useElementsContext();

  const [elements] = createResource(async () => getElements(2));

  function elementsDisplay() {
    return _.orderBy(elements(), ["tierNumber", "name"]);
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
                    {element.tierNumber}
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
