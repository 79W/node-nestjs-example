import type { ClientOpts } from 'redis';
import { Module, CacheModule, Global } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { RedisCacheService } from './redis-cache.service';
import { configFile } from 'src/config/config.service';

@Global()
@Module({
  imports: [
    CacheModule.register<ClientOpts>({
      ...configFile().redis_cache_config,
      store: redisStore,
    }),
  ],
  providers: [RedisCacheService],
  exports: [RedisCacheService],
})
export class RedisCacheModule {}
