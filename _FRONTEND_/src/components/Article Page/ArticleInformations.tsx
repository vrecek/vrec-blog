import React from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { GoComment } from 'react-icons/go'
import ArticleInformationsIcon from './ArticleInformationsIcon'
import { scroller } from 'react-scroll'

const ArticleInformations = () => {
   const scrollToComments = () => scroller.scrollTo('comment-section', { offset: -(60 * 1.5) })

   const rateArticle = (e: React.MouseEvent, type: string) => {
      const t = e.target as HTMLElement
      
   }

   return (
      <section className='article-informations'>

         <ArticleInformationsIcon action={ (e) => rateArticle(e, 'like') } icon={ <AiOutlineLike /> } num={ 99 } />
         <ArticleInformationsIcon action={ (e) => rateArticle(e, 'dislike') } icon={ <AiOutlineDislike /> } num={ 99 } />
         <ArticleInformationsIcon action={ scrollToComments } icon={ <GoComment /> } num={ 99 } />

      </section>
   )
}

export default ArticleInformations