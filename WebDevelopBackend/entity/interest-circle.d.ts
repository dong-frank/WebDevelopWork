import { User } from "./user";
import { UserCircleExperience } from './user-circle-experience';
import { Article } from "./article";
export declare class InterestCircle {
    id: number;
    name: string;
    intro: string;
    avatar: string;
    users: User[];
    userExperiences: UserCircleExperience[];
    articles: Article[];
}
