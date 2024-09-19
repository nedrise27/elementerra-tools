import _ from "lodash";
import {
  Context,
  createContext,
  createSignal,
  ParentProps,
  useContext,
} from "solid-js";
import { ElementWithAddress, fetchElements } from "~/lib/elements";

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
  const [elements, setElements] = createSignal<ElementWithAddress[]>([]);

  async function refreshElements() {
    const res = await fetchElements();
    setElements(res);
    return elements();
  }

  async function getElements(seasonNumber?: number) {
    if (_.isEmpty(elements())) {
      const res = await fetchElements();
      setElements(res);
    }
    if (!_.isNil(seasonNumber)) {
      return _.filter(elements(), { seasonNumber });
    }
    return elements();
  }

  async function getElement(address: string) {
    const elements_ = await getElements();
    return _.find(elements_, { address });
  }

  return {
    getElements,
    getElement,
    refreshElements,
  };
}
