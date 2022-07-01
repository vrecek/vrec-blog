interface ImageType {
   url: string,
   fileName: string
}

export interface CommentType {
   author: {
      id: string,
      username: string,
      avatarUrl: string
   },

   postedWhen: string,

   text: string,

   _id: string
}

export default interface ArticleType {
   _id: string,
   title: string,
   shortTitle: string,
   tags: string[],
   category: string,
   text: string,
   published: {
      str: string,
      num: number
   },
   views: number,
   textImages: ImageType[],
   mainImage: ImageType,
   likes: {
      num: number,
      who: string[]
   },
   dislikes: {
      num: number,
      who: string[]
   },
   comments: CommentType[]
}