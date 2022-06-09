import React from 'react'
import { InputTextType } from '../../interfaces/ReusableTypes'

const InputText = ({ handler, blur, focus, handlerType, type, placeholder }: InputTextType) => {
   const empty = () => {}

   if(handlerType === 'onchange')
   return (
      <input 
         onBlur={ blur ?? empty }
         onFocus={ focus ?? empty } 
         onChange={ handler ?? empty }
         type={ type } 
         spellCheck='false'
         placeholder={ placeholder ?? '' } 
      />
   )

   /* ----- */

   else if(handlerType === 'onkeydown')
   return (
      <input 
         onBlur={ blur ?? empty }
         onFocus={ focus ?? empty }
         onKeyDown={ handler ?? empty }
         type={ type } 
         spellCheck='false'
         placeholder={ placeholder ?? '' } 
      />
   )

   return (<>Incorrect handler type</>)
}

export default InputText