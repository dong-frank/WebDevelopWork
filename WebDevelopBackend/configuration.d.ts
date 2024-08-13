import * as koa from '@midwayjs/koa';
export declare class MainConfiguration {
    app: koa.Application;
    onReady(): Promise<void>;
}
