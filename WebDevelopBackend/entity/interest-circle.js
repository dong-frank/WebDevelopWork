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
exports.InterestCircle = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./user");
const user_circle_experience_1 = require("./user-circle-experience");
const article_1 = require("./article");
let InterestCircle = class InterestCircle {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], InterestCircle.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InterestCircle.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InterestCircle.prototype, "intro", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'http://127.0.0.1:3000/default_avatar.png' }),
    __metadata("design:type", String)
], InterestCircle.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_1.User, user => user.circles),
    __metadata("design:type", Array)
], InterestCircle.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_circle_experience_1.UserCircleExperience, experience => experience.circle),
    __metadata("design:type", Array)
], InterestCircle.prototype, "userExperiences", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => article_1.Article, article => article.circle),
    __metadata("design:type", Array)
], InterestCircle.prototype, "articles", void 0);
InterestCircle = __decorate([
    (0, typeorm_1.Entity)()
], InterestCircle);
exports.InterestCircle = InterestCircle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJlc3QtY2lyY2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VudGl0eS9pbnRlcmVzdC1jaXJjbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQXdGO0FBQ3hGLGlDQUE4QjtBQUM5QixxRUFBZ0U7QUFDaEUsdUNBQW9DO0FBRzdCLElBQU0sY0FBYyxHQUFwQixNQUFNLGNBQWM7Q0F1QjFCLENBQUE7QUF0Qkc7SUFBQyxJQUFBLGdDQUFzQixHQUFFOzswQ0FDZDtBQUVYO0lBQUMsSUFBQSxnQkFBTSxHQUFFOzs0Q0FDSTtBQUViO0lBQUMsSUFBQSxnQkFBTSxHQUFFOzs2Q0FDSztBQUVkO0lBQUMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLENBQUM7OzhDQUNqRDtBQUVmO0lBQUMsSUFBQSxvQkFBVSxFQUFDLEdBQUcsRUFBRSxDQUFDLFdBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7OzZDQUMvQjtBQUVkO0lBQUMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLDZDQUFvQixFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQzs7dURBQy9CO0FBRXhDO0lBQUMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOztnREFDaEM7QUFwQlgsY0FBYztJQUQxQixJQUFBLGdCQUFNLEdBQUU7R0FDSSxjQUFjLENBdUIxQjtBQXZCWSx3Q0FBYyJ9