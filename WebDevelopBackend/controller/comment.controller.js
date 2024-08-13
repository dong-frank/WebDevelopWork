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
exports.CommentController = void 0;
const core_1 = require("@midwayjs/core");
const db_1 = require("../db");
const user_1 = require("../entity/user");
const article_1 = require("../entity/article");
const comment_1 = require("../entity/comment");
const jwt = require("jsonwebtoken");
let CommentController = class CommentController {
    async comment(fields) {
        if (!db_1.AppDataSource.isInitialized) {
            await db_1.AppDataSource.initialize();
        }
        const { content, article_id, token } = fields;
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
        const articleRepository = db_1.AppDataSource.getRepository(article_1.Article);
        const article = await articleRepository.findOne({ where: { id: article_id }, relations: ['circle'] });
        const commentRepository = db_1.AppDataSource.getRepository(comment_1.Comment);
        const comment = commentRepository.create({
            content,
            article,
            author: user,
            created_at: new Date()
        });
        await commentRepository.save(comment);
        return {
            success: true,
            data: article,
            message: '评论成功'
        };
    }
};
__decorate([
    (0, core_1.Inject)(),
    __metadata("design:type", Object)
], CommentController.prototype, "ctx", void 0);
__decorate([
    (0, core_1.Post)("/comment"),
    __param(0, (0, core_1.Fields)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "comment", null);
CommentController = __decorate([
    (0, core_1.Provide)(),
    (0, core_1.Controller)("/api")
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvY29tbWVudC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUEyRTtBQUUzRSw4QkFBc0M7QUFDdEMseUNBQXNDO0FBQ3RDLCtDQUE0QztBQUM1QywrQ0FBNEM7QUFDNUMsb0NBQW9DO0FBTzdCLElBQU0saUJBQWlCLEdBQXZCLE1BQU0saUJBQWlCO0lBS3BCLEFBQU4sS0FBSyxDQUFDLE9BQU8sQ0FBVyxNQUFXO1FBQy9CLElBQUksQ0FBQyxrQkFBYSxDQUFDLGFBQWEsRUFBRTtZQUM5QixNQUFNLGtCQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDcEM7UUFDRCxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDOUMsSUFBSSxPQUFtQixDQUFDO1FBQ3hCLElBQUk7WUFDQSxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLENBQWUsQ0FBQztTQUNoRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDdEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQztTQUN2QztRQUNELE1BQU0sY0FBYyxHQUFHLGtCQUFhLENBQUMsYUFBYSxDQUFDLFdBQUksQ0FBQyxDQUFDO1FBQ3pELE1BQU0sSUFBSSxHQUFHLE1BQU0sY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXpFLE1BQU0saUJBQWlCLEdBQUcsa0JBQWEsQ0FBQyxhQUFhLENBQUMsaUJBQU8sQ0FBQyxDQUFDO1FBQy9ELE1BQU0sT0FBTyxHQUFHLE1BQU0saUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFHLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV2RyxNQUFNLGlCQUFpQixHQUFHLGtCQUFhLENBQUMsYUFBYSxDQUFDLGlCQUFPLENBQUMsQ0FBQztRQUMvRCxNQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7WUFDckMsT0FBTztZQUNQLE9BQU87WUFDUCxNQUFNLEVBQUUsSUFBSTtZQUNaLFVBQVUsRUFBRSxJQUFJLElBQUksRUFBRTtTQUN6QixDQUFDLENBQUM7UUFDSCxNQUFNLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxPQUFPO1lBQ0gsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsT0FBTztZQUNiLE9BQU8sRUFBRSxNQUFNO1NBQ2xCLENBQUE7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQXJDRztJQUFDLElBQUEsYUFBTSxHQUFFOzs4Q0FDSTtBQUdQO0lBREwsSUFBQSxXQUFJLEVBQUMsVUFBVSxDQUFDO0lBQ0YsV0FBQSxJQUFBLGFBQU0sR0FBRSxDQUFBOzs7O2dEQWdDdEI7QUFyQ1EsaUJBQWlCO0lBSDdCLElBQUEsY0FBTyxHQUFFO0lBQ1QsSUFBQSxpQkFBVSxFQUFDLE1BQU0sQ0FBQztHQUVOLGlCQUFpQixDQXNDN0I7QUF0Q1ksOENBQWlCIn0=