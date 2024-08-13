import { Context } from "@midwayjs/koa";
export declare class ArticleDataController {
    ctx: Context;
    likeArticle(): Promise<{
        message: string;
    }>;
    viewArticle(): Promise<{
        message: string;
    }>;
}
