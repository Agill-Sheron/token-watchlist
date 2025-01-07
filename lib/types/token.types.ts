export interface Token {
  token_ca: string;
  token_name: string;
  token_ticker: string;
  token_icon: string;
  network: string;
}

export interface TokenSearchParams {
  limit?: number;
  filter?: string;
} 