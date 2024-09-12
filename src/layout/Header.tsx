import { A, useMatch } from "@solidjs/router";

export function Header() {
  return (
    <>
      <nav class="border-b border-slate-800">
        <div
          class="flex flex-wrap items-center justify-between mx-auto p-4"
          aria-label="Global"
        >
          <A href="/">Elementerra Tools</A>

          <div class="flex gap-4">
            <Navlink path="" name="Home" />
            {/* <Navlink path="/invent" name="Invent" /> */}
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
