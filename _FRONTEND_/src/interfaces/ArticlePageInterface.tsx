export interface ArticlePageIconType {
   icon: JSX.Element,
   num: number
}

export interface ArticleLocationType {
   articleTitle: string,
   articleCategory: string
}

export interface PostCommentFormType {
   submitAction: React.FormEventHandler,
   username: string
}