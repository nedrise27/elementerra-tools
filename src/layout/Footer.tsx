import { A } from "@solidjs/router";

export function Footer() {
  return (
    <footer class="min-h-14 border-t border-slate-800">
      <div class="p-4 flex justify-between">
        <A
          class="block w-fit hover:text-sky-500"
          href="https://github.com/nedrise27/elementerra-tools"
          target="_blank"
        >
          GitHub Repository
        </A>

        <div>
          Made by{" "}
          <A
            class="underline hover:text-sky-500"
            href="https://github.com/nedrise27?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            nedrise
          </A>
        </div>
      </div>
      <A href="/element"></A>
    </footer>
  );
}
