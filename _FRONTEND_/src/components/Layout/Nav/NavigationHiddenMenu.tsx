import React from 'react'
import { BiHome } from 'react-icons/bi'
import { FiUserCheck, FiUserPlus, FiPhoneCall } from 'react-icons/fi'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { MdOutlineArticle } from 'react-icons/md'
import NavigationHiddenMenuLi from './NavigationHiddenMenuLi'
import '../../../css/NavigationHiddenMenu.css'
import NavigationHiddenMenuIcons from './NavigationHiddenMenuIcons'

const NavigationHiddenMenu = ({ setReference }: { setReference: React.RefObject<HTMLDivElement> }) => {
   return (
      <section ref={ setReference } className='layout-hidden-menu'>

         <aside className='layout-hidden-menu'>
            <ul>
               <NavigationHiddenMenuLi string='Homepage' route='/' icon={ <BiHome /> } />
               <NavigationHiddenMenuLi string='Articles' route='/' icon={ <MdOutlineArticle /> } />

               <li className='separate'></li>
               
               <NavigationHiddenMenuLi string='Log in' route='/' icon={ <FiUserCheck /> } />
               <NavigationHiddenMenuLi string='Register' route='/' icon={ <FiUserPlus /> } />

               <li className='separate'></li>

               <NavigationHiddenMenuLi string='About' route='/' icon={ <HiOutlineInformationCircle /> } />
               <NavigationHiddenMenuLi string='Contact' route='/' icon={ <FiPhoneCall /> } />

               <li className='icons'>
                  <NavigationHiddenMenuIcons />
               </li>
            </ul>
         </aside>

      </section>
   )
}

export default NavigationHiddenMenu