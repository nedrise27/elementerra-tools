import { Route, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ErrorBoundary, Suspense } from "solid-js";

import "./app.css";
import { SolanaConnectionContextProvider } from "./contexts/SolanaConnectionContext";
import { Layout } from "./layout/Layout";
import { ElementsContextProvider } from "./contexts/ElementsContext";

export default function App() {
  return (
    <SolanaConnectionContextProvider>
      <ElementsContextProvider>
        <Router
          base={import.meta.env.SERVER_BASE_URL}
          root={(props) => (
            <ErrorBoundary fallback={<>Unexpected Error</>}>
              <Suspense>
                <Layout>{props.children}</Layout>
              </Suspense>
            </ErrorBoundary>
          )}
        >
          <FileRoutes />
        </Router>
      </ElementsContextProvider>
    </SolanaConnectionContextProvider>
  );
}
