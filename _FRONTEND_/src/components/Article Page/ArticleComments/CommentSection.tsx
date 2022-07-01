import React from 'react'
import { UserContext } from '../../../App'
import '../../../css/ArticleComments.css'
import Fetches from '../../../functions/Fetches'
import { LoadingCss } from '../../../functions/Loading'
import Comment from './Comment'
import CommentForm from './Form/CommentForm'
import NoCommentsInfo from './NoCommentsInfo'
import NotLoggedInfo from './NotLoggedInfo'
import userBlank from '../../../images/user_blank.png'
import { CommentSectionType } from '../../../interfaces/ArticlePageInterface'

const CommentSection = ({ comments, artId, hook }: CommentSectionType) => {
   const commentsRef = React.useRef<HTMLDivElement>(null)
   const commentsNumRef = React.useRef<HTMLDivElement>(null)
   
   const user = React.useContext(UserContext)
 
   const l = new LoadingCss('loading-abs-50')
   let hasPosted: boolean = false

   const appendText = (target: HTMLElement, msg: string) => {
      const h3 = document.createElement('h3')
      h3.textContent = msg

      target.appendChild(h3)

      setTimeout(() => h3.remove(), 2500)
   }

   const createElements = (elem: string[]): HTMLElement[] => {
      const elements: HTMLElement[] = []

      for(let x of elem) {
         elements.push( document.createElement(x) )
      }

      return elements
   }
   const createSuccessComment = (target: HTMLElement, text: string): void => {
      const H1 = commentsRef.current!.children[0]
      if(H1.tagName === 'H1') H1.remove()

      const items: string[] = ['article', 'section', 'figure', 'img', 'div', 'article', 'div', 'h4', 'h4', 'span', 'span', 'p']

      const [article, section, figure, img, div, article2, div2, h4, h42, span, span2, p] = createElements(items)
      const image = img as HTMLImageElement

      article.className = 'comment'

      section.className = 'user'

      image.src = user?.avatar?.url || userBlank
      image.alt = 'avatar'
      figure.appendChild(img)

      div.className = 'text-info'
      h4.className = 'username'
      h4.textContent = user!.username
      div2.appendChild(h4)
      div.appendChild(div2)

      h42.className = 'postdate-component'
      span.className = 'info-text'
      span.textContent = 'published:'
      span2.className = 'date'
      span2.textContent = new Date(Date.now()).toLocaleDateString()
      h42.appendChild(span)
      h42.appendChild(span2)
      div.appendChild(h42)

      article2.className = 'text'
      p.textContent = text
      article2.appendChild(p)

      section.appendChild(figure)
      section.appendChild(div)

      article.appendChild(section)
      article.appendChild(article2)

      target.prepend(article)
   }  

   const returnCommentLabel = (form: HTMLFormElement): HTMLLabelElement => {
      return form.parentElement?.parentElement?.parentElement?.children[0].children[0].children[2].children[1] as HTMLLabelElement
   }

   const submitComment = async (e: React.FormEvent) => {
      e.preventDefault()

      const t = e.target as HTMLFormElement
      const [text, btn] = Array.from( t.elements as HTMLCollectionOf<HTMLInputElement> )

      if(!user) return

      if(hasPosted) {
         appendText(btn, 'You already posted a comment')
         return
      }

      l.append(btn)

      try {
         const { value } = text

         btn.style.pointerEvents = 'none'

         await Fetches.mix(`${ process.env.REACT_APP_API_ARTICLE_COMMENT }`, 'PUT', {
            user: user._id,
            articleId: artId,
            text: value
         })

         appendText(btn, 'Successfully posted')

         const [total, section] = [commentsNumRef.current!, commentsRef.current!]

         total.textContent = `Comments (${ comments.length + 1 })`
         createSuccessComment(section, value)
         returnCommentLabel(t).textContent = `${ comments.length + 1 }`
         text.value = ''

         hasPosted = true

      }catch(err: any) {
         appendText(btn, err.json?.msg ?? 'Could not post')

      }finally { 
         l.remove() 
         btn.style.pointerEvents = 'all'
      }
   }

   return (
      <section className="comment-section">
         {
            user
            ?
               <CommentForm
                  submitAction={ submitComment } 
                  username={ user.username }
                  userAvatar={ user.avatar.url || userBlank }
               />
            :
               <NotLoggedInfo />
         }

         <h2 ref={ commentsNumRef } className='article-end-header'>Comments ({ comments.length })</h2>

         <section ref={ commentsRef } className="user-comments">
            {
               comments?.length
               ?
                  comments.map((x, i) => (
                     <Comment
                        loggedUserId={ user?._id ?? null }
                        articleId={ artId }
                        hook={ hook }
                        content={{
                           postedWhen: x.postedWhen,
                           text: x.text,
                           author: x.author,
                           _id: x._id,
                        }} 
                        key={ i } 
                     />
                  ))
               :
               <NoCommentsInfo />
            }
         </section>
      </section>
   )
}

export default CommentSection