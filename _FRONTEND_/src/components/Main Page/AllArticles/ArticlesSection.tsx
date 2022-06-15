import React from 'react'
import '../../../css/ArticlesSection.css'
import ArticlesAside from './ArticlesAside'
import ArticlesPagination from './ArticlesPagination'
import OneArticle from './Article/OneArticle'

const ArticlesSection = () => {
   return (
      <article className='article-section'>
         <ArticlesAside />

         <section className='container'>
            
            <OneArticle />
            <OneArticle />
            <OneArticle />

            <ArticlesPagination />

         </section>
      </article>
   )
}

export default ArticlesSection