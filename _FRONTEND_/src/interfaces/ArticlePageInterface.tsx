type Rate = 'like' | 'dislike'

export interface ArticlePageIconType {
   icon: JSX.Element,
   num: number,
   action: (e: React.MouseEvent, type?: Rate) => void
}

export interface ArticleLocationType {
   articleTitle: string,
   articleCategory: string
}

export interface PostCommentFormType {
   submitAction: React.FormEventHandler,
   username: string
}