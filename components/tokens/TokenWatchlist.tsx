import { AnimatePresence, motion } from 'motion/react';
import { useWatchlistStore } from '../../store/watchlist';
import { TokenCard } from './TokenCard';
import { TokenSearchDialog } from './TokenSearchDialog';
import { AddTokenCard } from './AddTokenCard';
import { useState } from 'react';

export const TokenWatchlist = () => {
  const { tokens } = useWatchlistStore();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  if (tokens.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center  h-full w-full">
        <div className="text-center py-8 text-gray-500">
          Your watchlist is empty. Search for tokens to add them to your watchlist.
        </div>
        <AddTokenCard onClick={() => setIsSearchOpen(true)} />
        <TokenSearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      <AnimatePresence>
        {tokens.map((token) => (
          <motion.div
            key={token.token_ca}
            initial={{ opacity: 1, y: 0 }}
            exit={{ 
              opacity: 0,
              x: -20,
              transition: { 
                duration: 0.2,
                ease: "easeOut" 
              }
            }}
            layout
            transition={{ 
              layout: {
                duration: 0.2,
                ease: "easeOut"
              }
            }}
          >
            <TokenCard token={token} showRemoveButton />
          </motion.div>
        ))}
      </AnimatePresence>
      <AddTokenCard onClick={() => setIsSearchOpen(true)} />
      <TokenSearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </div>
  );
}; 