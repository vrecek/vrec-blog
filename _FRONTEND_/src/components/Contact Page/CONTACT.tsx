import React from 'react'
import '../../css/Contact.css'
import DirectContact from './DirectContact'
import ContactForm from './ContactForm'
import contact from '../../images/contact.png'
import FigureImage from '../REUSABLE/FigureImage'

const CONTACT = () => {
   window.scrollTo(0, 0)

   return (
      <main className="contact-container">

         <section className='wrap'>
            <ContactForm />

            <DirectContact />
         </section>

         <FigureImage source={ contact } altTxt='contact' />

      </main>
   )
}

export default CONTACT