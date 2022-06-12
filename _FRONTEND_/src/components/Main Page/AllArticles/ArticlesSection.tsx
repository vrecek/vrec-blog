import React from 'react'
import '../../../css/ArticlesSection.css'
import ArticlesAside from './ArticlesAside'
import OneArticle from './OneArticle'

const ArticlesSection = () => {
   return (
      <article className='article-section'>
         <ArticlesAside />

         <section className='container'>
            
            <OneArticle />
            <OneArticle />
            <OneArticle />

            <section className='pagination'>
               {
                  [...Array(6)].map((x, i) => (
                     <div className={ i === 0 ? 'active' : '' } key={ i }>{ i + 1 }</div>
                  )) 
               }
            </section>

         </section>
      </article>
   )
}

export default ArticlesSection