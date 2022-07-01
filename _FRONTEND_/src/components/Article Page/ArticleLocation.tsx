import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArticleLocationType } from '../../interfaces/ArticlePageInterface'
import PostDate from '../REUSABLE/PostDate'

const ArticleLocation = ({ articleTitle, articleCategory, views }: ArticleLocationType) => {
   const n = useNavigate()

   return (
      <div className="current-location">
         <div>
            <span onClick={ () => n('/') }>Homepage &#60; </span>
            <span onClick={ () => n(`/search/c/${ articleCategory }`) }>{ articleCategory } &#60; </span>
            <span className='current'>{ articleTitle }</span>
         </div>

         <PostDate preText='Views'>{ views.toString() }</PostDate>
      </div>
   )
}

export default ArticleLocation