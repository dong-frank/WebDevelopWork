import { Context } from "@midwayjs/koa";
export declare class CommentController {
    ctx: Context;
    comment(fields: any): Promise<{
        message: string;
        success?: undefined;
        data?: undefined;
    } | {
        success: boolean;
        data: any;
        message: string;
    }>;
}
