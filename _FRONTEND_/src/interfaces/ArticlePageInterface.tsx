import ArticleType, { CommentType } from "./ArticleType"
import { ComponentHookType } from "./ReusableTypes"

type Rate = 'like' | 'dislike'

export interface ArticlePageIconType {
   icon: JSX.Element,
   num: number,
   action: (e: React.MouseEvent, type?: Rate) => void,
   addActive?: boolean
}

export interface ArticleLocationType {
   articleTitle: string,
   articleCategory: string,
   views: number
}

export interface ActiveRates {
   like: boolean,
   dislike: boolean
}

export interface ArticlePageFinishType {
   relatedArticles: ArticleType[],
   comments: CommentType[],
   artId: string,
   articleHook: React.Dispatch<React.SetStateAction<ComponentHookType<ArticlePageType>>>
}

export interface ArticlePageType {
   related: ArticleType[],
   content: ArticleType,
   finished: boolean
}

export interface PostCommentFormType {
   submitAction: React.FormEventHandler,
   username: string,
   userAvatar: string
}

export interface CommentSectionType {
   comments: CommentType[],
   artId: string,
   hook: React.Dispatch<React.SetStateAction<ComponentHookType<ArticlePageType>>>
}

export interface ArticlePageRelated {
   title: string,
   published: string,
   image: string,
   category: string,
   tags: string[],
   id: string
}

interface Rating {
   num: number,
   who: string[]
}
export interface ArticlePageRating {
   likes: Rating,
   dislikes: Rating,
   id: string,
   commNum: number
}

export interface ArticlePageComment {
   content: CommentType,
   loggedUserId: string | null,
   articleId: string,
   hook: React.Dispatch<React.SetStateAction<ComponentHookType<ArticlePageType>>>
}

export type RatingType = 'like' | 'dislike'