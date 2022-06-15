import React from 'react'
import { IoMdArrowDropup } from 'react-icons/io'

const ArrowTop = () => {
   const arrowRef = React.useRef<HTMLDivElement>(null)

   React.useEffect(() => {
      let isVisible: boolean = false

      window.addEventListener('scroll', () => {
         if(window.scrollY > 500 && !isVisible) { 
            arrowRef.current!.style.opacity = '1'
            isVisible = true
         }
         else if(window.scrollY < 500 && isVisible) {
            arrowRef.current!.style.opacity = '0'
            isVisible = false
         }
      })
   }, [])

   return (
      <div ref={ arrowRef } onClick={ () => window.scrollTo(0, 0) } className='layout-arrow-scroll'>
         <IoMdArrowDropup />
      </div> 
   )
}

export default ArrowTop