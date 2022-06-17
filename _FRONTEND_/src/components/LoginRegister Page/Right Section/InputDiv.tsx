import React from 'react'
import { InputDivType } from '../../../interfaces/LoginRegisterInterface'

const InputDiv = ({ type, labelText, cname, idFor, keyDown }: InputDivType) => {
   const blank = () => {}

   return (
      <div className={ cname }>

         {
            idFor
            ?
               <>
                  <input onChange={ keyDown } id={ idFor ?? '' } type={ type } />
                  <label spellCheck='false' htmlFor={ idFor ?? 'NULL' }>{ labelText }</label>           
               </>
            :
               <>
                  <label>{ labelText }</label>
                  <input onChange={ keyDown ?? blank } spellCheck='false' type={ type } />
               </>
         }

      </div>
   )
}

export default InputDiv