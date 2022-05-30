import { Status } from "../../enums/status.enum";
import { Article } from "./article";

export class ArticleCategory {
    id: number ;
    name: string;
    position: number;
    status: Status =Status.active;
    metaTile: string;
    metaKeyWord: string;
    metaDescription: string;
    createBy: number | null;
    modifyBy: number | null;
    createDate: string | null;
    modifyDate: string | null;
    articles: Article[];
}