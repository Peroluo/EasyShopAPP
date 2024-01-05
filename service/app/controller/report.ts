import { Controller } from 'egg';
import { PageModelIn } from '@/app/service/elasticsearch/pages/type';
import { BluBiuResponseCode } from '@/app/extend/context.type';
import UAParser from 'ua-parser-js';
import { getUserIp } from '@/app/utils';
export default class ReportController extends Controller {
  public async index() {
    const { ctx, service } = this;
    ctx.validate(
      {
        appId: 'string',
        pageUrl: 'string',
      }, ctx.query);
    const query = ctx.query as any as PageModelIn;
    const isOk = await service.redis.cache.getAppIsUse(query.appId);
    if (isOk) {
      const parser = new UAParser();
      const agent = ctx.headers['user-agent'];
      const ip = getUserIp(ctx);
      parser.setUA(agent);
      const result = parser.getResult();
      const querys = {
        ...query,
        ip,
        browserName: result.browser.name,
        browserVersion: result.browser.version,
        browserMajor: result.browser.major,
        osName: result.os.name,
        osVersion: result.os.version,
        deviceVendor: result.device.vendor,
        deviceModel: result.device.model,
      };
      service.kafuka.report.sendMessgeToKafka(querys);
      ctx.success();
    } else {
      ctx.result(BluBiuResponseCode.APPIDNOUSE);
    }
  }
}
