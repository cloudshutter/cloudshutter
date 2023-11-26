import { HttpStatus, HttpTips } from '../constants/http-status';

class AjaxResult {
  static HTTP_STATUS = 'code';
  static MSG = 'msg';
  static DATA = 'data';

  constructor(
    code?: number,
    msg?: string,
    data?: Exclude<any, string | number>,
  ) {
    if (code && msg) {
      this[AjaxResult.HTTP_STATUS] = code;
      this[AjaxResult.MSG] = msg;
    }

    if (data) {
      this[AjaxResult.DATA] = data;
    }
  }

  static success(): AjaxResult;
  static success(msg: string): AjaxResult;
  static success(data: Exclude<any, string | number>): AjaxResult;
  static success(msg: string, data?: object): AjaxResult;
  static success(code: number, msg: string, data: object): AjaxResult;
  static success(...args: any[]): AjaxResult {
    if (args.length === 0) {
      return new AjaxResult(HttpStatus.SUCCESS, HttpTips.SUCCESS, undefined);
    } else if (args.length === 1 && typeof args[0] === 'string') {
      const [msg] = args;
      return new AjaxResult(HttpStatus.SUCCESS, msg, undefined);
    } else if (args.length === 2 && typeof args[0] === 'string') {
      const [msg, data] = args;
      return new AjaxResult(HttpStatus.SUCCESS, msg, data);
    } else if (args.length === 3 && typeof args[0] === 'number') {
      const [code, msg, data] = args;
      return new AjaxResult(code, msg, data);
    }
    const [data] = args;
    return new AjaxResult(HttpStatus.SUCCESS, HttpTips.SUCCESS, data);
  }
}

export { AjaxResult };
