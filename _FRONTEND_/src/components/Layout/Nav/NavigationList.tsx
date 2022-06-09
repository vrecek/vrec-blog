import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BiLogIn } from 'react-icons/bi'
import { CgBrowse } from 'react-icons/cg'

const NavigationList = () => {
   return (
      <section className='layout-nav-list'>
         <ul>
            <li> <h5>Home</h5> <span> <AiOutlineHome /> </span> </li>
            <li> <h5>Browse</h5> <span> <CgBrowse /> </span> </li>
            <li className='line'></li>
            <li className='sign-in'> <h5>Sign_in</h5> <span> <BiLogIn /> </span> </li>
         </ul>
      </section>
   )
}

export default NavigationList