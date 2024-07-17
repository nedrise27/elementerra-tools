import { MetaProvider } from "@solidjs/meta";
import { ParentProps, Suspense } from "solid-js";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {} & ParentProps;

export function Layout(props: Props) {
  return (
    <MetaProvider>
      <Header />

      <Suspense>
        <main
          class="section"
          style={{
            "min-height": "calc(100vh - var(--bulma-navbar-height))",
          }}
        >
          {props.children}
        </main>
      </Suspense>

      <Footer />
    </MetaProvider>
  );
}
