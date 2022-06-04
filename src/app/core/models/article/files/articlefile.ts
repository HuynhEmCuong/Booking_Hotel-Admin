import { FileData } from "../../system/fileData";
import { Article } from "../article";

export interface ArticleFile {
    id: number;
    articleId: number;
    fileDataId: number;
    article: Article;
    File: FileData;
}