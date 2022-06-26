import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../../css/LoginRegister.css'
import FigureImage from '../REUSABLE/FigureImage'
import background from '../../images/logreg_image.jpg'
import RegisterSection from './Left Section/RegisterSection'
import LoginSection from './Left Section/LoginSection'
import LoginForm from './Right Section/LoginForm'
import TypeContent from './Left Section/TypeContent'
import ButtonContainer from './Left Section/ButtonContainer'
import RegisterForm from './Right Section/RegisterForm'
import AppendResult from '../../functions/AppendText'
import Fetches from '../../functions/Fetches'
import ReCAPTCHA from 'react-google-recaptcha'
import { LoadingCss } from '../../functions/Loading'
import { UserContext } from '../../App'

const LOGIN_REGISTER_PAGE = () => {
   window.scrollTo(0, 0)

   const location = useLocation()
   const n = useNavigate()

   const l = new LoadingCss('loading-abs')

   const USER = React.useContext(UserContext)

   const refs = {
      leftSectionRef: React.useRef<HTMLDivElement>(null),
      leftSectionBtnRef: React.useRef<HTMLDivElement>(null),
      formSectionRef: React.useRef<HTMLDivElement>(null),
      captchaRef: React.useRef<ReCAPTCHA>(null)
   }

   const [regAr, logAr] = [...Array(2)].map(x => new AppendResult('h3'))

   const submitRegister = async (e: React.FormEvent) => {
      e.preventDefault()

      const t = e.target as HTMLFormElement
      
      const elements = Array.from(t.elements as HTMLCollectionOf<HTMLInputElement>)
      const elementsValues: (string | boolean | undefined)[] = Array.from(t.elements as HTMLCollectionOf<HTMLInputElement>).map(x => {
         switch(x.type) {
            case 'password': case 'text': case 'textarea': 
               return x.value

            case 'checkbox': 
               return x.checked

            default: return undefined
         }
      }).slice(0, 6)

      try {
         l.append(t)

         const data = await Fetches.mix(process.env.REACT_APP_API_USER_REGISTER!, 'POST', elementsValues)

         regAr.setMessage = data.msg
         regAr.setElementClass = `result true`

         for(let x of elements) {
            if(x.type === 'checkbox') {
               x.checked = false
               continue
            }

            x.value = ''
         }
         
         setTimeout(() => n('/credentials/log-in', { replace: true }), 1500)

      }catch(err: any) {
         regAr.setMessage = err.msg
         regAr.setElementClass = `result false`

      }finally { 
         refs.captchaRef.current!.reset()
         regAr.appendTo(t, 3) 
         l.remove()
      }
   }

   const submitLogin = async (e: React.FormEvent) => {
      e.preventDefault()

      const t = e.target as HTMLFormElement
      const [username, password, remember] = Array.from( t.elements as HTMLCollectionOf<HTMLInputElement> ).slice(0, 3).map(x => {
         if(x.type !== 'checkbox') return x.value
         return x.checked
      })

      try {
         l.append(t)

         const data = await Fetches.mix(process.env.REACT_APP_API_USER_LOGIN!, 'POST', {
            username,
            password,
            remember
         })
         
         logAr.setElementClass = `result true`
         logAr.setMessage = data.msg

         setTimeout(() => window.location.href = '/', 500);

      }catch(err: any) {
         logAr.setElementClass = `result false`
         logAr.setMessage = err.msg

      }finally { 
         logAr.appendTo(t, 3)
         l.remove()
      }
   }

   React.useEffect(() => {
      if(USER) {
         n('/', { replace: true })
         return
      }

      const { pathname } = location
      const cRef = refs.leftSectionRef.current!
      const fRef = refs.formSectionRef.current!
      const cbRef = refs.leftSectionBtnRef.current!

      const type: string = pathname.slice(pathname.lastIndexOf('/') + 1)
      const btns: Element[] = Array.from(cbRef.children)

      if(btns.length > 2) return

      for(let x of btns) x.className = ''

      if(type === 'register') {      
         cRef.style.transform = 'translateX(-100%)'
         fRef.style.transform = 'translateX(-100%)'
         btns[1].className = 'active'
      }
      else if(type === 'log-in') {
         cRef.style.transform = 'translateX(0)'
         fRef.style.transform = 'translateX(0)'
         btns[0].className = 'active'
      }
      else return //err page

   }, [location])

   if(!USER)
   return (
      <main className="login-register-container">

         <FigureImage source={ background } altTxt='background' cname='background' />
         
         <article className='container'>

            <section className='content left-info'>

               <TypeContent elementType='div' cname='type-content' moveRef={ refs.leftSectionRef }>

                  <LoginSection />
                  <RegisterSection /> 

               </TypeContent>

               <ButtonContainer btnContRef={ refs.leftSectionBtnRef } />

            </section>

            <TypeContent elementType='section' moveRef={ refs.formSectionRef } cname='content right-inputs'>

               <LoginForm leftRef={ refs.leftSectionRef } submitAction={ submitLogin } />
               <RegisterForm captchaRef={ refs.captchaRef } leftRef={ refs.leftSectionRef } submitAction={ submitRegister } />

            </TypeContent>

         </article>

      </main>
   )

   return (<></>)
}

export default LOGIN_REGISTER_PAGE