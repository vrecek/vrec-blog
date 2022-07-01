import React from 'react'
import { InputDivType } from '../../../interfaces/LoginRegisterInterface'

const InputDiv = ({ type, labelText, cname, idFor, keyDown, defValue }: InputDivType) => {
   const blank = () => {}

   return (
      <div className={ cname }>

         {
            idFor
            ?
               <>
                  <input defaultValue={ defValue ?? '' } onChange={ keyDown } id={ idFor ?? '' } type={ type } />
                  <label spellCheck='false' htmlFor={ idFor ?? 'NULL' }>{ labelText }</label>           
               </>
            :
               <>
                  <label>{ labelText }</label>
                  <input defaultValue={ defValue ?? '' } onChange={ keyDown ?? blank } spellCheck='false' type={ type } />
               </>
         }

      </div>
   )
}

export default InputDiv