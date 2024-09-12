import _ from "lodash";
import {
  Context,
  createContext,
  createSignal,
  ParentProps,
  useContext,
} from "solid-js";
import { ElementJSON } from "~/lib/elements";

type ElementsContextType = ReturnType<typeof initialize>;

const ElementsContext: Context<ElementsContextType | undefined> =
  createContext();

export function ElementsContextProvider(props: ParentProps) {
  return (
    <ElementsContext.Provider value={initialize()}>
      {props.children}
    </ElementsContext.Provider>
  );
}

export function useElementsContext() {
  const context = useContext(ElementsContext);

  if (_.isNil(context)) {
    throw new Error("Must be wrapped in <ElementsContext>");
  }

  return context;
}

function initialize() {
  const [elements, setElements] =
    createSignal<Record<string, Record<string, ElementJSON>>>();

  function fromSeason(season: number): Record<string, ElementJSON> {
    const e = _.get(elements(), season);
    if (_.isNil(e)) {
      throw new Error("Please set elements first");
    }
    return e;
  }

  return {
    elements,
    fromSeason,
    setElements,
  };
}
