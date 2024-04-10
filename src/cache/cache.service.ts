import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  // eslint-disable-next-line prettier/prettier
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

  async getCache<T>(
    key: string,
    requestFunction: () => Promise<T>,
  ): Promise<T> {
    const allData: T = await this.cacheManager.get(key);

    if (allData) {
      return allData;
    }

    const cities: T = await requestFunction();

    await this.cacheManager.set(key, cities);

    return cities;
  }
}
