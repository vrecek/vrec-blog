import React from 'react'
import { AiOutlineLock, AiOutlineUnlock } from 'react-icons/ai'
import { PasswordDivType } from '../../../interfaces/LoginRegisterInterface'

const PasswordDiv = ({ labelTxt, cname, keyDown, confPassRef }: PasswordDivType) => {
   const [visibleIcon, setIcon] = React.useState<boolean>(false)

   const switchInputType = (e: React.MouseEvent) => {
      const t = e.target as HTMLHtmlElement
      const input = t.parentElement!.children[0] as HTMLInputElement

      input.classList.toggle('visible')

      const isVisible: boolean = input.classList.contains('visible')

      if(isVisible) input.type = 'text'
      else input.type = 'password'

      setIcon(c => !c)
   }

   return (
      <div className={ cname }>

         <label>{ labelTxt }</label>

         <div className='password-wrap'>
            <input ref={ confPassRef } onChange={ keyDown } type='password' />
            
            <span onClick={ switchInputType }> 
               {
                  visibleIcon 
                  ?
                     <AiOutlineUnlock /> 
                  :
                     <AiOutlineLock /> 
               }
            </span>
         </div>

      </div>
   )
}

export default PasswordDiv