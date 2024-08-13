import { Context } from "@midwayjs/koa";
export declare class ExploreController {
    ctx: Context;
    getArticles(): Promise<void>;
    getArticle(): Promise<void>;
}
