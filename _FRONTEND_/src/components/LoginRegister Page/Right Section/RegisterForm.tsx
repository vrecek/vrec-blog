import React, { ReactText } from 'react'
import { FormType } from '../../../interfaces/LoginRegisterInterface'
import InputDiv from './InputDiv'
import ReCaptcha from 'react-google-recaptcha'
import Button from '../../REUSABLE/Button'
import PasswordDiv from './PasswordDiv'

const RegisterForm = ({ submitAction, leftRef }: FormType) => {
   const formRef = React.useRef<HTMLFormElement>(null)
   const confPassRef = React.useRef<HTMLInputElement>(null)
   const [listReq, setList] = React.useState<{ el: HTMLLIElement[], vis: boolean }>({ el: [], vis: false })

   React.useEffect(() => {
      const leftSection = leftRef.current?.parentElement!.parentElement!
      if(!leftSection) return

      const isVisible: boolean = window.getComputedStyle(leftSection, null).getPropertyValue('display') !== 'none'

      const liReq = Array.from( leftRef.current.children[1].children[2].children as HTMLCollectionOf<HTMLLIElement> )

      setList({
         el: liReq,
         vis: isVisible
      })
   }, [])

   const checkUsername = (e: React.ChangeEvent) => {
      const t = e.target as HTMLInputElement

      const { value } = t
      const { el, vis } = listReq

      if(!vis || el.length < 6) return

      if(value.length >= 4 && value.length <= 12) {
         el[0].classList.add('true')
         return
      }
      el[0].classList.remove('true')
   }

   const checkMail = (e: React.ChangeEvent) => {
      const t = e.target as HTMLInputElement

      const { value } = t
      const { el, vis } = listReq

      if(!vis || el.length < 6) return

      const regex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if(regex.test(value)) {
         el[1].classList.add('true')
         return
      }
      el[1].classList.remove('true')
   }

   const checkPass = (e: React.ChangeEvent, confirm?: boolean) => {
      const t = e.target as HTMLInputElement

      const { value } = t
      const { el, vis } = listReq

      if(!vis || el.length < 6) return

      if(confirm) {
         const valuePass = confPassRef.current!.value

         if(valuePass.length >= 4 && valuePass === value) {
            el[3].classList.add('true')
            return
         }
         el[3].classList.remove('true')

         return
      }

      if(value.length >= 4) {
         el[2].classList.add('true')
         return
      }
      el[2].classList.remove('true')
   }

   const checkCheckbox = (e: React.ChangeEvent) => {
      const t = e.target as HTMLInputElement

      const { el, vis } = listReq

      if(!vis || el.length < 6) return

      if(t.checked) {
         el[4].classList.add('true')
         return
      }
      el[4].classList.remove('true')
   }

   const checkCaptcha = () => {
      const { el, vis } = listReq

      if(!vis || el.length < 6) return

      el[5].classList.add('true')
   }
   const captchaExpired = () => {
      const { vis } = listReq

      if(!vis) return
      
      listReq.el[5].classList.remove('true')
   }

   return (
      <form ref={ formRef } onSubmit={ submitAction } className="register">

         <section className="wrap">
            <h2>Register</h2>
            
            <InputDiv keyDown={ checkUsername } type='text' labelText='Username' cname='reg-inp' />

            <InputDiv keyDown={ checkMail } type='text' labelText='E-mail' cname='reg-inp' />

            <PasswordDiv confPassRef={ confPassRef } keyDown={ (e) => checkPass(e) } labelTxt='Password' cname='reg-inp' />
            <PasswordDiv keyDown={ (e) => checkPass(e, true) } labelTxt='Confirm password' cname='reg-inp' />

            <InputDiv keyDown={ checkCheckbox } type='checkbox' idFor='check-reg' labelText='Accept Terms &amp; Conditions' cname='reg-inp-check' />

            <div className="captcha">
               <ReCaptcha onExpired={ captchaExpired } onChange={ checkCaptcha } sitekey={`${ process.env.REACT_APP_CAPTCHA_CLIENT }`} />
            </div>

            <Button text='Create an account' action={ () => {} } />
         </section>

      </form>
   )
}

export default RegisterForm