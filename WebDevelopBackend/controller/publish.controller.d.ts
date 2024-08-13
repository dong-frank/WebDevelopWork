import { Context } from "@midwayjs/koa";
export declare class PublishController {
    ctx: Context;
    publish(fields: any): Promise<{
        message: string;
        data?: undefined;
    } | {
        message: string;
        data: any;
    }>;
}
