import { InterestCircle } from "./interest-circle";
import { UserCircleExperience } from './user-circle-experience';
export declare class User {
    id: number;
    username: string;
    password: string;
    avatar: string;
    circles: InterestCircle[];
    circleExperiences: UserCircleExperience[];
}
