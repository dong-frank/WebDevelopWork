import { User } from './user';
import { Comment } from './comment';
import { InterestCircle } from './interest-circle';
export declare class Article {
    id: number;
    title: string;
    content: string;
    author_id: number;
    tags: string;
    likes: number;
    views: number;
    comments_count: number;
    images: string[];
    created_at: Date;
    updated_at: Date;
    author: User;
    circle: InterestCircle;
    comments: Comment[];
}
