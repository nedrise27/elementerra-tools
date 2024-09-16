import { For } from "solid-js";

type SelectOption = {
  key: string;
  value: string | number;
};

type Props = {
  value: string | number | undefined;
  options: SelectOption[];
  onInput: (value: string) => void;
};

export function Select(props: Props) {
  return (
    <>
      <select
        class="min-w-28 mr-4 border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        value={props.value}
        onInput={({ currentTarget }) => props.onInput(currentTarget.value)}
      >
        <For each={props.options}>
          {(o) => (
            <option selected={o.value == props.value} value={o.value}>
              {o.key}
            </option>
          )}
        </For>
      </select>
    </>
  );
}
