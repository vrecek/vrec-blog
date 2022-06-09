import React from 'react'
import { IconType } from '../../interfaces/ReusableTypes'

const Icon = ({ icon, cname, clickEvent }: IconType) => {
   const blankEvent = () => {}

   return (
      <div 
         onClick={ clickEvent ?? blankEvent } 
         className={ cname ?? '' }
         style={{
            cursor: 'pointer'
         }}
      >

         <span style={{
            pointerEvents: 'none',
            width: '100%',
            height: '100%'
         }}> 

            { icon } 

         </span>

      </div>
   )
}

export default Icon