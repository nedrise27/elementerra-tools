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
    "https://quote-api.jup.ag/v6/quote?inputMint=drkeyEtLXvHSRjCcnQbqaQSt3kaeUo2h5a4NyTVjWZd&outputMint=So11111111111111111111111111111111111111112&amount=10000000&slippageBps=300&computeAutoSlippage=true&swapMode=ExactIn&onlyDirectRoutes=false&asLegacyTransaction=false&maxAccounts=64&minimizeSlippage=false"
  );
  const body = await res.json();
  return _.toInteger(body.outAmount) / 10 ** 12;
  // const res = await fetch(
  //   `https://price.jup.ag/v6/price?ids=${ELE_CURRENCY_TOKEN_ADDRESS}&vsToken=SOL`
  // );
  // const body = await res.json();
  // return body.data?.[ELE_CURRENCY_TOKEN_ADDRESS]?.price;
}

export async function fetchEleUsdcPrice() {
  const res = await fetch(
    "https://quote-api.jup.ag/v6/quote?inputMint=drkeyEtLXvHSRjCcnQbqaQSt3kaeUo2h5a4NyTVjWZd&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=10000000&slippageBps=300&computeAutoSlippage=true&swapMode=ExactIn&onlyDirectRoutes=false&asLegacyTransaction=false&maxAccounts=64&minimizeSlippage=false"
  );
  const body = await res.json();
  return _.toInteger(body.outAmount) / 10 ** 9;
  // const res = await fetch(
  //   `https://price.jup.ag/v6/price?ids=${ELE_CURRENCY_TOKEN_ADDRESS}&vsToken=USDC`
  // );
  // const body = await res.json();
  // return body.data?.[ELE_CURRENCY_TOKEN_ADDRESS]?.price;
}
