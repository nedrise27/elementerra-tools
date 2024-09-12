import { Connection } from "@solana/web3.js";

export const solanaClient = new Connection(import.meta.env.VITE_HELIUS_API_URL);
