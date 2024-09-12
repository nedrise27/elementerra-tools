import { ParentProps } from "solid-js";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout(props: ParentProps) {
  return (
    <>
      <div class="bg-slate-900 text-slate-100">
        <Header />

        <main class="min-h-screen max-w-screen-xl mx-auto py-8 px-4 overflow-auto break-words text-balance">
          {props.children}
        </main>

        <Footer />
      </div>
    </>
  );
}
