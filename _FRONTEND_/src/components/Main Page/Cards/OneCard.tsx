import React from 'react'
import { AiOutlineNumber } from 'react-icons/ai'
import { MdUpdate } from 'react-icons/md'
import { CardType } from '../../../interfaces/CardInterface'
import Button from '../../REUSABLE/Button'
import OneCardInfo from './OneCardInfo'
import OneCardText from './OneCardText'

const OneCard = ({ icon, smallText, bigText, paraText, total, lastUpload }: CardType) => {
   return (
      <article className="card">
         
         <span> { icon } </span>

         <OneCardText smallText={ smallText } bigText={ bigText } />

         <p>{ paraText }</p>

         <Button text='Browse' action={ () => {} } />

         <section>

            <OneCardInfo
               cname='total'
               icon={ <AiOutlineNumber /> }
               text={ total }
            />
            
            <OneCardInfo
               cname='date'
               icon={ <MdUpdate /> }
               text={ lastUpload }
            />      

         </section>

      </article>
   )
}

export default OneCard