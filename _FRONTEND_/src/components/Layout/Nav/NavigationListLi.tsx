import React from 'react'
import { Link } from 'react-router-dom'
import { NavigationListLiType } from '../../../interfaces/NavigateInterface'

const NavigationListLi = ({ icon, text, url, cname }: NavigationListLiType) => {
   const classname = cname ?? ''

   return (
      <li className={ classname }> 
         <Link to={ url }> 
            <h5>{ text }</h5> 
            <span className='li-span'> { icon } </span> 
         </Link> 
      </li>
   )
}

export default NavigationListLi