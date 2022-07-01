import React from 'react'
import { BiCookie } from 'react-icons/bi'
import '../../../css/CookieReminder.css'
import Button from '../../REUSABLE/Button'
import Cookies from 'universal-cookie'

const CookieReminder = () => {
   const acceptCookies = (e: React.MouseEvent) => {
      const t = e.target as HTMLElement

      const box = t.parentElement as HTMLElement

      box.style.transform = 'translateX(-50%) translateY(100%)'
      const YEAR: number = Date.now() + (1000 * 60 * 60 * 24 * 365)
      const date = new Date(YEAR)

      const cookies = new Cookies()
      cookies.set('accept', true, {
         path: '/',
         expires: date
      })

      setTimeout(() => box.remove(), 500)
   }

   return (
      <section className="cookie-reminder">
         <h1>We are using cookies <span><BiCookie /></span></h1>
         <p>Site uses only necessary cookies required this site to function, like traffic measurement. We're not sending personal data to third companies</p>
         <Button text='Accept' action={ acceptCookies } />
      </section>
   )
}

export default CookieReminder