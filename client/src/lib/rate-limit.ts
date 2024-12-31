import { LRUCache } from "lru-cache";
import { validateEnv } from "./env";

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

class RateLimiter {
  private cache: LRUCache<string, number>;
  private readonly maxRequests: number;
  private readonly windowMs: number;

  constructor() {
    const env = validateEnv();
    this.maxRequests = env.RATE_LIMIT_MAX;
    this.windowMs = env.RATE_LIMIT_WINDOW_MS;
    this.cache = new LRUCache<string, number>({
      max: 10000, // Maximum number of items to store
      ttl: this.windowMs, // Time to live in milliseconds
    });
  }

  async limit(key: string): Promise<RateLimitResult> {
    const now = Date.now();
    const count = (this.cache.get(key) || 0) + 1;
    this.cache.set(key, count);

    return {
      success: count <= this.maxRequests,
      limit: this.maxRequests,
      remaining: Math.max(0, this.maxRequests - count),
      reset: now + this.windowMs,
    };
  }
}

export const rateLimiter = new RateLimiter();
