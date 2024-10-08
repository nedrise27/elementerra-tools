import _ from "lodash";
import {
  createEffect,
  createResource,
  createSignal,
  For,
  Show,
  Suspense,
} from "solid-js";
import { Button } from "~/components/Button";
import { Select } from "~/components/Select";
import { useElementsContext } from "~/contexts/ElementsContext";
import { AddIcon } from "~/icons/Add";
import { DeleteIcon } from "~/icons/Delete";
import {
  GetRecipeSuggestionRequest,
  getRecipeSuggestions,
} from "~/lib/apiClient";
import {
  ElementWithAddress,
  getImageUrlByName,
  slugifyElementName,
} from "~/lib/elements";

type ElementToGuess = {
  element: ElementWithAddress;
  minAmount: number;
  maxAmount: number;
};

type ResultRow = {
  elements: ElementWithAddress[];
  cost: number;
};

export default function Invent() {
  const { getElements } = useElementsContext();

  const [elements] = createResource(async () => getElements(2));
  const [elementsToGuess, setElementsToGuess] = createSignal<ElementToGuess[]>(
    []
  );
  const [elementsBySlug, setElementsBySlug] =
    createSignal<Record<string, ElementWithAddress>>();

  const [request, setRequest] = createSignal<GetRecipeSuggestionRequest>();
  const [result] = createResource(request, getRecipeSuggestions);
  const [possibilities, setPossibilities] = createSignal<ResultRow[]>();
  const [alreadyTried, setAlreadyTried] = createSignal<ResultRow[]>();

  const [showElements, setShowElements] = createSignal(false);

  function availableElements() {
    const elements_ = elements();
    if (!_.isNil(elements_)) {
      return _.orderBy(_.filter(elements_, { isDiscovered: true }), [
        "tierNumber",
        "name",
      ]);
    }
  }

  function availableElementsOptions() {
    return availableElements()?.map((e) => ({
      key: `${e.name} T${e.tierNumber}`,
      value: e.address,
    }));
  }

  function defaultElementsToGuess() {
    return [
      {
        element: _.first(availableElements())!,
        minAmount: 0,
        maxAmount: 4,
      },
    ];
  }

  createEffect(() => {
    const elements_ = availableElements();
    if (!_.isNil(elements_) && !_.isEmpty(elements_)) {
      if (_.isEmpty(elementsToGuess())) {
        setElementsToGuess(defaultElementsToGuess());
      }
      const rec: Record<string, ElementWithAddress> = {};
      for (const e of elements_) {
        const slug = slugifyElementName(e.name);
        if (!_.isNil(slug)) {
          rec[slug] = e;
        }
      }
      setElementsBySlug(rec);
    }
  });

  createEffect(() => {
    if (result.state === "ready") {
      const possibilities_: ResultRow[] = [];
      for (const p of result()?.possibilities) {
        const elements = [];
        let cost = 0;
        for (const item of p) {
          const e = elementsBySlug()![item];
          elements.push(e);
          cost += e.price;
        }
        possibilities_.push({ elements, cost });
      }
      setPossibilities(possibilities_);

      const alreadyTried_ = [];
      for (const n of result()?.alreadyTried) {
        const elements = [];
        let cost = 0;
        for (const item of n) {
          const e = elementsBySlug()![item];
          elements.push(e);
          cost += e.price;
        }
        alreadyTried_.push({ elements, cost });
      }
      setAlreadyTried(alreadyTried_);
    }
  });

  function handleChangeElementToGuess(index: number, address: string) {
    const elementsToGuess_ = _.cloneDeep(elementsToGuess());
    if (elementsToGuess_[index].element.address !== address) {
      const newElement = elements()?.find((e) => e.address === address);
      if (!_.isNil(newElement)) {
        elementsToGuess_[index].element = newElement;
        setElementsToGuess(elementsToGuess_);
      }
    }
  }

  function handleMinAmountChange(index: number, value: string) {
    const number = parseInt(value, 10);
    const elementsToGuess_ = _.cloneDeep(elementsToGuess());
    elementsToGuess_[index].minAmount = _.clamp(number, 0, 4);
    setElementsToGuess(elementsToGuess_);
  }

  function handleMaxAmountChange(index: number, value: string) {
    const number = parseInt(value, 10);
    const elementsToGuess_ = _.cloneDeep(elementsToGuess());
    elementsToGuess_[index].maxAmount = _.clamp(number, 0, 4);
    setElementsToGuess(elementsToGuess_);
  }

  function handleDeleteElement(index: number) {
    const elementsToGuess_ = _.cloneDeep(elementsToGuess());
    if (elementsToGuess_.length > 1) {
      elementsToGuess_.splice(index, 1);
      setElementsToGuess(elementsToGuess_);
    }
  }

  function handleAddElement() {
    const availableElements_ = availableElements();
    const elementsToGuess_ = elementsToGuess();
    if (_.isNil(availableElements_)) return;

    let next = availableElements_[0];
    for (const available of availableElements_) {
      if (
        _.isNil(
          elementsToGuess_.find((e) => e.element.address === available.address)
        )
      ) {
        next = available;
        break;
      }
    }

    setElementsToGuess([
      ...elementsToGuess(),
      {
        element: next,
        minAmount: 0,
        maxAmount: 4,
      },
    ]);
  }

  function handleSelectElement(element: ElementWithAddress) {
    setElementsToGuess([
      ...elementsToGuess(),
      {
        element,
        minAmount: 0,
        maxAmount: 4,
      },
    ]);
  }

  function handleToggleShowElements() {
    setShowElements(!showElements());
  }

  async function handleRequestSuggetions() {
    const elements = elementsToGuess().map((e) => ({
      element: slugifyElementName(e.element.name),
      minAmount: e.minAmount,
      maxAmount: e.maxAmount,
    }));
    const tier = _.max(elementsToGuess().map((e) => e.element.tierNumber)) || 0;

    setRequest({
      elements,
      tier: tier + 1,
    });
  }

  function handleRemovePossibility(index: number) {
    const possibilities_ = _.cloneDeep(possibilities());
    possibilities_?.splice(index, 1);
    setPossibilities(possibilities_);
  }

  return (
    <>
      <Suspense fallback={<strong>Fetching Elements ...</strong>}>
        <div>
          <div class="mb-2 flex justify-end">
            <Button
              extraClass="bg-gray-600 hover:bg-gray-700"
              onClick={handleToggleShowElements}
            >
              <Show when={showElements()} fallback={"Show Elements"}>
                Hide Elements
              </Show>
            </Button>
          </div>
          <Show when={showElements()}>
            <div class="w-full mb-4 flex flex-wrap gap-1 justify-center">
              <For each={availableElements()}>
                {(element) => (
                  <>
                    <div
                      class="w-24 px-2 pb-1 pt-5 relative border rounded shadow border-gray-600 hover:cursor-pointer hover:bg-gray-800"
                      onClick={() => handleSelectElement(element)}
                    >
                      <p class="absolute top-0 text-sm text-gray-400">
                        {element.name} T{element.tierNumber}
                      </p>
                      <img
                        class=""
                        src={getImageUrlByName(element.name)}
                        alt=""
                      />
                    </div>
                  </>
                )}
              </For>
            </div>
          </Show>
          <table class="w-full mb-4 text-sm text-left rtl:text-right text-gray-400">
            <thead class="text-xs uppercase bg-gray-700 text-gray-400">
              <tr>
                <th scope="col" class="px-1 py-3">
                  Element
                </th>
                <th scope="col" class="px-1 py-3 hidden md:table-cell">
                  Tier
                </th>
                <th scope="col" class="px-1 py-3">
                  Min
                </th>
                <th scope="col" class="px-1 py-3">
                  Max
                </th>
                <th scope="col" class="px-1 py-3">
                  <Button onClick={handleAddElement}>
                    <AddIcon class="w-4 h-4 fill-black" />
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              <Show when={!_.isNil(availableElementsOptions())}>
                <For each={elementsToGuess()}>
                  {(elementToGuess, index) => (
                    <>
                      <tr class="border-b bg-gray-800 border-gray-700">
                        <th
                          scope="row"
                          class="px-4 py-2 font-medium whitespace-nowrap text-white"
                        >
                          <Select
                            value={elementToGuess.element.address}
                            options={availableElementsOptions()!}
                            onInput={(value) =>
                              handleChangeElementToGuess(index(), value)
                            }
                          />
                        </th>
                        <td class="px-1 py-4 hidden md:table-cell">
                          {elementToGuess.element.tierNumber}
                        </td>
                        <td class="px-1 py-4">
                          <input
                            type="number"
                            class="block max-w-12 p-2 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            value={elementToGuess.minAmount}
                            min={0}
                            max={4}
                            onInput={({ currentTarget }) =>
                              handleMinAmountChange(
                                index(),
                                currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td class="px-1 py-4">
                          <input
                            type="number"
                            class="block max-w-12 p-2 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            value={elementToGuess.maxAmount}
                            onInput={({ currentTarget }) =>
                              handleMaxAmountChange(
                                index(),
                                currentTarget.value
                              )
                            }
                          />
                        </td>
                        <td class="px-1 py-4">
                          <Show when={elementsToGuess()?.length > 1}>
                            <Button
                              onClick={() => handleDeleteElement(index())}
                            >
                              <DeleteIcon class="w-4 h-4 text-gray-400" />
                            </Button>
                          </Show>
                        </td>
                      </tr>
                    </>
                  )}
                </For>
              </Show>
            </tbody>
          </table>

          <div class="w-full mb-4 flex justify-between items-center">
            <Show when={result.state === "ready"} fallback={<div></div>}>
              <div class="w-full flex justify-center">
                <p class="text-lg">
                  Recipes for a Tier {request()?.tier} element
                </p>
              </div>
            </Show>

            <Button extraClass="w-20" onClick={handleRequestSuggetions}>
              Go
            </Button>
          </div>

          <div class="w-full">
            <Suspense fallback={<strong>Answer Loading ...</strong>}>
              <Show when={!_.isNil(result())}>
                <div class="mb-4">
                  <table class="w-full mb-2 text-sm text-left rtl:text-right text-gray-400">
                    <thead class="text-xs uppercase bg-gray-700 text-gray-400">
                      <tr>
                        <th colSpan="6" class="px-1 py-3">
                          <p>
                            No one tried these recipes yet. Count:{" "}
                            {result()?.numberOfPossibilies}
                          </p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <For each={possibilities()}>
                        {(resultRow, index) => (
                          <NotTriedRow
                            resultRow={resultRow}
                            onRemove={() => handleRemovePossibility(index())}
                          />
                        )}
                      </For>
                    </tbody>
                  </table>
                </div>

                <div class="mb-4">
                  <table class="w-full mb-2 text-sm text-left rtl:text-right text-gray-400">
                    <thead class="text-xs uppercase bg-gray-700 text-gray-400">
                      <tr>
                        <th colSpan="6" class="px-1 py-3">
                          <p>These recipes were already tried</p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <For each={alreadyTried()}>
                        {(resultRow) => (
                          <AlreadyTriedRow resultRow={resultRow} />
                        )}
                      </For>
                    </tbody>
                  </table>
                </div>
              </Show>
            </Suspense>
          </div>
        </div>
      </Suspense>
    </>
  );
}

type NotTriedRowProps = {
  resultRow: ResultRow;
  onRemove: () => void;
};

function NotTriedRow(props: NotTriedRowProps) {
  return (
    <tr class="border-b bg-gray-800 border-gray-700">
      <For each={props.resultRow.elements}>
        {(item) => (
          <td class="">
            <div class="p-2 flex justify-center items-center gap-1">
              <p class="hidden md:block">{item.name}</p>
              <img class="max-w-8" src={getImageUrlByName(item.name)} />
            </div>
          </td>
        )}
      </For>
      <td class="p-2 hidden md:table-cell">
        <div class="w-32 text-right">
          <p>{props.resultRow.cost} DRKE</p>
        </div>
      </td>
      <td>
        <div class="w-10">
          <Button onClick={props.onRemove}>
            <DeleteIcon class="w-4 h-4 text-gray-400" />
          </Button>
        </div>
      </td>
    </tr>
  );
}

type AlreadyTriedRowProps = {
  resultRow: ResultRow;
};

function AlreadyTriedRow(props: AlreadyTriedRowProps) {
  return (
    <tr class="border-b bg-gray-800 border-gray-700">
      <For each={props.resultRow.elements}>
        {(item) => (
          <>
            <td class="">
              <div class="p-2 flex justify-center items-center gap-1">
                <p class="hidden md:block">{item.name}</p>
                <img class="max-w-8" src={getImageUrlByName(item.name)} />
              </div>
            </td>
          </>
        )}
      </For>
      <td class="p-2 hidden md:table-cell">
        <div class="w-32 text-right">
          <p>{props.resultRow.cost} DRKE</p>
        </div>
      </td>
    </tr>
  );
}
