import React from 'react'
import { BiHome } from 'react-icons/bi'
import { FiUserCheck, FiUserPlus, FiPhoneCall, FiLogOut } from 'react-icons/fi'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { MdOutlineArticle, MdOutlineAdminPanelSettings } from 'react-icons/md'
import NavigationHiddenMenuLi from './NavigationHiddenMenuLi'
import '../../../css/NavigationHiddenMenu.css'
import NavigationHiddenMenuIcons from './NavigationHiddenMenuIcons'
import { HiddenMenuType } from '../../../interfaces/NavigateInterface'
import { LoadingCss } from '../../../functions/Loading'
import Fetches from '../../../functions/Fetches'

const NavigationHiddenMenu = ({ setReference, user }: HiddenMenuType) => {
   const logout = async (e: React.MouseEvent) => {
      const t = e.target as HTMLElement
      const l = new LoadingCss('loading-abs-50')

      let appendTo: HTMLElement

      if(t.tagName === 'SPAN') appendTo = t.parentElement!.parentElement!
      else appendTo = t.parentElement!

      appendTo.style.pointerEvents = 'none'
      l.append(appendTo)

      try { const d = await Fetches.mix(process.env.REACT_APP_API_USER_LOGOUT!, 'POST'); console.log(d)  }
      catch(err) { }
      finally { window.location.pathname = '/' }
   }

   return (
      <section ref={ setReference } className='layout-hidden-menu'>

         <aside className='layout-hidden-menu'>
            <ul>
               <NavigationHiddenMenuLi string='Homepage' route='/' icon={ <BiHome /> } />
               <NavigationHiddenMenuLi string='Articles' route='/' icon={ <MdOutlineArticle /> } />

               <li className='separate'></li>
               
               {
                  !user
                  ?
                     <>
                        <NavigationHiddenMenuLi string='Log in' route='/credentials/log-in' icon={ <FiUserCheck /> } />
                        <NavigationHiddenMenuLi string='Register' route='/credentials/register' icon={ <FiUserPlus /> } />
                     </>
                  :
                     <>
                        {
                           user.role === 'admin' 
                           &&
                              <NavigationHiddenMenuLi 
                                 string='Admin' 
                                 icon={ <MdOutlineAdminPanelSettings /> } 
                                 route={ process.env.REACT_APP_ADMIN_ROUTE }
                              />
                        }

                        <NavigationHiddenMenuLi 
                           string='Log out' 
                           icon={ <FiLogOut /> } 
                           logoutFunc={ logout } 
                        />
                     </>
               }

               <li className='separate'></li>

               <NavigationHiddenMenuLi string='Contact' route='/contact' icon={ <FiPhoneCall /> } />
               <NavigationHiddenMenuLi string='Terms &amp; Conditions' route='/terms-and-conditions' icon={ <HiOutlineInformationCircle /> } />

               <li className='icons'>
                  <NavigationHiddenMenuIcons />
               </li>
            </ul>
         </aside>

      </section>
   )
}

export default NavigationHiddenMenu