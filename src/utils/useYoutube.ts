import { axiosInstance } from './axiosInstance';
import { useQuery } from '@tanstack/react-query';

async function getMostPopular() {
  const {
    data: { items },
  } = await axiosInstance.get('videos', {
    params: {
      part: 'snippet',
      chart: 'mostPopular',
      maxResults: 25,
    },
  });
  return items;
}

async function getSearch(query: string) {
  const response = await axiosInstance.get('search', {
    params: {
      part: 'snippet',
      chart: 'mostPopular',
      maxResults: 25,
      q: query,
    },
  });
  return response.data.items.map((item: any) => ({ ...item, id: item.id.videoId }));
}

interface UseMost {
  mostPopular: any[];
}

interface UseSearch {
  searchData: any[];
}

export function useMost(): UseMost {
  const fallback: any[] = [];
  const { data: mostPopular = fallback } = useQuery(['most'], getMostPopular);

  return { mostPopular };
}

export function useSearch(query: string): UseSearch {
  const fallback: any[] = [];
  const { data: searchData = fallback } = useQuery(['most'], () => getSearch(query));

  return { searchData };
}
