import _ from "lodash";
import { io } from "socket.io-client";
import { createSignal, For, onMount } from "solid-js";
import { isServer } from "solid-js/web";

enum EventTopics {
  inventing = "inventing",
  inventionAttempt = "inventionAttempt",
  forging = "forging",
}

type ForgeEvent = {
  eventTopic: EventTopics;
  timestamp: number;
  user: string;
  event?: any;
  element: string;
  isSuccess: boolean;
  preferHidden: boolean;
  recipe: [string, string, string, string];
};

export default function ForgingFeed() {
  const [socket, setSocket] = createSignal();
  const [subscribedFeeds, setSubscribedFeeds] = createSignal<
    Record<EventTopics, boolean>
  >({
    [EventTopics.forging]: true,
    [EventTopics.inventionAttempt]: true,
    [EventTopics.inventing]: true,
  });
  const [messages, setMessages] = createSignal<Record<string, ForgeEvent>>({});

  function printRecipe(recipe: [string, string, string, string]): string {
    return `[ ${recipe.join(" + ")} ]`;
  }

  function availableFeeds() {
    return [
      { key: EventTopics.inventing, name: "Inventions" },
      { key: EventTopics.inventionAttempt, name: "Invention Attempts" },
      { key: EventTopics.forging, name: "Regular Forge Usage" },
    ];
  }
  onMount(() => {
    if (!isServer) {
      const socket_ = io(import.meta.env.VITE_WEB_SOCKET_HOST, {
        transports: ["websocket", "polling"],
      });

      socket_.on("connect", function () {
        console.log("Connected");
      });

      socket_.on("disconnect", function () {
        console.log("Disconnected");
      });

      socket_.onAny(
        (eventTopic: string, message: ForgeEvent | ForgeEvent[]) => {
          if (_.isArray(message)) {
            message.forEach((m) => handleUpdateMessages(m));
          } else {
            handleUpdateMessages(message);
          }
        }
      );

      setSocket(socket_);
    }
  });

  function handleUpdateMessages(forgeEvent: ForgeEvent) {
    if (
      forgeEvent.preferHidden &&
      forgeEvent.eventTopic !== EventTopics.inventing
    ) {
      return;
    }

    if (!subscribedFeeds()[forgeEvent.eventTopic]) {
      return;
    }

    const hash = `${forgeEvent.timestamp}${forgeEvent.user}${
      forgeEvent.element
    }${forgeEvent.recipe.join("")}`;

    let content = "";
    if (forgeEvent.eventTopic === EventTopics.inventing) {
      content = `Invented ${forgeEvent.element}! The recipe was ${printRecipe(
        forgeEvent.recipe
      )}`;
    } else if (forgeEvent.eventTopic === EventTopics.inventionAttempt) {
      content = `Tried a new recipe ${printRecipe(forgeEvent.recipe)}`;
    } else if (forgeEvent.eventTopic === EventTopics.forging) {
      content = `Forged "${forgeEvent.element}" with recipe ${printRecipe(
        forgeEvent.recipe
      )}`;
    }

    setMessages((state) => ({
      ...state,
      [hash]: {
        ...forgeEvent,
        event: content,
      },
    }));
  }

  function handleFeedTypeSelect(target: EventTarget & HTMLInputElement) {
    const checked = target.checked;
    const eventTopic = target.value;

    setSubscribedFeeds({
      ...subscribedFeeds(),
      [eventTopic]: checked,
    });
  }

  return (
    <>
      <div class="w-full mb-8 flex flex-wrap gap-8">
        <For each={availableFeeds()}>
          {({ key, name }) => (
            <div class="flex items-center">
              <input
                id={"tier-checkbox-" + key}
                type="checkbox"
                value={key}
                checked={subscribedFeeds()[key]}
                onChange={({ currentTarget }) =>
                  handleFeedTypeSelect(currentTarget)
                }
                class="w-4 h-4 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
              />
              <label
                for={"tier-checkbox-" + key}
                class="ms-2 text-sm font-medium text-gray-300"
              >
                {name}
              </label>
            </div>
          )}
        </For>
      </div>

      <div>
        <dl class="divide-y text-white divide-gray-700">
          <For
            each={_.orderBy(Object.values(messages()), "timestamp", "desc")}
            fallback={<p>Waiting for messages ...</p>}
          >
            {(message) => (
              <>
                <div class="flex flex-col pt-4 pb-3">
                  <dt class="mb-1 md:text-lg text-gray-400">
                    {new Date(message.timestamp * 1000).toLocaleString()}:{" "}
                    {message.user}
                  </dt>
                  <dd class="text-lg font-semibold">{message.event}</dd>
                </div>
              </>
            )}
          </For>
        </dl>
      </div>
    </>
  );
}
