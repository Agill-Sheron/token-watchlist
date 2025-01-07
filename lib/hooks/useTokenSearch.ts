import { useQuery } from '@tanstack/react-query';
import { fetchTokens } from '@/lib/api/tokens';
import { TokenSearchParams } from '@/lib/types/token.types';

export const useTokenSearch = (params?: TokenSearchParams) => {
  return useQuery({
    queryKey: ['tokens', params?.filter],
    queryFn: () => fetchTokens(params),
    staleTime: 1000 * 60 * 5, 
    enabled: !!params?.filter,
  });
};