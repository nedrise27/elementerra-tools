import _ from "lodash";
import { createEffect, createResource } from "solid-js";
import { ELEMENT_IMAGES_BASE_URL } from "~/lib/constants";
import { fetchElements } from "~/lib/elements";

export default function Invent() {
  const [elements] = createResource(async () => {
    const e = await fetchElements();
    return e[2];
  });

  function imageUrl(name: string) {
    return `${ELEMENT_IMAGES_BASE_URL}/${_.kebabCase(name)}.png`;
  }

  createEffect(() => {
    console.log(elements());
  });

  return <></>;
}
