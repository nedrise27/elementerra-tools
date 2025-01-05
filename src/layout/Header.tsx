import { A, useMatch } from "@solidjs/router";

export function Header() {
  return (
    <>
      <nav class="border-b border-slate-800">
        <div class="flex flex-wrap items-baseline justify-between">
          <div
            class="p-4 flex flex-wrap items-baseline justify-start gap-10"
            aria-label="Global"
          >
            <div class="mr-4 text-lg text-nowrap">
              <A href="/">Elementerra Tools</A>
            </div>
          </div>

          <div class="pr-10">
            <a
              class="text-lg font-bold text-green-500 border border-green-500 rounded py-1 px-2"
              target="_blank"
              href="https://ape.pro/?ref=bJ6b8h2EXkXe"
            >
              Use my ape.pro referral!
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

function Navlink(props: { path: string; name: string }) {
  const matches = useMatch(() => props.path);
  return (
    <A
      class="hover:text-sky-500"
      classList={{ "text-sky-500": Boolean(matches()) }}
      href={props.path}
    >
      {props.name}
    </A>
  );
}
