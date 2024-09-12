import { createResource } from "solid-js";
import { fetchElements } from "~/lib/elements";

export default function Invent() {
  const [elements] = createResource(fetchElements);

  return <></>;
}
