import React from 'react'
import { ButtonType } from '../../interfaces/ReusableTypes'

const Button = ({ text, cname, action, additional }: ButtonType) => {
   return (
      <button onClick={ action } className={ cname ?? '' }>
         { 
            additional && 
               <span style={{ pointerEvents: 'none' }}>
                  { additional }
               </span> 
         }

         <label style={{ pointerEvents: 'none' }}>
            { text }
         </label>
      </button>
   ) 
}

export default Button