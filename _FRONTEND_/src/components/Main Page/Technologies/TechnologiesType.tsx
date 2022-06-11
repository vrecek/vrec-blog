import React from 'react'
import { TechnologiesTopicType } from '../../../interfaces/TechnologiesInterface'

const TechnologiesType = ({ icon, label }: TechnologiesTopicType) => {
   return (
      <article>
         <figure>
            { icon }
         </figure>

         <figcaption>{ label }</figcaption>
      </article>
   )
}

export default TechnologiesType