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
exports.ExploreController = void 0;
const core_1 = require("@midwayjs/core");
const db_1 = require("../db");
const user_1 = require("../entity/user");
const article_1 = require("../entity/article");
// import * as jwt from "jsonwebtoken";
// import { JwtPayload } from "jsonwebtoken";
let ExploreController = class ExploreController {
    async getArticles() {
        if (!db_1.AppDataSource.isInitialized) {
            await db_1.AppDataSource.initialize();
        }
        const articleRepository = db_1.AppDataSource.getRepository(article_1.Article);
        const articles = await articleRepository.find();
        this.ctx.body = {
            success: true,
            data: articles
        };
    }
    async getArticle() {
        if (!db_1.AppDataSource.isInitialized) {
            await db_1.AppDataSource.initialize();
        }
        // console.log(this.ctx.params.id);
        const articleRepository = db_1.AppDataSource.getRepository(article_1.Article);
        const article = await articleRepository.findOne({ where: { id: this.ctx.params.id }, relations: ['comments', 'comments.author', 'circle'] });
        console.log(article.comments);
        const userRepository = db_1.AppDataSource.getRepository(user_1.User);
        const user = await userRepository.findOne({ where: { id: article.author_id } });
        this.ctx.body = {
            success: true,
            data: {
                article,
                user,
            }
        };
    }
};
__decorate([
    (0, core_1.Inject)(),
    __metadata("design:type", Object)
], ExploreController.prototype, "ctx", void 0);
__decorate([
    (0, core_1.Get)("/explore"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExploreController.prototype, "getArticles", null);
__decorate([
    (0, core_1.Get)("/explore/:id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExploreController.prototype, "getArticle", null);
ExploreController = __decorate([
    (0, core_1.Provide)(),
    (0, core_1.Controller)("/api")
], ExploreController);
exports.ExploreController = ExploreController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvZXhwbG9yZS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFrRTtBQUVsRSw4QkFBc0M7QUFDdEMseUNBQXNDO0FBQ3RDLCtDQUE0QztBQUM1Qyx1Q0FBdUM7QUFDdkMsNkNBQTZDO0FBSXRDLElBQU0saUJBQWlCLEdBQXZCLE1BQU0saUJBQWlCO0lBS3BCLEFBQU4sS0FBSyxDQUFDLFdBQVc7UUFDYixJQUFJLENBQUMsa0JBQWEsQ0FBQyxhQUFhLEVBQUU7WUFDOUIsTUFBTSxrQkFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3BDO1FBRUQsTUFBTSxpQkFBaUIsR0FBRyxrQkFBYSxDQUFDLGFBQWEsQ0FBQyxpQkFBTyxDQUFDLENBQUM7UUFDL0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUdoRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRztZQUNaLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLFFBQVE7U0FDakIsQ0FBQTtJQUNMLENBQUM7SUFHSyxBQUFOLEtBQUssQ0FBQyxVQUFVO1FBQ1osSUFBSSxDQUFDLGtCQUFhLENBQUMsYUFBYSxFQUFFO1lBQzlCLE1BQU0sa0JBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNwQztRQUVELG1DQUFtQztRQUVuQyxNQUFNLGlCQUFpQixHQUFHLGtCQUFhLENBQUMsYUFBYSxDQUFDLGlCQUFPLENBQUMsQ0FBQztRQUMvRCxNQUFNLE9BQU8sR0FBRyxNQUFNLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQUcsaUJBQWlCLEVBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9JLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sY0FBYyxHQUFHLGtCQUFhLENBQUMsYUFBYSxDQUFDLFdBQUksQ0FBQyxDQUFDO1FBQ3pELE1BQU0sSUFBSSxHQUFHLE1BQU0sY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBSWhGLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHO1lBQ1osT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUU7Z0JBQ0YsT0FBTztnQkFDUCxJQUFJO2FBQ1A7U0FDSixDQUFBO0lBQ0wsQ0FBQztDQUNKLENBQUE7QUEzQ0c7SUFBQyxJQUFBLGFBQU0sR0FBRTs7OENBQ0k7QUFHUDtJQURMLElBQUEsVUFBRyxFQUFDLFVBQVUsQ0FBQzs7OztvREFjZjtBQUdLO0lBREwsSUFBQSxVQUFHLEVBQUMsY0FBYyxDQUFDOzs7O21EQXVCbkI7QUEzQ1EsaUJBQWlCO0lBRjdCLElBQUEsY0FBTyxHQUFFO0lBQ1QsSUFBQSxpQkFBVSxFQUFDLE1BQU0sQ0FBQztHQUNOLGlCQUFpQixDQTRDN0I7QUE1Q1ksOENBQWlCIn0=