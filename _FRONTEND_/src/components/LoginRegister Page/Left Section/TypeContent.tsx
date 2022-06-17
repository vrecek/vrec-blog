import React from 'react'
import { MoveElementsType } from '../../../interfaces/LoginRegisterInterface'

const TypeContent = ({ children, moveRef, cname, elementType }: MoveElementsType) => {
   if(elementType === 'div')
   return (
      <div className={ cname }>

         <div ref={ moveRef } className='move'>

            { children }

         </div>     

      </div>
   )

   else if(elementType === 'section')
   return (
      <section className={ cname }>

         <div ref={ moveRef } className='move'>

            { children }

         </div>     

      </section>
   )

   return (<></>)
}

export default TypeContent