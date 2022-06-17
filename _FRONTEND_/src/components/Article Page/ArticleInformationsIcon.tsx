import React from 'react'
import { ArticlePageIconType } from '../../interfaces/ArticlePageInterface'

const ArticleInformationsIcon = ({ icon, num, action }: ArticlePageIconType) => {
   return (
      <span onClick={ action } className='icon-wrap'> 
         <span> { icon }</span>
         <label>{ num }</label> 
      </span>
   )
}

export default ArticleInformationsIcon