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
exports.ExperienceController = void 0;
const core_1 = require("@midwayjs/core");
const db_1 = require("../db");
const user_circle_experience_1 = require("../entity/user-circle-experience");
const jwt = require("jsonwebtoken");
let ExperienceController = class ExperienceController {
    async experience() {
        const token = (this.ctx.request.body.token);
        const circleId = (this.ctx.request.body.circleId);
        const experience = (this.ctx.request.body.experience);
        let decoded;
        try {
            decoded = jwt.verify(token, 'your_jwt_secret');
        }
        catch (err) {
            console.error(err);
            this.ctx.status = 401;
            return { message: '用户不存在,请先注册或登录' };
        }
        const userCircleExperienceRepository = db_1.AppDataSource.getRepository(user_circle_experience_1.UserCircleExperience);
        const userCircleExperience = await userCircleExperienceRepository.findOne({
            where: {
                user: { id: decoded.id },
                circle: { id: circleId }
            },
            relations: ['user', 'circle'] // 确保加载相关联的实体
        });
        userCircleExperience.experience += experience;
        await userCircleExperienceRepository.save(userCircleExperience);
    }
};
__decorate([
    (0, core_1.Inject)(),
    __metadata("design:type", Object)
], ExperienceController.prototype, "ctx", void 0);
__decorate([
    (0, core_1.Post)('/experience'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExperienceController.prototype, "experience", null);
ExperienceController = __decorate([
    (0, core_1.Provide)(),
    (0, core_1.Controller)('/api')
], ExperienceController);
exports.ExperienceController = ExperienceController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZXJpZW5jZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvZXhwZXJpZW5jZS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFtRTtBQUVuRSw4QkFBc0M7QUFDdEMsNkVBQXdFO0FBQ3hFLG9DQUFvQztBQUs3QixJQUFNLG9CQUFvQixHQUExQixNQUFNLG9CQUFvQjtJQUt2QixBQUFOLEtBQUssQ0FBQyxVQUFVO1FBQ1osTUFBTSxLQUFLLEdBQUcsQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUEwQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25FLE1BQU0sUUFBUSxHQUFHLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBNkIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RSxNQUFNLFVBQVUsR0FBRyxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQStCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEYsSUFBSSxPQUFtQixDQUFDO1FBQ3hCLElBQUk7WUFDQSxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLENBQWUsQ0FBQztTQUNoRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDdEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQztTQUN2QztRQUVELE1BQU0sOEJBQThCLEdBQUcsa0JBQWEsQ0FBQyxhQUFhLENBQUMsNkNBQW9CLENBQUMsQ0FBQztRQUN6RixNQUFNLG9CQUFvQixHQUFHLE1BQU0sOEJBQThCLENBQUMsT0FBTyxDQUFDO1lBQ3RFLEtBQUssRUFBRTtnQkFDSCxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRTtnQkFDeEIsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRTthQUMzQjtZQUNELFNBQVMsRUFBRSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxhQUFhO1NBQzlDLENBQUMsQ0FBQztRQUNILG9CQUFvQixDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUM7UUFDOUMsTUFBTSw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNwRSxDQUFDO0NBQ0osQ0FBQTtBQTVCRztJQUFDLElBQUEsYUFBTSxHQUFFOztpREFDRztBQUdOO0lBREwsSUFBQSxXQUFJLEVBQUMsYUFBYSxDQUFDOzs7O3NEQXdCbkI7QUE1QlEsb0JBQW9CO0lBRmhDLElBQUEsY0FBTyxHQUFFO0lBQ1QsSUFBQSxpQkFBVSxFQUFDLE1BQU0sQ0FBQztHQUNOLG9CQUFvQixDQTZCaEM7QUE3Qlksb0RBQW9CIn0=