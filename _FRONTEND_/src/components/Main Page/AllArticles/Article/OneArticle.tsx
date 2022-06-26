import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArticleContainerType } from '../../../../interfaces/HomepageArticlesTypes'
import Hashtag from '../../../REUSABLE/Hashtag'
import ArticleTags from './ArticleTags'

const OneArticle = ({ text, title, tags, published, category, id }: ArticleContainerType) => {
   const n = useNavigate()

   return (
      <article className='article' onClick={ () => n(`/article/${ id }`) }>
         <section className='tags'>
            <Hashtag>{ category }</Hashtag>

            <ArticleTags tags={ tags } />
         </section>

         <h1>{ title }</h1>

         <p>{ text }</p>

         <h4>published: { published }</h4>
      </article>
   )
}

export default OneArticle