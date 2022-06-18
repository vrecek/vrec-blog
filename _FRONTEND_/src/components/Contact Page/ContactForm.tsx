import React from 'react'
import Button from '../REUSABLE/Button'
import InputDiv from '../LoginRegister Page/Right Section/InputDiv'
import AppendResult from '../../functions/AppendText'

const ContactForm = () => {
   const ar = new AppendResult('h3')

   const sendMessage = (e: React.FormEvent) => {
      e.preventDefault()

      const t = e.target as HTMLFormElement

      const [name, mail, text] = Array.from(t.elements as HTMLCollectionOf<HTMLInputElement>).map(x => x.value)

      if( ar.areStringsSet(name, mail, text) ) ar.setMessage = 'Message has been sent'
      else ar.setMessage = 'Please fill all fields'

      ar.appendTo(t, 3)
   }

   return (
      <form onSubmit={ sendMessage } className="contact-container">
         <h2>Send us message</h2>

         <InputDiv type='text' cname='input-div' labelText='your name' />
         <InputDiv type='text' cname='input-div' labelText='your mail' />

         <label>message</label>
         <textarea spellCheck='false'></textarea>

         <Button text='Send message' action={ () => {} } />

      </form>
   )
}

export default ContactForm