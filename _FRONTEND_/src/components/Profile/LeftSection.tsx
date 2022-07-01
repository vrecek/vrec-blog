import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import Fetches from '../../functions/Fetches'
import { LoadingCss } from '../../functions/Loading'
import { User } from '../../interfaces/ProfileInterface'
import LeftDivWrap from './LeftDivWrap'
import RoundedText from './RoundedText'

const LeftSection = ({ user }: User) => {
   const appendH5 = (target: HTMLElement, msg: string, cname: string) => {
      const ele = document.createElement('h5')
      ele.className = cname
      ele.textContent = msg

      target.appendChild(ele)

      setTimeout(() => ele?.remove(), 3000)
   }

   const deleteAccount = async (e: React.MouseEvent) => {
      const t = e.target as HTMLElement
      
      const hasMessage: boolean = Array.from(t.children).some(x => x.tagName === 'H5')
      
      if(!hasMessage) {
         appendH5(t, 'Are you sure? Click again to confirm', 'delete-info')

         return
      }
      
      const l = new LoadingCss('loading')
      l.append(t)

      t.style.pointerEvents = 'none'

      try {
         await Fetches.mix(`${ process.env.REACT_APP_API_USER_DELETE }/${ user?._id }`, 'DELETE')
         window.location.pathname = '/'

      }catch(err: any) {
         t.style.pointerEvents = 'all'

         for(let x of Array.from(t.children)) x.remove()

         appendH5(t, err?.json?.msg ?? 'Could not delete', 'delete-info')
      }
   }

   return (
      <section className='first'>

         <LeftDivWrap title='Username' content={ user.username } />
         <LeftDivWrap title='E-mail address' content={ `user.mail@dassad.asd.comwindows` } />

         <LeftDivWrap 
            cname='pass'
            title='Password' 
            content='Change password' 
            additional={ <AiOutlineEdit /> } 
         />

         <RoundedText click={ deleteAccount } cname='delete'>Delete account</RoundedText>

      </section>
   )
}

export default LeftSection