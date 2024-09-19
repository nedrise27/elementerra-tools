import { useParams, useSearchParams } from "@solidjs/router";
import _ from "lodash";
import { createEffect, createResource, For, Show, Suspense } from "solid-js";
import { useElementsContext } from "~/contexts/ElementsContext";
import {
  ElementWithAddress,
  ExtendedRecipe,
  getExtendedRecipe,
  getImageUrlByName,
} from "~/lib/elements";

export function elementDetailPath(id: string) {
  return `/element?id=${id}`;
}

export default function ElementDetail() {
  const [searchParams] = useSearchParams();
  const { getElement, getElements } = useElementsContext();

  const [element] = createResource(() => searchParams.id, getElement);
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
          fallback={<>Error fetching image for {searchParams.id}</>}
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
                      <RecipeRow
                        element={element()!}
                        recipe={recipe}
                        index={index()}
                      />
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

type RecipeRowProps = {
  element: ElementWithAddress;
  recipe: ExtendedRecipe;
  index: number;
};

function RecipeRow(props: RecipeRowProps) {
  const tier = props.element.tierNumber - props.index - 1;

  function recipeElements() {
    return _.orderBy(
      Object.values(props.recipe),
      ["element.tierNumber", "element.name"],
      ["desc", "asc"]
    );
  }

  return (
    <div class="min-w-72 mb-6">
      <p class="text-gray-400 text-sm">
        <Show
          when={tier === props.element.tierNumber - 1}
          fallback={
            <Show when={tier !== 0} fallback={<>Tier 0</>}>
              Tier {"<="} {tier}
            </Show>
          }
        >
          Recipe
        </Show>
      </p>
      <div class="w-full border p-2 border-gray-500 rounded flex flex-wrap justify-start gap-4">
        <For each={recipeElements()}>
          {({ element, amount }) => (
            <p
              class="text-nowrap"
              classList={{
                "text-gray-400": element.tierNumber !== tier,
              }}
            >
              {amount} {element.name}
            </p>
          )}
        </For>
      </div>
    </div>
  );
}
