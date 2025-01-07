import { create } from 'zustand';
import { Token } from '@/lib/types/token.types';

interface WatchlistState {
  tokens: Token[];
  addToken: (token: Token) => void;
  removeToken: (tokenCA: string) => void;
  isInWatchlist: (tokenCA: string) => boolean;
}

export const useWatchlistStore = create<WatchlistState>((set, get) => ({
  tokens: [], 
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