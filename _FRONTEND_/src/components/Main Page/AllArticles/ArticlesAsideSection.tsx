import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArticlesAsideType } from '../../../interfaces/HomepageArticlesTypes'

const ArticlesAsideSection = ({ title, links }: ArticlesAsideType) => {
   const n = useNavigate()

   return (
      <div>
         <h2>{ title }</h2>
         <ul>
            {
               links?.length
               ?
                  links.map((x, i) => (
                     <li onClick={ () => n(`/article/${ x._id }`) } key={ i }>{ x.shortTitle }</li>
                  ))
               :
                  <h1>No related articles found</h1>
            }
         </ul>
      </div>
   )
}

export default ArticlesAsideSection