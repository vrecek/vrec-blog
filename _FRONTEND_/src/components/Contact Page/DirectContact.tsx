import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { FiClipboard } from 'react-icons/fi'
import DirectDiv from './DirectDiv'

const DirectContact = () => {
   const MAIL: string = 'mail200@gmail.com'

   type Accounts = 'github' | 'steam'
   const openTab = (acc: Accounts) => {
      let url: string = ''

      switch(acc) {
         case 'github': url = 'https://github.com/vrecek'
         break;
      }

      window.open(url, '_blank')
   }

   const copyToClipboard = (e: React.MouseEvent) => {
      const t = e.target as HTMLElement

      navigator.clipboard.writeText(MAIL)
      t.style.transform = 'scale(.7)'
      t.setAttribute('data-txt', 'Copied!')
      
      setTimeout(() => t.style.transform = 'scale(1)', 300)
      setTimeout(() => t.setAttribute('data-txt', 'Copy to clipboard'), 2000)
   }

   return (
      <section className='contact-direct'>
         <h2>Contact directly</h2>

         <DirectDiv
            icon={ <HiOutlineMail /> }
            h4={ <h4>EMAIL: <span>{ MAIL }</span></h4> }
            additional={ <span data-txt='Copy to clipboard' onClick={ copyToClipboard } className="icon clip"> <FiClipboard /> </span> }
         />

         <DirectDiv
            icon={ <HiOutlineMail /> }
            cname='redirect'
            h4={ <h4 className='redirect'>GITHUB: <span onClick={ () => openTab('github') }>-My account and repos-</span></h4> }
         />

      </section>
   )
}

export default DirectContact