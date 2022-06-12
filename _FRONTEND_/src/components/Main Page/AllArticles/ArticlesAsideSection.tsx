import React from 'react'
import { ArticlesAsideType } from '../../../interfaces/HomepageArticlesTypes'

const ArticlesAsideSection = ({ title, links }: ArticlesAsideType) => {
   return (
      <div>
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