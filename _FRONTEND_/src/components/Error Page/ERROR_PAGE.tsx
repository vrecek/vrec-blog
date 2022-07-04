import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../../css/ErrorPage.css'
import FigureImage from '../REUSABLE/FigureImage'
import image from '../../images/error.png'
import Button from '../REUSABLE/Button'
import CodeAndResponse from './CodeAndResponse'

const ERROR_PAGE = () => {
   const l = useLocation()
   const n = useNavigate()
   
   const state = l.state as { msg: string, code: number }

   const msg: string = state?.msg ?? 'Unkown error has occurred'
   const code: number = state?.code ?? 500
   let defaultMsg: string

   switch(code) {
      case 500: defaultMsg = 'Internal server error'; break;
      case 404: defaultMsg = 'Not found'; break;
      case 401: defaultMsg = 'Unauthorized'; break;
      case 403: defaultMsg = 'Forbidden'; break;
      case 400: defaultMsg = 'Bad request'; break;
      default: defaultMsg = 'Unkown'
   }
   
   return (
      <main className="error-container">

         <section className="main-content">
            <h3>Something went wrong...</h3>

            <h1>{ msg }</h1>

            <CodeAndResponse 
               code={ code } 
               defaultMessage={ defaultMsg } 
            />

            <p>If you're doing nothing wrong, please try again or contact us if you see this error message multiple times.</p>

            <Button action={ () => n('/', { replace: true }) } text='Back to homepage' />
         </section>

         <FigureImage source={ image } /> 

      </main>
   )
}

export default ERROR_PAGE