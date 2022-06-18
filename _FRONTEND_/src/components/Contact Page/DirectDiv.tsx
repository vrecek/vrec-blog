import React from 'react'
import { DirectContactDivType } from '../../interfaces/ContactInterface'

const DirectDiv = ({ icon, h4, additional, cname }: DirectContactDivType) => {
   return (
      <div className={ cname ?? '' }>
         <span className="icon"> { icon } </span>
         { h4 }
         {
            additional && additional
         }
      </div>
   )
}

export default DirectDiv