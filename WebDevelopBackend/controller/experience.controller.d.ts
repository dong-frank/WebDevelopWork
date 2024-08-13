import { Context } from "@midwayjs/koa";
export declare class ExperienceController {
    ctx: Context;
    experience(): Promise<{
        message: string;
    }>;
}
