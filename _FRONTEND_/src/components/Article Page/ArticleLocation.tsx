import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArticleLocationType } from '../../interfaces/ArticlePageInterface'

const ArticleLocation = ({ articleTitle, articleCategory }: ArticleLocationType) => {
   const n = useNavigate()

   return (
      <div className="current-location">
         <span onClick={ () => n('/') }>Homepage &#60; </span>
         <span onClick={ () => n(`/search/c/${ articleCategory }`) }>{ articleCategory } &#60; </span>
         <span className='current'>{ articleTitle }</span>
      </div>
   )
}

export default ArticleLocation