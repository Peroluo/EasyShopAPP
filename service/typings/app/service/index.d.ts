// This file is created by egg-ts-helper@2.1.0
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportElasticsearchIndex from '../../../app/service/elasticsearch/index';
import ExportKafukaIndex from '../../../app/service/kafuka/index';
import ExportKafukaReport from '../../../app/service/kafuka/report';
import ExportKafukaType from '../../../app/service/kafuka/type';
import ExportRedisTest from '../../../app/service/redis/test';
import ExportElasticsearchPagesIndex from '../../../app/service/elasticsearch/pages/index';
import ExportElasticsearchPagesType from '../../../app/service/elasticsearch/pages/type';
import ExportElasticsearchTrafficStatsIndex from '../../../app/service/elasticsearch/trafficStats/index';
import ExportElasticsearchTrafficStatsType from '../../../app/service/elasticsearch/trafficStats/type';
import ExportMysqlAppIndex from '../../../app/service/mysql/app/index';
import ExportMysqlAppType from '../../../app/service/mysql/app/type';
import ExportMysqlTrafficsIndex from '../../../app/service/mysql/traffics/index';
import ExportMysqlTrafficsType from '../../../app/service/mysql/traffics/type';

declare module 'egg' {
  interface IService {
    elasticsearch: {
      index: AutoInstanceType<typeof ExportElasticsearchIndex>;
      pages: {
        index: AutoInstanceType<typeof ExportElasticsearchPagesIndex>;
        type: AutoInstanceType<typeof ExportElasticsearchPagesType>;
      }
      trafficStats: {
        index: AutoInstanceType<typeof ExportElasticsearchTrafficStatsIndex>;
        type: AutoInstanceType<typeof ExportElasticsearchTrafficStatsType>;
      }
    }
    kafuka: {
      index: AutoInstanceType<typeof ExportKafukaIndex>;
      report: AutoInstanceType<typeof ExportKafukaReport>;
      type: AutoInstanceType<typeof ExportKafukaType>;
    }
    redis: {
      test: AutoInstanceType<typeof ExportRedisTest>;
    }
    mysql: {
      app: {
        index: AutoInstanceType<typeof ExportMysqlAppIndex>;
        type: AutoInstanceType<typeof ExportMysqlAppType>;
      }
      traffics: {
        index: AutoInstanceType<typeof ExportMysqlTrafficsIndex>;
        type: AutoInstanceType<typeof ExportMysqlTrafficsType>;
      }
    }
  }
}