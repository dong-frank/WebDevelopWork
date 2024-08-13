import { Article } from './article';
import { User } from './user';
export declare class Comment {
    id: number;
    content: string;
    created_at: Date;
    author: User;
    article: Article;
}
