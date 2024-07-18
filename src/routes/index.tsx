import _ from "lodash";
import { createResource, createSignal, onMount, Suspense } from "solid-js";

import { ELE_CURRENCY_SYMBOL } from "~/lib/constants";
import {
  calculatePrice,
  fetchEleSolPrice,
  fetchEleUsdcPrice,
} from "~/lib/prices";

const ELE_PER_HOUR_KEY = "userElePerHour";

export default function Home() {
  const [eleSolPrice, eleSolPriceActions] = createResource(fetchEleSolPrice);
  const [eleUsdcPrice, eleUsdcPriceActions] = createResource(fetchEleUsdcPrice);

  const [elePerHour, setElePerHour] = createSignal(1000);

  function calcUsdc(hours: number): string {
    return calculatePrice(eleUsdcPrice() || 0, elePerHour() * hours).toFixed(2);
  }

  function calcSol(hours: number): number {
    return calculatePrice(eleSolPrice() || 0, elePerHour() * hours);
  }

  onMount(() => {
    const savedElePerHour = _.toInteger(
      localStorage?.getItem(ELE_PER_HOUR_KEY)
    );
    if (!_.isNil(savedElePerHour) && !_.isNaN(savedElePerHour)) {
      setElePerHour(savedElePerHour);
    }
  });

  function handleElePerHourInput(value: string) {
    const v = _.toInteger(value);
    if (!_.isNil(v) && !_.isNaN(v)) {
      setElePerHour(v);
      localStorage?.setItem(ELE_PER_HOUR_KEY, v.toString());
    }
  }

  async function handleRefreshPrices() {
    await Promise.all([
      eleSolPriceActions.refetch(),
      eleUsdcPriceActions.refetch(),
    ]);
  }

  return (
    <>
      <div class="container is-max-desktop">
        <h1 class="title">{ELE_CURRENCY_SYMBOL} income</h1>

        <div class="field columns is-mobile is-vcentered">
          <div class="column">
            <label class="label">{ELE_CURRENCY_SYMBOL}/h</label>
          </div>

          <div class="column control">
            <input
              class="input"
              type="number"
              value={elePerHour()}
              onInput={(event) =>
                handleElePerHourInput(event.currentTarget.value)
              }
            />
          </div>

          <div class="column">
            <button class="button" onClick={handleRefreshPrices}>
              refresh
            </button>
          </div>
        </div>

        <Suspense fallback={<progress class="progress" />}>
          <table class="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>Period</th>
                <th class="has-text-right">{ELE_CURRENCY_SYMBOL}</th>
                <th class="has-text-right">USDC</th>
                <th class="has-text-right">SOL</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>Hour</th>
                <td class="has-text-right">{elePerHour()}</td>
                <td class="has-text-right">{calcUsdc(1)}</td>
                <td class="has-text-right">{calcSol(1)}</td>
              </tr>
              <tr>
                <th>Day</th>
                <td class="has-text-right">{elePerHour() * 24}</td>
                <td class="has-text-right">{calcUsdc(24)}</td>
                <td class="has-text-right">{calcSol(24)}</td>
              </tr>
              <tr>
                <th>Week</th>
                <td class="has-text-right">{elePerHour() * 24 * 7}</td>
                <td class="has-text-right">{calcUsdc(24 * 7)}</td>
                <td class="has-text-right">{calcSol(24 * 7)}</td>
              </tr>
              <tr>
                <th>Month</th>
                <td class="has-text-right">{elePerHour() * 24 * 30}</td>
                <td class="has-text-right">{calcUsdc(24 * 30)}</td>
                <td class="has-text-right">{calcSol(24 * 30)}</td>
              </tr>
            </tbody>
          </table>
        </Suspense>
      </div>
    </>
  );
}
