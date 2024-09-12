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
    const price = eleUsdcPrice();
    const eph = elePerHour();
    return calculatePrice(price, eph * hours).toFixed(2);
  }

  function calcSol(hours: number): number {
    const price = eleSolPrice();
    const eph = elePerHour();
    return calculatePrice(price, eph * hours);
  }

  onMount(() => {
    const savedElePerHour = localStorage?.getItem(ELE_PER_HOUR_KEY);
    if (!_.isNil(savedElePerHour)) {
      const elePerHour = _.toInteger(savedElePerHour);
      setElePerHour(elePerHour);
    }
  });

  async function handleElePerHourInput(value: string) {
    await handleRefreshPrices();
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
      <div class="">
        <div class="w-full mb-8 flex justify-center">
          <p class="text-xl text-bold">{ELE_CURRENCY_SYMBOL} income</p>
        </div>

        <div class="w-full mb-2 flex items-center gap-4">
          <label class="">{ELE_CURRENCY_SYMBOL}/h</label>
          <input
            type="number"
            class="block p-4 ps-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="1000"
            value={elePerHour()}
            onInput={(event) =>
              handleElePerHourInput(event.currentTarget.value)
            }
          />
        </div>

        <div class="mb-2 min-h-40 relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Period
                </th>
                <th scope="col" class="px-6 py-3">
                  {ELE_CURRENCY_SYMBOL}
                </th>
                <th scope="col" class="px-6 py-3">
                  USDC
                </th>
                <th scope="col" class="px-6 py-3">
                  SOL
                </th>
              </tr>
            </thead>
            <tbody>
              <Suspense fallback={<FallbackRows />}>
                <TableRow
                  period="Hour"
                  ele={elePerHour()}
                  usdc={calcUsdc(1)}
                  sol={calcSol(1)}
                />
                <TableRow
                  period="Day"
                  ele={elePerHour() * 24}
                  usdc={calcUsdc(24)}
                  sol={calcSol(24)}
                />
                <TableRow
                  period="Week"
                  ele={elePerHour() * 24 * 7}
                  usdc={calcUsdc(24 * 7)}
                  sol={calcSol(24 * 7)}
                />
                <TableRow
                  period="Month"
                  ele={elePerHour() * 24 * 30}
                  usdc={calcUsdc(24 * 30)}
                  sol={calcSol(24 * 30)}
                />
              </Suspense>
            </tbody>
          </table>
        </div>

        <div class="w-full flex justify-end">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleRefreshPrices}
          >
            Refresh
          </button>
        </div>
      </div>
    </>
  );
}

type TableRowProps = {
  period: string;
  ele: number | string;
  usdc: number | string;
  sol: number | string;
};

function TableRow(props: TableRowProps) {
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.period}
      </th>
      <td class="px-6 py-4">{props.ele}</td>
      <td class="px-6 py-4">{props.usdc}</td>
      <td class="px-6 py-4">{props.sol}</td>
    </tr>
  );
}

function FallbackRows() {
  return (
    <>
      <TableRow period="Hour" ele={""} usdc={""} sol={""} />
      <TableRow period="Day" ele={""} usdc={""} sol={""} />
      <TableRow period="Week" ele={""} usdc={""} sol={""} />
      <TableRow period="Month" ele={""} usdc={""} sol={""} />
    </>
  );
}
