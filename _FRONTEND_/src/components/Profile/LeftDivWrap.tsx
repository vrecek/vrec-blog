import React from 'react'
import { DivWrapType } from '../../interfaces/ProfileInterface'
import HeaderSection from './HeaderSection'

const LeftDivWrap = ({ cname, title, content, additional, clickAction }: DivWrapType) => {
   const blank = () => {}

   return (
      <div className={ `wrap ${ cname ?? '' }` }>
         <HeaderSection>{ title }</HeaderSection>
         
         <h2 onClick={ clickAction ?? blank }>
            { content } 
            { additional && <span>{ additional }</span> }
         </h2>
      </div>
   )
}

export default LeftDivWrap