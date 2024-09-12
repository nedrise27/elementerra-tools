import { A } from "@solidjs/router";

export function Footer() {
  return (
    <footer class="min-h-14 border-t border-slate-800">
      <div class="p-4 flex justify-between">
        <A
          class="block w-fit"
          href="https://github.com/nedrise27/elementerra-tools"
          target="_blank"
        >
          GitHub Repository
        </A>

        <div>
          Made by
          <A
            class="text-end"
            href="https://github.com/nedrise27?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Ned Rise (nedrise)
          </A>
        </div>
      </div>
    </footer>
  );
}
