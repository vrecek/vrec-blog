import ArticleType from "./ArticleType"
import { ArticleLinks } from "./ReusableTypes"

export interface Categories {
   backend: string,
   frontend: string,
   programming: string,
   news: string
}

export interface WhenUpdated {
   category: string,
   when: string,
   shortTitle: string,
   _id: string
}

export interface CardsTextType {
   category: string, 
   when: string,
   id: string
}

export interface PopularArticles {
   views: number,
   shortTitle: string,
   _id: string
}

interface CategoryInfo {
   total: number,
   when: string
}

export interface CategoryObject {
   [key: string]: CategoryInfo
}

export interface HomepageArticlesJSON {
   lastUpdated: WhenUpdated,

   latest: WhenUpdated[],

   popular: PopularArticles[],

   categoriesInfo: {
      [P in keyof Categories]: CategoryInfo
   },

   allArticles: ArticleType[]
}

export interface ArticleContainerType {
   id: string,
   category: string,
   text: string,
   title: string,
   tags: string[],
   published: string
}

export interface HomepageAside {
   latest: ArticleLinks[],
   popular: PopularArticles[]
}

export interface ArticlesAsideType {
   title: string,
   links: ArticleLinks[]
}

export interface HomepageArticleContainer {
   articles: ArticleType[], 
   latest: ArticleLinks[],
   popular: PopularArticles[]
}