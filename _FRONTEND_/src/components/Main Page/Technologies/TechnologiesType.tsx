import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TechnologiesTopicType } from '../../../interfaces/TechnologiesInterface'

const TechnologiesType = ({ icon, label }: TechnologiesTopicType) => {
   const n = useNavigate()

   return (
      <article onClick={ () => n(`/search/t/${ label }`) }>
         <figure>
            { icon }
         </figure>

         <figcaption>{ label }</figcaption>
      </article>
   )
}

export default TechnologiesType