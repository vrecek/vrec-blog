import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArticlesAsideType } from '../../../interfaces/HomepageArticlesTypes'

const ArticlesAsideSection = ({ title, links }: ArticlesAsideType) => {
   const n = useNavigate()
   
   return (
      <div onClick={ () => n('/article/id') }>
         <h2>{ title }</h2>
         <ul>
            {
               links.map((x, i) => (
                  <li key={ i }>{ x }</li>
               ))
            }
         </ul>
      </div>
   )
}

export default ArticlesAsideSection