import ArticleType from "./ArticleType";
import { ArticleLinks } from "./ReusableTypes";

export interface SearchArticlesJSON {
   allArticles: ArticleType[],
   related: ArticleLinks[],
   finished: boolean
}

export interface SearchContainerType {
   articles?: ArticleType[],
}