import React from 'react'
import { DivWrapType } from '../../interfaces/ProfileInterface'

const InlineDiv = ({ title, content }: DivWrapType) => {
   return (
      <div className='inline'>
         <h6>{ title }: </h6>
         <h5>{ content }</h5>
      </div>
   )
}

export default InlineDiv