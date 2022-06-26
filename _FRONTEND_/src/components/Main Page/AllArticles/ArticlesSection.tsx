import React from 'react'
import '../../../css/ArticlesSection.css'
import ArticlesAside from './ArticlesAside'
import ArticlesPagination from './ArticlesPagination'
import OneArticle from './Article/OneArticle'
import { HomepageArticleContainer } from '../../../interfaces/HomepageArticlesTypes'

const ArticlesSection = ({ articles, latest, popular }: HomepageArticleContainer) => {

   return (
      <article className='article-section'>
         <ArticlesAside popular={ popular } latest={ latest } />

         <section className='container'>
            
            {
               articles.map((x, i) => (
                  <OneArticle
                     id={ x._id }
                     category={ x.category }
                     tags={ x.tags }
                     title={ x.title }
                     text={ x.text }
                     published={ x.published.str }
                     key={ i } 
                  />
               ))
            }

            <ArticlesPagination />

         </section>
      </article>
   )
}

export default ArticlesSection