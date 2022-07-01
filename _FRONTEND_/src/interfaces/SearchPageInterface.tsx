import ArticleType, { CommentType } from "./ArticleType";
import { ArticleLinks } from "./ReusableTypes";

export interface SearchArticlesJSON {
   allArticles: ArticleType[],
   related: ArticleLinks[],
   finished: boolean
}

export interface SearchContainerType {
   articles?: ArticleType[],
}

export interface ArticlePageRelated {
   title: string,
   published: string,
   image: string,
   category: string,
   tags: string[],
   id: string
}