import ArticleType, { CommentType } from "./ArticleType";
import { ArticleLinks, ComponentHookType } from "./ReusableTypes";

export type SearchType = 'b' | 'c' | 't'

export interface SearchArticlesJSON {
   allArticles: ArticleType[],
   related: ArticleLinks[],
   finished: boolean,
   count: number
}

export interface SearchContainerType {
   articles?: ArticleType[],
   countArticles: number,
   setState: React.Dispatch<React.SetStateAction<ComponentHookType<SearchArticlesJSON>>>
}

export interface ArticlePageRelated {
   title: string,
   published: string,
   image: string,
   category: string,
   tags: string[],
   id: string
}