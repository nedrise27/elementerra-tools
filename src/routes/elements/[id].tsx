import { useParams } from "@solidjs/router";
import _ from "lodash";
import { createEffect, createResource, For, Show, Suspense } from "solid-js";
import { useElementsContext } from "~/contexts/ElementsContext";
import { getExtendedRecipe, getImageUrlByName } from "~/lib/elements";

export function elementDetailPath(id: string) {
  return `/elements/${id}`;
}

export default function ElementDetail() {
  const params = useParams();
  const { getElement, getElements } = useElementsContext();

  const [element] = createResource(() => params.id, getElement);
  const [elements] = createResource(async () => getElements(2));

  createEffect(() => {
    const element_ = element();
    const elements_ = elements();
    if (element_ && elements_) {
      console.log(getExtendedRecipe(element_, elements_));
    }
  });

  return (
    <>
      <Suspense fallback={<strong>Fetching Element ...</strong>}>
        <Show
          when={!_.isNil(element())}
          fallback={<>Error fetching image for {params.id}</>}
        >
          <div class="max-w-screen-md mx-auto">
            <div class="mb-4 flex flex-wrap justify-start">
              <div>
                <img
                  class="min-w-16 min-h-16 rounded-t-lg"
                  classList={{
                    grayscale: !element()?.isDiscovered,
                  }}
                  src={getImageUrlByName(element()!.name)}
                  alt=""
                />
              </div>
              <div class="flex-1">
                <p class="text-lg">
                  {element()!.name} Tier {element()!.tierNumber}
                </p>
                <p class="text-gray-400">
                  {element()!.isDiscovered ? "invented" : "not invented"}
                </p>
                <p class="">{element()!.cost} DRKE</p>
                <div class="w-full mb-10"></div>
                <Show
                  when={
                    element()!.tierNumber > 0 &&
                    element()!.isDiscovered &&
                    !_.isNil(elements())
                  }
                >
                  <p class="mb-2 text-lg text-gray-400">
                    Recipe and breakdown:
                  </p>
                  <For each={getExtendedRecipe(element()!, elements()!)}>
                    {(recipe, index) => (
                      <div class="mb-6 flex justify-between items-center">
                        <div class="flex justify-start gap-2">
                          <For each={Object.keys(recipe)}>
                            {(elementName) => (
                              <p class="text-nowrap">
                                {recipe[elementName].amount} {elementName}
                              </p>
                            )}
                          </For>
                        </div>
                        <p class="text-gray-400 text-nowrap">
                          {"<="} T{element()!.tierNumber - 1 - index()}
                        </p>
                      </div>
                    )}
                  </For>
                </Show>
              </div>
            </div>
          </div>
        </Show>
      </Suspense>
    </>
  );
}
