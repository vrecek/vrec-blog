import React from 'react'
import { FigureType } from '../../interfaces/ReusableTypes'

const FigureImage = ({ cname, source, altTxt }: FigureType) => {
   return (
      <figure className={ cname ?? '' }>
         <img loading='lazy' src={ source } alt={ altTxt ?? 'image' } />
      </figure>
   )
}

export default FigureImage