import Image from 'next/image';
import { Token } from '@/lib/types/token.types';
import { useWatchlistStore } from '@/store/watchlist';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { X, Copy } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { copyToClipboardUtil, truncateTokenName } from '@/lib/utils';

interface TokenCardProps {
  token: Token;
  showRemoveButton?: boolean;
}

export const TokenCard = ({ token, showRemoveButton = false }: TokenCardProps) => {
  const { removeToken } = useWatchlistStore();
  const { toast } = useToast();

  const copyToClipboard = async (text: string) => {
    try {
      await copyToClipboardUtil(text);
      toast({
        description: "Contract address copied to clipboard",
      });
    } catch {
      toast({
        variant: "destructive",
        description: "Failed to copy to clipboard",
      });
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all min-h-[120px]">
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Image
            src={token.token_icon}
            alt={token.token_name}
            width={32}
            height={32}
            className="rounded-md"
          />
          <div>
            <h3 className="font-semibold">{truncateTokenName(token.token_name)}</h3>
            <p className="text-sm text-gray-500">{token.token_ticker}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => copyToClipboard(token.token_ca)}
            className="h-8 w-8"
          >
            <Copy className="h-4 w-4" />
          </Button>
          {showRemoveButton && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeToken(token.token_ca)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-0">
        <p className="text-xs text-gray-500 font-mono break-all">
          {token.token_ca}
        </p>
      </CardContent>
    </Card>
  );
}; 