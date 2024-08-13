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
exports.ArticleDataController = void 0;
const core_1 = require("@midwayjs/core");
const db_1 = require("../db");
// import { User } from "../entity/user";
const article_1 = require("../entity/article");
let ArticleDataController = class ArticleDataController {
    async likeArticle() {
        if (!db_1.AppDataSource.isInitialized) {
            await db_1.AppDataSource.initialize();
        }
        const articleRepository = db_1.AppDataSource.getRepository(article_1.Article);
        const article = await articleRepository.findOne({ where: { id: this.ctx.params.id } });
        if (!article) {
            this.ctx.status = 404;
            return { message: '文章不存在' };
        }
        article.likes += 1;
        await articleRepository.save(article);
        this.ctx.body = {
            success: true,
            data: article
        };
    }
    async viewArticle() {
        if (!db_1.AppDataSource.isInitialized) {
            await db_1.AppDataSource.initialize();
        }
        const articleRepository = db_1.AppDataSource.getRepository(article_1.Article);
        const article = await articleRepository.findOne({ where: { id: this.ctx.params.id } });
        if (!article) {
            this.ctx.status = 404;
            return { message: '文章不存在' };
        }
        article.views += 1;
        await articleRepository.save(article);
        this.ctx.body = {
            success: true,
            data: article
        };
    }
};
__decorate([
    (0, core_1.Inject)(),
    __metadata("design:type", Object)
], ArticleDataController.prototype, "ctx", void 0);
__decorate([
    (0, core_1.Post)("/like/:id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleDataController.prototype, "likeArticle", null);
__decorate([
    (0, core_1.Post)("/view/:id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleDataController.prototype, "viewArticle", null);
ArticleDataController = __decorate([
    (0, core_1.Provide)(),
    (0, core_1.Controller)("/api")
], ArticleDataController);
exports.ArticleDataController = ArticleDataController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZV9kYXRhLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci9hcnRpY2xlX2RhdGEuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBcUU7QUFFckUsOEJBQXNDO0FBQ3RDLHlDQUF5QztBQUN6QywrQ0FBNEM7QUFJckMsSUFBTSxxQkFBcUIsR0FBM0IsTUFBTSxxQkFBcUI7SUFLeEIsQUFBTixLQUFLLENBQUMsV0FBVztRQUNiLElBQUksQ0FBQyxrQkFBYSxDQUFDLGFBQWEsRUFBRTtZQUM5QixNQUFNLGtCQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDcEM7UUFFRCxNQUFNLGlCQUFpQixHQUFHLGtCQUFhLENBQUMsYUFBYSxDQUFDLGlCQUFPLENBQUMsQ0FBQztRQUMvRCxNQUFNLE9BQU8sR0FBRyxNQUFNLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFFdEYsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUN0QixPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO1NBQy9CO1FBRUQsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDbkIsTUFBTSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUc7WUFDWixPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxPQUFPO1NBQ2hCLENBQUE7SUFDTCxDQUFDO0lBR0ssQUFBTixLQUFLLENBQUMsV0FBVztRQUNiLElBQUksQ0FBQyxrQkFBYSxDQUFDLGFBQWEsRUFBRTtZQUM5QixNQUFNLGtCQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDcEM7UUFFRCxNQUFNLGlCQUFpQixHQUFHLGtCQUFhLENBQUMsYUFBYSxDQUFDLGlCQUFPLENBQUMsQ0FBQztRQUMvRCxNQUFNLE9BQU8sR0FBRyxNQUFNLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFFdEYsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUN0QixPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO1NBQy9CO1FBRUQsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDbkIsTUFBTSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUc7WUFDWixPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxPQUFPO1NBQ2hCLENBQUE7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQS9DRztJQUFDLElBQUEsYUFBTSxHQUFFOztrREFDSTtBQUdQO0lBREwsSUFBQSxXQUFJLEVBQUMsV0FBVyxDQUFDOzs7O3dEQXFCakI7QUFHSztJQURMLElBQUEsV0FBSSxFQUFDLFdBQVcsQ0FBQzs7Ozt3REFvQmpCO0FBL0NRLHFCQUFxQjtJQUZqQyxJQUFBLGNBQU8sR0FBRTtJQUNULElBQUEsaUJBQVUsRUFBQyxNQUFNLENBQUM7R0FDTixxQkFBcUIsQ0FnRGpDO0FBaERZLHNEQUFxQiJ9