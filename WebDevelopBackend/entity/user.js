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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const interest_circle_1 = require("./interest-circle");
const user_circle_experience_1 = require("./user-circle-experience");
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'http//127.0.0.1:3000/default_avatar.jpg' }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => interest_circle_1.InterestCircle, circle => circle.users),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], User.prototype, "circles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_circle_experience_1.UserCircleExperience, experience => experience.user),
    __metadata("design:type", Array)
], User.prototype, "circleExperiences", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbnRpdHkvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBbUc7QUFDbkcsdURBQW1EO0FBQ25ELHFFQUFnRTtBQUV6RCxJQUFNLElBQUksR0FBVixNQUFNLElBQUk7Q0FtQmhCLENBQUE7QUFsQkM7SUFBQyxJQUFBLGdDQUFzQixHQUFFOztnQ0FDZDtBQUVYO0lBQUMsSUFBQSxnQkFBTSxHQUFFOztzQ0FDUTtBQUVqQjtJQUFDLElBQUEsZ0JBQU0sR0FBRTs7c0NBQ1E7QUFFakI7SUFBQyxJQUFBLGdCQUFNLEVBQUMsRUFBQyxPQUFPLEVBQUMseUNBQXlDLEVBQUMsQ0FBQzs7b0NBQzdDO0FBRWY7SUFBQyxJQUFBLG9CQUFVLEVBQUMsR0FBRyxFQUFFLENBQUMsZ0NBQWMsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDeEQsSUFBQSxtQkFBUyxHQUFFOztxQ0FDYztBQUUxQjtJQUFDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyw2Q0FBb0IsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7OytDQUMzQjtBQWxCL0IsSUFBSTtJQURoQixJQUFBLGdCQUFNLEdBQUU7R0FDSSxJQUFJLENBbUJoQjtBQW5CWSxvQkFBSSJ9