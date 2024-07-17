import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Layout } from "./layout/Layout";

export default function App() {
  return (
    <Router base={import.meta.env.SERVER_BASE_URL} root={Layout}>
      <FileRoutes />
    </Router>
  );
}
