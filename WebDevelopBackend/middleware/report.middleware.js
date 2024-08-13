"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportMiddleware = void 0;
const core_1 = require("@midwayjs/core");
let ReportMiddleware = class ReportMiddleware {
    resolve() {
        return async (ctx, next) => {
            // 控制器前执行的逻辑
            const startTime = Date.now();
            // 执行下一个 Web 中间件，最后执行到控制器
            // 这里可以拿到下一个中间件或者控制器的返回值
            const result = await next();
            // 控制器之后执行的逻辑
            ctx.logger.info(`Report in "src/middleware/report.middleware.ts", rt = ${Date.now() - startTime}ms`);
            // 返回给上一个中间件的结果
            return result;
        };
    }
    static getName() {
        return 'report';
    }
};
ReportMiddleware = __decorate([
    (0, core_1.Middleware)()
], ReportMiddleware);
exports.ReportMiddleware = ReportMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0Lm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZS9yZXBvcnQubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx5Q0FBeUQ7QUFJbEQsSUFBTSxnQkFBZ0IsR0FBdEIsTUFBTSxnQkFBZ0I7SUFDM0IsT0FBTztRQUNMLE9BQU8sS0FBSyxFQUFFLEdBQVksRUFBRSxJQUFrQixFQUFFLEVBQUU7WUFDaEQsWUFBWTtZQUNaLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM3Qix5QkFBeUI7WUFDekIsd0JBQXdCO1lBQ3hCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7WUFDNUIsYUFBYTtZQUNiLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNiLHlEQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxTQUNmLElBQUksQ0FDTCxDQUFDO1lBQ0YsZUFBZTtZQUNmLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FDRixDQUFBO0FBdEJZLGdCQUFnQjtJQUQ1QixJQUFBLGlCQUFVLEdBQUU7R0FDQSxnQkFBZ0IsQ0FzQjVCO0FBdEJZLDRDQUFnQiJ9