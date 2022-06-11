import React from 'react'
import { OneCardInfoType } from '../../../interfaces/CardInterface'

const OneCardInfo = ({ icon, cname, text }: OneCardInfoType) => {
   return (
      <div className={ cname }>
         { icon }
         <h6>{ text }</h6>
      </div>
   )
}

export default OneCardInfo