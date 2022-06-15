import React from 'react'
import { ArticlePageIconType } from '../../interfaces/ArticlePageInterface'

const ArticleInformationsIcon = ({ icon, num }: ArticlePageIconType) => {
   return (
      <span className='icon-wrap'> 
         <span> { icon }</span>
         <label>{ num }</label> 
      </span>
   )
}

export default ArticleInformationsIcon