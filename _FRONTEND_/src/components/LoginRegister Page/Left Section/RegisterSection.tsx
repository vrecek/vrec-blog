import React from 'react'
import { MdOutlineNavigateNext } from 'react-icons/md'

const RegisterSection = () => {
   return (
      <section className="left-content register">
         <h1>Join today!</h1>
         <p>You will get the option to rate and comment articles and thus you will help this website to grow up.</p>

         <ul>
            <li> <MdOutlineNavigateNext /> 4-12 nickname characters</li>  
            <li> <MdOutlineNavigateNext /> correct e-mail address</li>
            <li> <MdOutlineNavigateNext /> 4+ password charactrs</li>
            <li> <MdOutlineNavigateNext /> confirm password</li>
            <li> <MdOutlineNavigateNext /> confirm T&amp;C</li>
            <li> <MdOutlineNavigateNext /> complete Captcha</li>
         </ul>
      </section>
   )
}

export default RegisterSection