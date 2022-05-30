import { ArticleCategoryActionComponent } from "src/app/views/pages/articles/article-category/article-category-action/article-category-action.component";
import { Status } from "../../enums/status.enum";
import { ArticleCategory } from "./article-cate";

export class Article {
    id: number;
    name: string;
    title: string;
    description: string;
    content: string;
    imagesUrl: string;
    status: Status;
    articleCateId: number;
    metaTile: string;
    metaKeyWord: string;
    metaDescription: string;
    createBy: number | null;
    modifyBy: number | null;
    createDate: string | null;
    modifyDate: string | null;
    articleCategory: ArticleCategory;
}