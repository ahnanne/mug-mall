import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
      retry: 1,
      gcTime: 0,
      staleTime: 0,
    },
    mutations: {
      retry: 1,
    },
  },
});
