import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { CacheModule as NestCache } from '@nestjs/cache-manager';

@Module({
  imports: [
    NestCache.register({
      ttl: 3600,
    }),
  ],
  providers: [CacheService],
  exports: [CacheService],
})
// eslint-disable-next-line prettier/prettier
export class CacheModule { }
