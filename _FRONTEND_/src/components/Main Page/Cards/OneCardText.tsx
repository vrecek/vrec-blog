import React from 'react'
import { OneCardTextType } from '../../../interfaces/CardInterface'

const OneCardText = ({ smallText, bigText }: OneCardTextType) => {
   return (
      <div className='card-text'>
         <h1>{ smallText }</h1>
         <h2>{ bigText }</h2>
      </div>
   )
}

export default OneCardText