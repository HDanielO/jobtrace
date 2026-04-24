"use client"; 

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  // We use useState to initialize the QueryClient. 
  // This ensures that the client is created only once per session,
  // preventing data loss or unnecessary re-renders.
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // How long the data stays "fresh" in the cache (5 minutes)
            staleTime: 5 * 60 * 1000, 
            // If a request fails, how many times should it retry?
            retry: 1,
            // Should it refetch data every time the user clicks back into the tab?
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* The Devtools helps you see your data cache in real-time while developing */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}