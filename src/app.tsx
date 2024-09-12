import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Layout } from "./layout/Layout";
import { SolanaConnectionContextProvider } from "./contexts/SolanaConnectionContext";

import "./app.css";

export default function App() {
  return (
    <SolanaConnectionContextProvider>
      <Router base={import.meta.env.SERVER_BASE_URL} root={Layout}>
        <FileRoutes />
      </Router>
    </SolanaConnectionContextProvider>
  );
}
