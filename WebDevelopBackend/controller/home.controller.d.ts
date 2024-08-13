import { Context } from "@midwayjs/koa";
export declare class HomeController {
    ctx: Context;
    getInterestCircles(): Promise<void>;
    getMyInterestCircles(): Promise<{
        message: string;
    }>;
    joinCircle(): Promise<{
        message: string;
    }>;
    createCircle(fields: any): Promise<{
        message: string;
    }>;
    getMyInterestCircle(): Promise<any>;
}
