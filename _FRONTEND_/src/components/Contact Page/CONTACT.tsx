import React from 'react'
import '../../css/Contact.css'
import DirectContact from './DirectContact'
import ContactForm from './ContactForm'

const CONTACT = () => {
   window.scrollTo(0, 0)

   return (
      <main className="contact-container">

         <ContactForm />

         <DirectContact />

      </main>
   )
}

export default CONTACT