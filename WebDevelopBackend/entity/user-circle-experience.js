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
exports.UserCircleExperience = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./user");
const interest_circle_1 = require("./interest-circle");
let UserCircleExperience = class UserCircleExperience {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserCircleExperience.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.User, user => user.circleExperiences),
    __metadata("design:type", user_1.User)
], UserCircleExperience.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => interest_circle_1.InterestCircle, circle => circle.userExperiences),
    __metadata("design:type", interest_circle_1.InterestCircle)
], UserCircleExperience.prototype, "circle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserCircleExperience.prototype, "experience", void 0);
UserCircleExperience = __decorate([
    (0, typeorm_1.Entity)()
], UserCircleExperience);
exports.UserCircleExperience = UserCircleExperience;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jaXJjbGUtZXhwZXJpZW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvdXNlci1jaXJjbGUtZXhwZXJpZW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBNEU7QUFDNUUsaUNBQThCO0FBQzlCLHVEQUFtRDtBQUc1QyxJQUFNLG9CQUFvQixHQUExQixNQUFNLG9CQUFvQjtDQVloQyxDQUFBO0FBWEM7SUFBQyxJQUFBLGdDQUFzQixHQUFFOztnREFDZDtBQUVYO0lBQUMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLFdBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs4QkFDaEQsV0FBSTtrREFBQztBQUVYO0lBQUMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLGdDQUFjLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDOzhCQUMxRCxnQ0FBYztvREFBQztBQUV2QjtJQUFDLElBQUEsZ0JBQU0sR0FBRTs7d0RBQ1U7QUFYUixvQkFBb0I7SUFEaEMsSUFBQSxnQkFBTSxHQUFFO0dBQ0ksb0JBQW9CLENBWWhDO0FBWlksb0RBQW9CIn0=