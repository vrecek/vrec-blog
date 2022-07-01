import React from 'react'
import FigureImage from '../../REUSABLE/FigureImage'
import PostDate from '../../REUSABLE/PostDate'
import UserInformation from './UserInformation'
import blankUser from '../../../images/user_blank.png'
import { FaTimes } from 'react-icons/fa'
import { ArticlePageComment } from '../../../interfaces/ArticlePageInterface'
import Fetches from '../../../functions/Fetches'
import { LoadingCss } from '../../../functions/Loading'
import { CommentType } from '../../../interfaces/ArticleType'
import { scroller } from 'react-scroll'

const Comment = ({ content, loggedUserId, articleId, hook }: ArticlePageComment) => {
   const { author, postedWhen, text, _id } = content

   const deleteComment = async (e: React.MouseEvent) => {
      const t = e.target as HTMLElement

      const l: LoadingCss = new LoadingCss('loading-abs')
      l.append(t.parentElement as HTMLElement)
      
      try {
         const params: string = `${ loggedUserId }/${ articleId }/${ _id }`

         await Fetches.mix(`${ process.env.REACT_APP_API_ARTICLE_DELETE_COMMENT }/${ params }`, 'DELETE')

         hook((curr: any) => {
            curr.content.comments = curr.content.comments.filter((x: CommentType) => x._id !== _id)

            return {...curr}
         })

      }catch(err: any) {
         const h5 = document.createElement('h5')
         h5.className = 'del-error'
         h5.textContent = err.json?.msg ?? 'Could not delete' 

         t.parentElement?.appendChild(h5)

         setTimeout(() => h5.remove(), 2500)

      }finally { 
         l.remove() 
         setTimeout(() => scroller.scrollTo('comment-section', { offset: -(60 * 1.5) }), 5) 
      }
   }

   return (
      <article className="comment">
         {
            loggedUserId === author.id && <span onClick={ deleteComment } className="del-icon"><FaTimes /></span>
         }

         <section className="user">

            <FigureImage 
               source={ author?.avatarUrl || blankUser }
               altTxt='avatar'
            />
            
            <div className='text-info'>
               <UserInformation username={ author.username } />
               <PostDate preText='posted'>{ postedWhen }</PostDate>
            </div>

         </section>

         <article className="text">
            <p>{ text }</p>
         </article>

      </article>
   )
}

export default Comment