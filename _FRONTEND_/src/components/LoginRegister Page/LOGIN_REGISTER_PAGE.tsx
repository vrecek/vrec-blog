import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../../css/LoginRegister.css'
import FigureImage from '../REUSABLE/FigureImage'
import background from '../../images/logreg_image.jpg'
import RegisterSection from './Left Section/RegisterSection'
import LoginSection from './Left Section/LoginSection'
import LoginForm from './Right Section/LoginForm'
import TypeContent from './Left Section/TypeContent'
import ButtonContainer from './Left Section/ButtonContainer'
import RegisterForm from './Right Section/RegisterForm'

const LOGIN_REGISTER_PAGE = () => {
   const leftSectionRef = React.useRef<HTMLDivElement>(null)
   const leftSectionBtnRef = React.useRef<HTMLDivElement>(null)
   const formSectionRef = React.useRef<HTMLDivElement>(null)

   const location = useLocation()

   window.scrollTo(0, 0)

   const createResult = (appendTo: HTMLElement, text: string, cname: string) => {
      const h3 = document.createElement('h3')
      h3.textContent = text
      h3.className = cname

      appendTo.appendChild(h3)

      setTimeout(() => h3.remove(), 3000)
   }

   const submitRegister = (e: React.FormEvent) => {
      e.preventDefault()

      const t = e.target as HTMLFormElement

      for(let x of Array.from(t.children)) {
         if(x.classList.contains('result')) return
      }

      createResult(t, 'Fill all fields correctly', 'result true')
   }

   const submitLogin = (e: React.FormEvent) => {
      e.preventDefault()

      const t = e.target as HTMLFormElement

      for(let x of Array.from(t.children)) {
         if(x.classList.contains('result')) return
      }

      createResult(t, 'Incorrect username or password', 'result false')
   }

   React.useEffect(() => {
      const { pathname } = location
      const cRef = leftSectionRef.current!
      const fRef = formSectionRef.current!
      const cbRef = leftSectionBtnRef.current!

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

   return (
      <main className="login-register-container">

         <FigureImage source={ background } altTxt='background' cname='background' />
         
         <article className='container'>

            <section className='content left-info'>

               <TypeContent elementType='div' cname='type-content' moveRef={ leftSectionRef }>

                  <LoginSection />
                  <RegisterSection /> 

               </TypeContent>

               <ButtonContainer btnContRef={ leftSectionBtnRef } />

            </section>

            <TypeContent elementType='section' moveRef={ formSectionRef } cname='content right-inputs'>

               <LoginForm leftRef={ leftSectionRef } submitAction={ submitLogin } />
               <RegisterForm leftRef={ leftSectionRef } submitAction={ submitRegister } />

            </TypeContent>

         </article>

      </main>
   )
}

export default LOGIN_REGISTER_PAGE