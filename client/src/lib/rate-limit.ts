import { LRUCache } from "lru-cache";

export function rateLimit({
  interval,
  uniqueTokenPerInterval,
}: {
  interval: number;
  uniqueTokenPerInterval: number;
}) {
  const tokenCache = new LRUCache({
    max: uniqueTokenPerInterval,
    ttl: interval,
  });

  return {
    check: async (request: Request, limit: number, token: string) => {
      const tokenCount = (tokenCache.get(token) as number[]) || [0];
      if (tokenCount[0] === 0) {
        tokenCache.set(token, tokenCount);
      }
      tokenCount[0] += 1;

      const currentUsage = tokenCount[0];
      const isRateLimited = currentUsage >= limit;

      if (isRateLimited) {
        throw new Error("Rate limit exceeded");
      }

      return {
        isRateLimited: false,
        currentUsage,
      };
    },
  };
}
