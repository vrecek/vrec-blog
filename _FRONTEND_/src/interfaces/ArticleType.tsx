interface ImageType {
   url: string,
   fileName: string
}

interface CommentType {
   author: {
      username: string,
      avatar: string
   },

   posted: string,

   text: string
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