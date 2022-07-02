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

   const createPasswordInput = (submitFunc: (t: HTMLFormElement) => void): HTMLElement => {
      const form = document.createElement('form')
      form.onsubmit = (e) => {
         e.preventDefault()
         
         const t = e.target as HTMLFormElement
         submitFunc(t)
      }

      const div = document.createElement('div')

      const [pass, conf] = [...Array(2)].map(x => {
         const inp = document.createElement('input')
         inp.type = 'password'

         return inp
      })
      pass.placeholder = 'New password'
      conf.placeholder = 'Confirm password'

      div.appendChild(pass)
      div.appendChild(conf)

      const btn = document.createElement('button')
      btn.textContent = 'Submit'

      form.appendChild(div)
      form.appendChild(btn)

      return form
   }
   const changePass = async (e: React.MouseEvent) => {
      const t = e.target as HTMLElement
      const parent = t.parentElement as HTMLElement

      const parentForm = Array.from(parent.children).filter(x => x.tagName === 'FORM')

      if(parentForm.length > 0) {
         parentForm[0].remove()
         return
      }

      parent.appendChild(createPasswordInput(async (t) => {
         const l = new LoadingCss('loading')
         l.append(t)
         
         const h5 = document.createElement('h5')
         h5.className = 'result'

         const inputs = Array.from(t.elements as HTMLCollectionOf<HTMLInputElement>)

         try {
            const [passVal, confVal] = inputs.map(x => x.value)

            await Fetches.mix(`${ process.env.REACT_APP_API_USER_CHANGE_PASSWORD }/${ user._id }`, 'PATCH', {
               newPass: passVal,
               confPass: confVal
            })

            h5.textContent = 'Successfully changed password'
            inputs.map(x => x.value = '')

            window.location.pathname = '/'

         }catch(err: any) {
            h5.textContent = err.json?.msg ?? 'Could not change password'
            l.remove()
            setTimeout(() => h5.remove(), 2500)

         }finally { t.appendChild(h5) }
      }))
   }

   return (
      <section className='first'>

         <LeftDivWrap title='Username' content={ user.username } />
         <LeftDivWrap title='E-mail address' content={ `user.mail@dassad.asd.comwindows` } />

         <LeftDivWrap 
            clickAction={ changePass }
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