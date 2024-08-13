"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainConfiguration = void 0;
const core_1 = require("@midwayjs/core");
const koa = require("@midwayjs/koa");
const upload = require("@midwayjs/upload");
const validate = require("@midwayjs/validate");
const info = require("@midwayjs/info");
const serve = require("koa-static");
const crossDomain = require("@midwayjs/cross-domain");
const path_1 = require("path");
// import { DefaultErrorFilter } from './filter/default.filter';
// import { NotFoundFilter } from './filter/notfound.filter';
const report_middleware_1 = require("./middleware/report.middleware");
let MainConfiguration = class MainConfiguration {
    async onReady() {
        // add middleware
        this.app.useMiddleware([report_middleware_1.ReportMiddleware]);
        const staticDir = (0, path_1.join)(__dirname, './server/uploads');
        this.app.use(serve(staticDir));
        // add filter
        // this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
    }
};
__decorate([
    (0, core_1.App)('koa'),
    __metadata("design:type", Object)
], MainConfiguration.prototype, "app", void 0);
MainConfiguration = __decorate([
    (0, core_1.Configuration)({
        imports: [
            koa,
            validate,
            crossDomain,
            upload,
            {
                component: info,
                enabledEnvironment: ['local'],
            },
        ],
        importConfigs: [(0, path_1.join)(__dirname, './config')],
    })
], MainConfiguration);
exports.MainConfiguration = MainConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvRDtBQUNwRCxxQ0FBcUM7QUFDckMsMkNBQTJDO0FBQzNDLCtDQUErQztBQUMvQyx1Q0FBdUM7QUFDdkMsb0NBQW9DO0FBQ3BDLHNEQUFzRDtBQUN0RCwrQkFBNEI7QUFDNUIsZ0VBQWdFO0FBQ2hFLDZEQUE2RDtBQUM3RCxzRUFBa0U7QUFlM0QsSUFBTSxpQkFBaUIsR0FBdkIsTUFBTSxpQkFBaUI7SUFJNUIsS0FBSyxDQUFDLE9BQU87UUFDWCxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxvQ0FBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDM0MsTUFBTSxTQUFTLEdBQUcsSUFBQSxXQUFJLEVBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsYUFBYTtRQUNiLDREQUE0RDtJQUM5RCxDQUFDO0NBQ0YsQ0FBQTtBQVhDO0lBQUMsSUFBQSxVQUFHLEVBQUMsS0FBSyxDQUFDOzs4Q0FDVTtBQUZWLGlCQUFpQjtJQWI3QixJQUFBLG9CQUFhLEVBQUM7UUFDYixPQUFPLEVBQUU7WUFDUCxHQUFHO1lBQ0gsUUFBUTtZQUNSLFdBQVc7WUFDWCxNQUFNO1lBQ047Z0JBQ0UsU0FBUyxFQUFFLElBQUk7Z0JBQ2Ysa0JBQWtCLEVBQUUsQ0FBQyxPQUFPLENBQUM7YUFDOUI7U0FDRjtRQUNELGFBQWEsRUFBRSxDQUFDLElBQUEsV0FBSSxFQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUM3QyxDQUFDO0dBQ1csaUJBQWlCLENBWTdCO0FBWlksOENBQWlCIn0=