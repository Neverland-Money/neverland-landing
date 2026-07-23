'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  useRef,
} from 'react';

const TVL_ENDPOINT =
  process.env.NEXT_PUBLIC_TVL_ENDPOINT ||
  'https://app.neverland.money/api/neverland/tvl';
const ENVIO_GRAPHQL_URL =
  process.env.NEXT_PUBLIC_ENVIO_GRAPHQL_URL ||
  'https://index.neverland.money/v1/graphql';

// Cache for 5 minutes
const CACHE_DURATION = 5 * 60 * 1000;

interface TvlData {
  tvl: string;
  tvlRaw: number;
  totalBorrowed: string;
  totalBorrowedRaw: number;
  activeReserves: number;
  totalReserves: number;
  timestamp: string;
  chainId: number;
  market: string;
}

interface ProtocolStats {
  totalRevenueUsd: string;
  totalTransactions: number;
  uniqueUsers: number;
}

type CombinedStats = Partial<TvlData> & Partial<ProtocolStats>;

interface UserbaseContextType {
  data: CombinedStats | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

const UserbaseContext = createContext<UserbaseContextType | undefined>(
  undefined,
);

export function UserbaseProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<CombinedStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const lastFetchTime = useRef<number>(0);

  const fetchTvlData = async (): Promise<TvlData> => {
    const response = await fetch(TVL_ENDPOINT);

    if (!response.ok) {
      throw new Error(`Failed to fetch TVL data: ${response.statusText}`);
    }

    const result: TvlData = await response.json();
    return result;
  };

  const fetchProtocolStats = async (): Promise<ProtocolStats> => {
    const res = await fetch(ENVIO_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-hasura-role': 'public',
      },
      body: JSON.stringify({
        query: `query ProtocolOverview {\n  ProtocolStats_by_pk(id: "1") {\n    totalRevenueUsd\n    totalTransactions\n    uniqueUsers\n  }\n}`,
      }),
    });

    if (!res.ok) {
      throw new Error(`Protocol stats GraphQL error ${res.status}`);
    }

    const json = await res.json();
    if (json.errors) {
      throw new Error(JSON.stringify(json.errors));
    }

    // Hasura types: totalRevenueUsd is Float (number), totalTransactions is
    // BigInt (string), uniqueUsers is Int (number); Number() covers all.
    const stats = json.data?.ProtocolStats_by_pk;
    return {
      totalRevenueUsd: String(stats?.totalRevenueUsd ?? '0'),
      totalTransactions: Number(stats?.totalTransactions ?? 0),
      uniqueUsers: Number(stats?.uniqueUsers ?? 0),
    };
  };

  const fetchData = async (forceRefresh = false) => {
    // Check cache
    const now = Date.now();
    if (!forceRefresh && data && now - lastFetchTime.current < CACHE_DURATION) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const [tvlData, protocolStats] = await Promise.all([
        fetchTvlData(),
        fetchProtocolStats(),
      ]);

      setData({ ...tvlData, ...protocolStats });
      setError(null);
      lastFetchTime.current = now;
      // Only stop loading on success
      setLoading(false);
    } catch (err) {
      console.error('Error fetching stats:', err);
      setError(err instanceof Error ? err : new Error('Unknown error'));
      // Keep loading=true on error to maintain blur effect
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserbaseContext.Provider
      value={{ data, loading, error, refetch: () => fetchData(true) }}
    >
      {children}
    </UserbaseContext.Provider>
  );
}

export function useUserbaseContext() {
  const context = useContext(UserbaseContext);
  if (context === undefined) {
    throw new Error(
      'useUserbaseContext must be used within a UserbaseProvider',
    );
  }
  return context;
}

/**
 * Format a number with thousand separators
 * @param num - Number to format
 * @returns Formatted string (e.g., "1,234,567")
 */
export function formatNumber(num: number): string {
  return num.toLocaleString('en-US');
}
