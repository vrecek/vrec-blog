import React from 'react'
import { LastUpdated } from '../../../interfaces/CardInterface'

const CardsTextParagraph = ({ category, when }: LastUpdated) => {
   return (
      <div className='paragraphs'>
         <p>Last updated: <span>{ when }</span></p>
         <p>From category: <span>{ category }</span></p>
      </div>
   )
}

export default CardsTextParagraph