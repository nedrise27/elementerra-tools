import { ParentProps } from "solid-js";

type Props = ParentProps & {
  extraClass?: string;
  onClick: () => void;
};

export function Button(props: Props) {
  return (
    <button
      type="button"
      class={
        "p-2 focus:ring-4 font-medium rounded-lg text-sm bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800 " +
        props.extraClass
      }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
