import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BiLogIn } from 'react-icons/bi'
import { FiUserPlus } from 'react-icons/fi'
import NavigationListLi from './NavigationListLi'

const NavigationList = () => {
   return (
      <section className='layout-nav-list'>
         <ul>
            <NavigationListLi text='Home' url='/' icon={ <AiOutlineHome /> } />

            <li className='line'></li>

            <NavigationListLi cname='register' text='Register' url='/' icon={ <FiUserPlus /> } />
            <NavigationListLi cname='sign-in' text='Log_in' url='/' icon={ <BiLogIn /> } />
         </ul>
      </section>
   )
}

export default NavigationList