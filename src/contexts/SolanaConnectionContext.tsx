import { Connection } from "@solana/web3.js";
import _ from "lodash";
import { Context, createContext, ParentProps, useContext } from "solid-js";

type SolanaConnectionContextType = ReturnType<typeof initialize>;

const SolanaConnectionContext: Context<
  SolanaConnectionContextType | undefined
> = createContext();

export function SolanaConnectionContextProvider(props: ParentProps) {
  return (
    <SolanaConnectionContext.Provider value={initialize()}>
      {props.children}
    </SolanaConnectionContext.Provider>
  );
}

export function useSolanaConnectionContext() {
  const context = useContext(SolanaConnectionContext);

  if (_.isNil(context)) {
    throw new Error("Must be wrapped in <SolanaConnectionContextProvider>");
  }

  return context;
}

function initialize() {
  const connection = new Connection(import.meta.env.VITE_HELIUS_API_URL);

  return {
    connection,
  };
}
