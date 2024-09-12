import _ from "lodash";
import { createEffect, createResource } from "solid-js";
import { ELEMENT_IMAGES_BASE_URL } from "~/lib/constants";
import { fetchElements } from "~/lib/elements";

export default function Invent() {
  const [elements] = createResource(fetchElements);

  function imageUrl(name: string) {
    return `${ELEMENT_IMAGES_BASE_URL}/${_.kebabCase(name)}.png`;
  }

  createEffect(() => {
    const imageUrls = _.values(_.get(elements(), 1)).map((e) =>
      imageUrl(e.name)
    );

    console.log(imageUrls);
  });

  return <></>;
}
