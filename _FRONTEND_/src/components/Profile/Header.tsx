import React from 'react'
import { HeaderType } from '../../interfaces/ProfileInterface'

const Header = ({ children, icon }: HeaderType) => {
   return (
      <h1> 
         <span>{ icon }</span> { children }
      </h1>
   )
}

export default Header