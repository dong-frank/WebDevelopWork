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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIController = void 0;
const core_1 = require("@midwayjs/core");
const user_service_1 = require("../service/user.service");
let APIController = class APIController {
    async getUser(uid) {
        const user = await this.userService.getUser({ uid });
        return { success: true, message: 'OK', data: user };
    }
};
__decorate([
    (0, core_1.Inject)(),
    __metadata("design:type", Object)
], APIController.prototype, "ctx", void 0);
__decorate([
    (0, core_1.Inject)(),
    __metadata("design:type", user_service_1.UserService)
], APIController.prototype, "userService", void 0);
__decorate([
    (0, core_1.Get)('/get_user'),
    __param(0, (0, core_1.Query)('uid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], APIController.prototype, "getUser", null);
APIController = __decorate([
    (0, core_1.Controller)('/api')
], APIController);
exports.APIController = APIController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci9hcGkuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBZ0U7QUFFaEUsMERBQXNEO0FBRy9DLElBQU0sYUFBYSxHQUFuQixNQUFNLGFBQWE7SUFRbEIsQUFBTixLQUFLLENBQUMsT0FBTyxDQUFlLEdBQUc7UUFDN0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDdEQsQ0FBQztDQUNGLENBQUE7QUFYQztJQUFDLElBQUEsYUFBTSxHQUFFOzswQ0FDSTtBQUViO0lBQUMsSUFBQSxhQUFNLEdBQUU7OEJBQ0ksMEJBQVc7a0RBQUM7QUFHbkI7SUFETCxJQUFBLFVBQUcsRUFBQyxXQUFXLENBQUM7SUFDRixXQUFBLElBQUEsWUFBSyxFQUFDLEtBQUssQ0FBQyxDQUFBOzs7OzRDQUcxQjtBQVhVLGFBQWE7SUFEekIsSUFBQSxpQkFBVSxFQUFDLE1BQU0sQ0FBQztHQUNOLGFBQWEsQ0FZekI7QUFaWSxzQ0FBYSJ9