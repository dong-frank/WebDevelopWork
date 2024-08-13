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
exports.HomeController = void 0;
const core_1 = require("@midwayjs/core");
const db_1 = require("../db");
const interest_circle_1 = require("../entity/interest-circle");
const user_1 = require("../entity/user");
const user_circle_experience_1 = require("../entity/user-circle-experience");
const jwt = require("jsonwebtoken");
let HomeController = class HomeController {
    async getInterestCircles() {
        if (!db_1.AppDataSource.isInitialized) {
            await db_1.AppDataSource.initialize();
        }
        const interestCircleRepository = db_1.AppDataSource.getRepository(interest_circle_1.InterestCircle);
        const interestCircles = await interestCircleRepository.find({ relations: ['users'] });
        console.log(interestCircles);
        this.ctx.body = {
            success: true,
            data: interestCircles
        };
    }
    async getMyInterestCircles() {
        if (!db_1.AppDataSource.isInitialized) {
            await db_1.AppDataSource.initialize();
        }
        const token = (this.ctx.request.body.token);
        let decoded;
        try {
            decoded = jwt.verify(token, 'your_jwt_secret');
        }
        catch (err) {
            console.error(err);
            this.ctx.status = 401;
            return { message: '用户不存在,请先注册或登录' };
        }
        const userRepository = db_1.AppDataSource.getRepository(user_1.User);
        const user = await userRepository.findOne({ where: { id: decoded.id }, relations: ['circles', 'circles.users'] });
        this.ctx.body = {
            success: true,
            data: user.circles
        };
    }
    async joinCircle() {
        if (!db_1.AppDataSource.isInitialized) {
            await db_1.AppDataSource.initialize();
        }
        const token = (this.ctx.request.body.token);
        const circleId = (this.ctx.request.body.circleId);
        let decoded;
        try {
            decoded = jwt.verify(token, 'your_jwt_secret');
        }
        catch (err) {
            console.error(err);
            this.ctx.status = 401;
            return { message: '用户不存在,请先注册或登录' };
        }
        const userRepository = db_1.AppDataSource.getRepository(user_1.User);
        const user = await userRepository.findOne({ where: { id: decoded.id }, relations: ['circles'] });
        const interestCircleRepository = db_1.AppDataSource.getRepository(interest_circle_1.InterestCircle);
        const interestCircle = await interestCircleRepository.findOne({ where: { id: circleId }, relations: ['users'] });
        const userCircleExperienceRepository = db_1.AppDataSource.getRepository(user_circle_experience_1.UserCircleExperience);
        if (!interestCircle.users.some(u => u.id === user.id)) {
            interestCircle.users.push(user);
            await interestCircleRepository.save(interestCircle);
            const interestCircleNew = await interestCircleRepository.findOne({ where: { id: circleId } });
            user.circles.push(interestCircleNew);
            await userRepository.save(user);
            const userCircleExperience = new user_circle_experience_1.UserCircleExperience();
            userCircleExperience.user = user;
            userCircleExperience.circle = interestCircle;
            userCircleExperience.experience = 0;
            await userCircleExperienceRepository.save(userCircleExperience);
            return { message: '加入成功' };
        }
        else {
            return { message: '加入失败,您已加入该圈子' };
        }
    }
    async createCircle(fields) {
        if (!db_1.AppDataSource.isInitialized) {
            await db_1.AppDataSource.initialize();
        }
        const { name, avatar, intro, token } = fields;
        // console.log(fields);
        console.log(name);
        console.log(avatar);
        console.log(intro);
        // const token = ((this.ctx.request.body as { token: string }).token);
        // const circleName = ((this.ctx.request.body as { name: string }).name)
        // const avatar = ((this.ctx.request.body as { avatar: string }).avatar)
        let decoded;
        try {
            decoded = jwt.verify(token, 'your_jwt_secret');
        }
        catch (err) {
            console.error(err);
            this.ctx.status = 401;
            return { message: '用户不存在,请先注册或登录' };
        }
        const userRepository = db_1.AppDataSource.getRepository(user_1.User);
        const user = await userRepository.findOne({ where: { id: decoded.id }, relations: ['circles'] });
        const interestCircleRepository = db_1.AppDataSource.getRepository(interest_circle_1.InterestCircle);
        const userCircleExperienceRepository = db_1.AppDataSource.getRepository(user_circle_experience_1.UserCircleExperience);
        if (!await interestCircleRepository.findOne({ where: { name: name } })) {
            const interestCircle = new interest_circle_1.InterestCircle();
            interestCircle.name = name;
            interestCircle.avatar = avatar;
            interestCircle.users = [user];
            interestCircle.intro = intro;
            await interestCircleRepository.save(interestCircle);
            user.circles.push(interestCircle);
            await userRepository.save(user);
            const userCircleExperience = new user_circle_experience_1.UserCircleExperience();
            userCircleExperience.user = user;
            userCircleExperience.circle = interestCircle;
            userCircleExperience.experience = 0;
            await userCircleExperienceRepository.save(userCircleExperience);
            return { message: '创建成功' };
        }
        else {
            return { message: '创建失败,该圈子已存在' };
        }
    }
    async getMyInterestCircle() {
        console.log('getMyInterestCircle', this.ctx.params.circleId);
        if (!db_1.AppDataSource.isInitialized) {
            await db_1.AppDataSource.initialize();
        }
        const userCircleExperienceRepository = db_1.AppDataSource.getRepository(user_circle_experience_1.UserCircleExperience);
        const experiences = await userCircleExperienceRepository.find({
            where: {
                circle: { id: this.ctx.params.circleId },
            },
            relations: ['user', 'circle'],
        });
        if (experiences.length === 0) {
            return { message: '未找到经验记录' };
        }
        return experiences.map(exp => ({
            userId: exp.user.id,
            username: exp.user.username,
            circleId: exp.circle.id,
            experience: exp.experience,
        }));
    }
};
__decorate([
    (0, core_1.Inject)(),
    __metadata("design:type", Object)
], HomeController.prototype, "ctx", void 0);
__decorate([
    (0, core_1.Get)('/interest-circles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getInterestCircles", null);
__decorate([
    (0, core_1.Post)('/my-interest-circles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getMyInterestCircles", null);
__decorate([
    (0, core_1.Post)('/join-circle'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "joinCircle", null);
__decorate([
    (0, core_1.Post)('/create-circle'),
    __param(0, (0, core_1.Fields)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "createCircle", null);
__decorate([
    (0, core_1.Get)('/my-interest-circles-detail/:circleId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getMyInterestCircle", null);
HomeController = __decorate([
    (0, core_1.Controller)('/api')
], HomeController);
exports.HomeController = HomeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvaG9tZS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF1RTtBQUV2RSw4QkFBc0M7QUFDdEMsK0RBQTJEO0FBQzNELHlDQUFzQztBQUN0Qyw2RUFBd0U7QUFDeEUsb0NBQW9DO0FBSTdCLElBQU0sY0FBYyxHQUFwQixNQUFNLGNBQWM7SUFLbkIsQUFBTixLQUFLLENBQUMsa0JBQWtCO1FBQ3RCLElBQUksQ0FBQyxrQkFBYSxDQUFDLGFBQWEsRUFBRTtZQUNoQyxNQUFNLGtCQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbEM7UUFFRCxNQUFNLHdCQUF3QixHQUFHLGtCQUFhLENBQUMsYUFBYSxDQUFDLGdDQUFjLENBQUMsQ0FBQztRQUM3RSxNQUFNLGVBQWUsR0FBRyxNQUFNLHdCQUF3QixDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHO1lBQ2QsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsZUFBZTtTQUN0QixDQUFBO0lBRUgsQ0FBQztJQUdLLEFBQU4sS0FBSyxDQUFDLG9CQUFvQjtRQUN4QixJQUFJLENBQUMsa0JBQWEsQ0FBQyxhQUFhLEVBQUU7WUFDaEMsTUFBTSxrQkFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsTUFBTSxLQUFLLEdBQUcsQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUEwQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25FLElBQUksT0FBbUIsQ0FBQztRQUN4QixJQUFJO1lBQ0YsT0FBTyxHQUFHLEdBQUcsQ0FB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