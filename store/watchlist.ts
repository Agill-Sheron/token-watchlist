import { create } from 'zustand';
import { Token } from '@/lib/types/token.types';

const mockTokens: Token[] = [
  {
    token_ca: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
    token_name: "Bonk",
    token_ticker: "BONK",
    token_icon: "https://github.com/shadcn.png",
    network: "SOL"
  },
  {
    token_ca: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
    token_name: "Samoyedcoin",
    token_ticker: "SAMO",
    token_icon: "https://github.com/shadcn.png",
    network: "SOL"
  },
  {
    token_ca: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    token_name: "USD Coin",
    token_ticker: "USDC",
    token_icon: "https://github.com/shadcn.png",
    network: "SOL"
  },
  {
    token_ca: "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
    token_name: "Marinade Staked SOL",
    token_ticker: "mSOL",
    token_icon: "https://github.com/shadcn.png",
    network: "SOL"
  },
  {
    token_ca: "So11111111111111111111111111111111111111112",
    token_name: "Wrapped SOL",
    token_ticker: "wSOL",
    token_icon: "https://github.com/shadcn.png",
    network: "SOL"
  },
  {
    token_ca: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
    token_name: "Raydium",
    token_ticker: "RAY",
    token_icon: "https://github.com/shadcn.png",
    network: "SOL"
  },
  {
    token_ca: "AFbX8oGjGpmVFywbVouvhQSRmiW2aR1mohfahi4Y2AdB",
    token_name: "Genopets",
    token_ticker: "GENE",
    token_icon: "https://github.com/shadcn.png",
    network: "SOL"
  },
  {
    token_ca: "MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac",
    token_name: "Mango",
    token_ticker: "MNGO",
    token_icon: "https://github.com/shadcn.png",
    network: "SOL"
  },
  {
    token_ca: "StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT",
    token_name: "Step Finance",
    token_ticker: "STEP",
    token_icon: "https://github.com/shadcn.png",
    network: "SOL"
  },
];

interface WatchlistState {
  tokens: Token[];
  addToken: (token: Token) => void;
  removeToken: (tokenCA: string) => void;
  isInWatchlist: (tokenCA: string) => boolean;
}

export const useWatchlistStore = create<WatchlistState>((set, get) => ({
  tokens: mockTokens, 
  addToken: (token) => {
    if (!get().isInWatchlist(token.token_ca)) {
      set((state) => ({ tokens: [...state.tokens, token] }));
    }
  },
  removeToken: (tokenCA) =>
    set((state) => ({
      tokens: state.tokens.filter((t) => t.token_ca !== tokenCA),
    })),
  isInWatchlist: (tokenCA) =>
    get().tokens.some((token) => token.token_ca === tokenCA),
})); 