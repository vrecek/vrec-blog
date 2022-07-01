import React from 'react'
import { DivWrapType } from '../../interfaces/ProfileInterface'
import HeaderSection from './HeaderSection'

const LeftDivWrap = ({ cname, title, content, additional }: DivWrapType) => {
   return (
      <div className={ `wrap ${ cname ?? '' }` }>
         <HeaderSection>{ title }</HeaderSection>
         
         <h2>
            { content } 
            { additional && <span>{ additional }</span> }
         </h2>
      </div>
   )
}

export default LeftDivWrap