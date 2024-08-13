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
exports.LoginController = void 0;
const core_1 = require("@midwayjs/core");
const db_1 = require("../db");
const user_1 = require("../entity/user");
const jwt = require("jsonwebtoken");
let LoginController = class LoginController {
    async login(body) {
        if (!db_1.AppDataSource.isInitialized) {
            await db_1.AppDataSource.initialize();
        }
        const { username, password } = body;
        const userRepository = db_1.AppDataSource.getRepository(user_1.User);
        const user = await userRepository.findOne({ where: { username } });
        if (!user) {
            this.ctx.status = 401;
            return { message: "用户名错误" };
        }
        const isPasswordValid = user.password === password;
        if (!isPasswordValid) {
            this.ctx.status = 401;
            return { message: "用户名或密码错误" };
        }
        const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
        return { message: "登录成功", token };
    }
    async register(body) {
        if (!db_1.AppDataSource.isInitialized) {
            await db_1.AppDataSource.initialize();
        }
        const { username, password } = body;
        const userRepository = db_1.AppDataSource.getRepository(user_1.User);
        const user = await userRepository.findOne({ where: { username } });
        if (user) {
            this.ctx.status = 401;
            return { message: "注册失败，用户名已存在" };
        }
        const newUser = new user_1.User();
        newUser.username = username;
        newUser.password = password;
        await userRepository.save(newUser);
        return { message: "注册成功" };
    }
    async getUserData(token) {
        if (!token) {
            this.ctx.status = 401;
            return { message: "未登录" };
        }
        try {
            const tokenWithoutBearer = token.replace('Bearer ', '');
            const decoded = jwt.verify(tokenWithoutBearer, 'your_jwt_secret');
            return {
                username: decoded.username,
                id: decoded.id
            };
        }
        catch (error) {
            this.ctx.status = 401;
            return { message: "未登录" };
        }
    }
};
__decorate([
    (0, core_1.Inject)(),
    __metadata("design:type", Object)
], LoginController.prototype, "ctx", void 0);
__decorate([
    (0, core_1.Post)("/login"),
    __param(0, (0, core_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "login", null);
__decorate([
    (0, core_1.Post)("/register"),
    __param(0, (0, core_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "register", null);
__decorate([
    (0, core_1.Get)("/userdata"),
    __param(0, (0, core_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "getUserData", null);
LoginController = __decorate([
    (0, core_1.Provide)(),
    (0, core_1.Controller)("/api")
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL2xvZ2luLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTJGO0FBRTNGLDhCQUFzQztBQUN0Qyx5Q0FBc0M7QUFDdEMsb0NBQW9DO0FBSzdCLElBQU0sZUFBZSxHQUFyQixNQUFNLGVBQWU7SUFLcEIsQUFBTixLQUFLLENBQUMsS0FBSyxDQUFTLElBQXNDO1FBQ3hELElBQUksQ0FBQyxrQkFBYSxDQUFDLGFBQWEsRUFBRTtZQUNoQyxNQUFNLGtCQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbEM7UUFFRCxNQUFNLEVBQUUsUUFBUSxFQUFHLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNyQyxNQUFNLGNBQWMsR0FBRyxrQkFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFJLENBQUMsQ0FBQztRQUd6RCxNQUFNLElBQUksR0FBRyxNQUFNLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUMsRUFBQyxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUN0QixPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO1NBQzdCO1FBRUMsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUM7UUFFbkQsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDdEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQztTQUNoQztRQUVELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFD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