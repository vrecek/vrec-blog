import React from 'react'

const ArticlesPagination = () => {
   return (
      <section className='pagination'>
         {
            [...Array(6)].map((x, i) => (
               <div className={ i === 0 ? 'active' : '' } key={ i }>{ i + 1 }</div>
            )) 
         }
      </section>
   )
}

export default ArticlesPagination