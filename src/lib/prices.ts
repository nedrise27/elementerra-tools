import _ from "lodash";

import { ELE_CURRENCY_TOKEN_ADDRESS } from "~/lib/constants";

export function calculatePrice(quote: number, base: number) {
  return _.round(quote * base, 8);
}

export function toFixedNoTralingZeroes(num: number, precision: number): string {
  return num.toFixed(precision).replace(/\.?0*$/, "");
}

export async function fetchEleSolPrice() {
  const res = await fetch(
    `https://price.jup.ag/v6/price?ids=${ELE_CURRENCY_TOKEN_ADDRESS}&vsToken=SOL`
  );
  const body = await res.json();
  return body.data?.[ELE_CURRENCY_TOKEN_ADDRESS]?.price;
}

export async function fetchEleUsdcPrice() {
  const res = await fetch(
    `https://price.jup.ag/v6/price?ids=${ELE_CURRENCY_TOKEN_ADDRESS}&vsToken=USDC`
  );
  const body = await res.json();
  return body.data?.[ELE_CURRENCY_TOKEN_ADDRESS]?.price;
}
