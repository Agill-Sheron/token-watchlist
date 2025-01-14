import axios from 'axios';
import { Token, TokenSearchParams } from '@/lib/types/token.types';

// Use NEXT_PUBLIC prefixed environment variables for client-side access
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

if (!API_URL || !API_KEY) {
  throw new Error(`Missing required environment variables: ${!API_URL ? 'NEXT_PUBLIC_API_URL' : ''} ${!API_KEY ? 'NEXT_PUBLIC_API_KEY' : ''}`.trim());
}

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'x-api-key': API_KEY,
  },
});

export const fetchTokens = async (params?: TokenSearchParams): Promise<Token[]> => {
  try {
    const { data } = await api.get('/tokens' , {params});
    return data;
  } catch (error) {
    console.error('Error fetching tokens:', error);
    throw error;
  }
};