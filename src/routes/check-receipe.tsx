import _ from "lodash";
import { createResource, createSignal, For, Show, Suspense } from "solid-js";
import { useElementsContext } from "~/contexts/ElementsContext";
import { checkReceipe } from "~/lib/apiClient";
import { ElementWithAddress, slugifyElementName } from "~/lib/elements";

type Receipe = [string, string, string, string];

export default function CheckReceipe() {
  const { getElements } = useElementsContext();

  const [elements] = createResource(async () => getElements(2));

  const [request, setRequest] = createSignal<Receipe | undefined>();

  const [receipe, setReceipe] = createSignal<
    [
      string | undefined,
      string | undefined,
      string | undefined,
      string | undefined
    ]
  >([undefined, undefined, undefined, undefined]);

  const [result] = createResource(request, async (request) => {
    const res = await checkReceipe(request);
    return res;
  });

  function availableElements() {
    const elements_ = _.clone(elements());
    if (_.isEmpty(elements_)) {
      return [];
    }
    const available = _.orderBy(_.filter(elements_, { isDiscovered: true }), [
      "tierNumber",
      "name",
    ]);
    setReceipe([
      available[0].name,
      available[0].name,
      available[0].name,
      available[0].name,
    ]);
    return available;
  }

  function handleSelectElement(position: number, element: string) {
    const r = _.clone(receipe());
    if (!_.inRange(position, 0, 4)) {
      throw new Error(
        "Receipe position out of bounds got " +
          position +
          " expected 0, 1, 2, or 3"
      );
    }
    r[position] = element;
    setReceipe(r);
  }

  async function handleCeckReciepe() {
    const receipeToCheck = _.clone(receipe()).map(
      slugifyElementName
    ) as Receipe;
    setRequest(receipeToCheck);
  }

  return (
    <>
      <Suspense fallback={<strong>Elements loading ...</strong>}>
        <div class="mb-4 w-full flex flex-wrap justify-center items-center gap-2">
          <select
            class="min-w-28 border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            value={receipe()[0]}
            onInput={({ currentTarget }) =>
              handleSelectElement(0, currentTarget.value)
            }
          >
            <ElementsOptions elements={availableElements()} />
          </select>
          <select
            class="min-w-28 border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            value={receipe()[1]}
            onInput={({ currentTarget }) =>
              handleSelectElement(1, currentTarget.value)
            }
          >
            <ElementsOptions elements={availableElements()} />
          </select>
          <select
            class="min-w-28 border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            value={receipe()[2]}
            onInput={({ currentTarget }) =>
              handleSelectElement(2, currentTarget.value)
            }
          >
            <ElementsOptions elements={availableElements()} />
          </select>
          <select
            class="min-w-28 border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            value={receipe()[3]}
            onInput={({ currentTarget }) =>
              handleSelectElement(3, currentTarget.value)
            }
          >
            <ElementsOptions elements={availableElements()} />
          </select>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleCeckReciepe}
          >
            Check
          </button>
        </div>
      </Suspense>

      <div class="w-full flex flex-wrap justify-center items-center">
        <Suspense fallback={<strong>Answer Loading ...</strong>}>
          <Show when={!_.isNil(result()) && result()?.wasTried}>
            <p class="text-xl text-rose-700">Allready tried</p>
          </Show>
          <Show when={!_.isNil(result()) && !result()!.wasTried}>
            <p class="text-xl text-emerald-500">Not tried yet</p>
          </Show>
        </Suspense>
      </div>
    </>
  );
}

function ElementsOptions(props: { elements: ElementWithAddress[] }) {
  return (
    <For each={props.elements}>
      {(element) => (
        <>
          <option value={element.name}>
            {element.name} T{element.tierNumber}
          </option>
        </>
      )}
    </For>
  );
}
