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
exports.PublishController = void 0;
const core_1 = require("@midwayjs/core");
const db_1 = require("../db");
const user_1 = require("../entity/user");
const article_1 = require("../entity/article");
const interest_circle_1 = require("../entity/interest-circle");
const jwt = require("jsonwebtoken");
let PublishController = class PublishController {
    async publish(fields) {
        if (!db_1.AppDataSource.isInitialized) {
            await db_1.AppDataSource.initialize();
        }
        const { title, content, tags, token } = fields;
        let parsedTags;
        try {
            parsedTags = JSON.parse(tags);
        }
        catch (error) {
            console.error('Error parsing tags:', error);
            throw new Error('Invalid tags format');
        }
        console.log(parsedTags);
        const images = Object.keys(fields)
            .filter(key => key.startsWith('images['))
            .map(key => {
            const index = key.match(/\d+/)[0]; // 提取索引
            return {
                index: parseInt(index, 10),
                url: fields[key]
            };
        })
            .sort((a, b) => a.index - b.index) // 按索引排序
            .map(image => image.url); // 只保留 URL
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
        const user = await userRepository.findOne({ where: { id: decoded.id } });
        if (!user) {
            this.ctx.status = 404;
            return { message: '用户不存在,请先注册或登录' };
        }
        const interestCircleRepository = db_1.AppDataSource.getRepository(interest_circle_1.InterestCircle);
        const circle = await interestCircleRepository.findOne({ where: { name: parsedTags } });
        console.log(circle);
        const articleRepository = db_1.AppDataSource.getRepository(article_1.Article);
        const article = articleRepository.create({
            title,
            content,
            tags: parsedTags,
            images,
            author_id: user.id,
            likes: 0,
            views: 0,
            comments_count: 0,
            created_at: new Date(),
            updated_at: new Date(),
            circle: circle
        });
        await articleRepository.save(article);
        console.log(article);
        return { message: "发布成功", data: article };
    }
};
__decorate([
    (0, core_1.Inject)(),
    __metadata("design:type", Object)
], PublishController.prototype, "ctx", void 0);
__decorate([
    (0, core_1.Post)("/publish"),
    __param(0, (0, core_1.Fields)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PublishController.prototype, "publish", null);
PublishController = __decorate([
    (0, core_1.Provide)(),
    (0, core_1.Controller)("/api")
], PublishController);
exports.PublishController = PublishController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvcHVibGlzaC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUEyRTtBQUUzRSw4QkFBc0M7QUFDdEMseUNBQXNDO0FBQ3RDLCtDQUE0QztBQUM1QywrREFBMkQ7QUFDM0Qsb0NBQW9DO0FBTTdCLElBQU0saUJBQWlCLEdBQXZCLE1BQU0saUJBQWlCO0lBS3BCLEFBQU4sS0FBSyxDQUFDLE9BQU8sQ0FBVyxNQUFXO1FBQy9CLElBQUksQ0FBQyxrQkFBYSxDQUFDLGFBQWEsRUFBRTtZQUM5QixNQUFNLGtCQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDcEM7UUFDRCxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBQy9DLElBQUksVUFBVSxDQUFDO1FBQ25CLElBQUk7WUFDQSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM1QyxNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDMUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDeEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1AsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87WUFDMUMsT0FBTztnQkFDSCxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7Z0JBQzFCLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ25CLENBQUM7UUFDTixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRO2FBQzFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFFeEMsSUFBSSxPQUFtQixDQUFDO1FBQ3hCLElBQUk7WUFDQSxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLENBQWUsQ0FBQztTQUNoRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDdEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQztTQUN2QztRQUNELE1BQU0sY0FBYyxHQUFHLGtCQUFhLENBQUMsYUFBYSxDQUFDLFdBQUksQ0FBQyxDQUFDO1FBQ3pELE1BQU0sSUFBSSxHQUFHLE1BQU0sY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXpFLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDdEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQztTQUN2QztRQUNELE1BQU0sd0JBQXdCLEdBQUcsa0JBQWEsQ0FBQyxhQUFhLENBQUMsZ0NBQWMsQ0FBQyxDQUFDO1FBQzdFLE1BQU0sTUFBTSxHQUFHLE1BQU0sd0JBQXdCLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLENBQUMsQ0FBQztRQUN0RixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE1BQU0saUJBQWlCLEdBQUcsa0JBQWEsQ0FBQyxhQUFhLENBQUMsaUJBQU8sQ0FBQyxDQUFDO1FBQy9ELE1BQU0sT0FBTyxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztZQUNyQyxLQUFLO1lBQ0wsT0FBTztZQUNQLElBQUksRUFBRSxVQUFVO1lBQ2hCLE1BQU07WUFDTixTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDbEIsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsQ0FBQztZQUNSLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLFVBQVUsRUFBRSxJQUFJLElBQUksRUFBRTtZQUN0QixVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDdEIsTUFBTSxFQUFFLE1BQU07U0FDakIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUMsQ0FBQztDQUVKLENBQUE7QUFuRUc7SUFBQyxJQUFBLGFBQU0sR0FBRTs7OENBQ0k7QUFHUDtJQURMLElBQUEsV0FBSSxFQUFDLFVBQVUsQ0FBQztJQUNGLFdBQUEsSUFBQSxhQUFNLEdBQUUsQ0FBQTs7OztnREE2RHRCO0FBbEVRLGlCQUFpQjtJQUY3QixJQUFBLGNBQU8sR0FBRTtJQUNULElBQUEsaUJBQVUsRUFBQyxNQUFNLENBQUM7R0FDTixpQkFBaUIsQ0FvRTdCO0FBcEVZLDhDQUFpQiJ9