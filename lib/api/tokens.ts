import axios from 'axios';
import { Token, TokenSearchParams } from '@/lib/types/token.types';

const API_URL = process.env.BASE_URL;
const API_KEY = process.env.HOLDER_SCAN_API_KEY;

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