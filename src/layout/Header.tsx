import { A, useMatch } from "@solidjs/router";

export function Header() {
  return (
    <>
      <nav class="border-b border-slate-800">
        <div
          class="p-4 flex flex-wrap items-baseline justify-start gap-10"
          aria-label="Global"
        >
          <div class="mr-4 text-lg text-nowrap">
            <A href="/">Elementerra Tools</A>
          </div>

          <div class="flex flex-wrap gap-6">
            <Navlink path="/check-receipe" name="Check Recipe" />
            <Navlink path="/invent" name="Invent" />
            <Navlink path="/elements" name="Elements" />
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
