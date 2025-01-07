'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TokenWatchlist } from '@/components/tokens/TokenWatchlist';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="container justify-center align-center mx-auto min-h-screen px-4 py-8 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center flex-1">
          <TokenWatchlist />
        </div>
      </main>
    </QueryClientProvider>
  );
}