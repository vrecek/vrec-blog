import React from 'react'
import { Link } from 'react-router-dom'
import { FooterListType } from '../../../interfaces/FooterInterface'

const FooterList = ({ header, lists }: FooterListType) => {
   return (
      <ul>
         <li className='li-header'>{ header }</li>
         {
            lists.map((x, i) => (
               <li key={ i } className='li-link'> <Link to={ x.url }>{ x.text }</Link> </li>
            ))
         }
      </ul>
   )
}

export default FooterList