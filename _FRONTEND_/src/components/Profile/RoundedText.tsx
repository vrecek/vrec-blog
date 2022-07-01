import React from 'react'
import { RoundedTextType } from '../../interfaces/ProfileInterface'

const RoundedText = ({ children, cname, click }: RoundedTextType) => {
  const blank = ()=>{}

  return (
    <h3 onClick={ click ?? blank } className={ `info ${ cname ?? '' }` }>
      { children }
    </h3>
  )
}

export default RoundedText