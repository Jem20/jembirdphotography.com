import { REDIS_URL, REDIS_TOKEN } from '@/app/config';
import { Redis } from '@upstash/redis';

const KEY_TEST = 'test';

export const redis = REDIS_URL && REDIS_TOKEN
  ? new Redis({ url: REDIS_URL, token: REDIS_TOKEN })
  : undefined;

export const warmRedisConnection = () => {
  if (redis) { redis.get(KEY_TEST); }
};

export const testRedisConnection = () => redis
  ? redis.get(KEY_TEST)
  : Promise.reject(false);
