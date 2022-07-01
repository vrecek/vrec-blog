import React from 'react'
import Button from '../REUSABLE/Button'
import InputDiv from '../LoginRegister Page/Right Section/InputDiv'
import AppendResult from '../../functions/AppendText'
import Fetches from '../../functions/Fetches'
import { LoadingCss } from '../../functions/Loading'
import { UserContext } from '../../App'

const ContactForm = () => {
   const user = React.useContext(UserContext)
   const ar = new AppendResult('h3')
   const l = new LoadingCss('loading-abs')

   const sendMessage = async (e: React.FormEvent) => {
      e.preventDefault()

      const t = e.target as HTMLFormElement

      const elements: HTMLInputElement[] = Array.from(t.elements as HTMLCollectionOf<HTMLInputElement>)
      const [name, mail, text] = elements.map(x => x.value)

      l.append(t)

      try {
         await Fetches.mix(process.env.REACT_APP_API_MAILER_POST_MESSAGE!, 'POST', {
            name: user?.username ?? name,
            mail,
            text,
            isRegistered: !!user
         })

         ar.setMessage = 'Message has been sent'

         for(let x of elements) x.value = ''

      }catch(err: any) {
         ar.setMessage = err.json.msg

      }finally {
         l.remove()
         ar.appendTo(t, 3)
      }
   }

   return (
      <form onSubmit={ sendMessage } className="contact-container">
         <h2>Send us message</h2>

         <InputDiv defValue={ user?.username } type='text' cname='input-div' labelText='your name' />
         <InputDiv type='text' cname='input-div' labelText='your mail' />

         <label>message</label>
         <textarea spellCheck='false'></textarea>

         <Button text='Send message' action={ () => {} } />

      </form>
   )
}

export default ContactForm