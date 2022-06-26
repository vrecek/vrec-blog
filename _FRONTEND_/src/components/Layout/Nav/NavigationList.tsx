import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BiLogIn, BiUserCircle } from 'react-icons/bi'
import { FiUserPlus } from 'react-icons/fi'
import { NavUserType } from '../../../interfaces/NavigateInterface'
import UserType from '../../../interfaces/UserType'
import NavigationListLi from './NavigationListLi'

const NavigationList = ({ user }: NavUserType) => {
   return (
      <section className='layout-nav-list'>
         <ul>
            <NavigationListLi text='Home' url='/' icon={ <AiOutlineHome /> } />

            <li className='line'></li>

            {
               !user
               ?
                  <>
                     <NavigationListLi cname='register' text='Register' url='/credentials/register' icon={ <FiUserPlus /> } />
                     <NavigationListLi cname='log-in' text='Log_in' url='/credentials/log-in' icon={ <BiLogIn /> } />
                  </>
               :
                  <>
                     <NavigationListLi cname='' text='Profile' url='/profile' icon={ <BiUserCircle /> } />
                     <li className='logged-as'> Logged as: <span>{ user.username }</span> </li>
                  </>
            }
         </ul>
      </section>
   )
}

export default NavigationList