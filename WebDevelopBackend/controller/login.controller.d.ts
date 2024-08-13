import { Context } from "@midwayjs/koa";
export declare class LoginController {
    ctx: Context;
    login(body: {
        username: string;
        password: string;
    }): Promise<{
        message: string;
        token?: undefined;
    } | {
        message: string;
        token: string;
    }>;
    register(body: {
        username: string;
        password: string;
    }): Promise<{
        message: string;
    }>;
    getUserData(token: string): Promise<{
        message: string;
        username?: undefined;
        id?: undefined;
    } | {
        username: any;
        id: any;
        message?: undefined;
    }>;
}
