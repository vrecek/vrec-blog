import React from 'react'
import { InputTextType } from '../../interfaces/ReusableTypes'

const InputText = ({ handler, blur, focus, handlerType, type, placeholder, defaultVal }: InputTextType) => {
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
         defaultValue={ defaultVal ?? '' }
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
         defaultValue={ defaultVal ?? '' }
      />
   )

   return (<>Incorrect handler type</>)
}

export default InputText