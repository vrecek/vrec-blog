import React from 'react'
import { Link } from 'react-router-dom'
import { NavigationMenuLiType } from '../../../interfaces/NavigateInterface'

const NavigationHiddenMenuLi = ({ icon, route, string }: NavigationMenuLiType) => {
   return (
      <li>
         <Link to={ route }> 
            <span>{ icon }</span> 
            { string }
         </Link>
      </li>
   )
}

export default NavigationHiddenMenuLi