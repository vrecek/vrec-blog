import React from 'react'
import { ArticlePageIconType } from '../../interfaces/ArticlePageInterface'

const ArticleInformationsIcon = ({ icon, num, action, addActive }: ArticlePageIconType) => {
   const cname: string = addActive ? 'active' : ''
   
   return (
      <span onClick={ action } className={`icon-wrap ${ cname }`}> 
         <span> { icon }</span>
         <label>{ num }</label> 
      </span>
   )
}

export default ArticleInformationsIcon