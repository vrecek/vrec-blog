import React from 'react'
import '../../../css/MainHeader.css'
import InputText from '../../REUSABLE/InputText'
import HeaderParagraph from './HeaderParagraph'
import HeaderTitle from './HeaderTitle'
import { HiOutlineDocumentSearch } from 'react-icons/hi'
import FigureImage from '../../REUSABLE/FigureImage'
import background from '../../../images/main_header.png'

const MainHeader = () => {
   const onFocus = (e: React.FocusEvent) => {
      const t = e.target as HTMLInputElement  
      t.style.borderColor = 'rgb(26, 52, 131)'
   }
   const onBlur = (e: React.FocusEvent) => {
      const t = e.target as HTMLInputElement

      const { value } = t

      if(!value) {
         t.style.borderColor = 'rgb(96, 136, 255)'
      }
   }

   return (
      <header className='main-page-header'>

         <FigureImage source={ background } />

         <section className='main-page-header-text-section'>

            <HeaderTitle />

            <HeaderParagraph />

            <section className='search-input'>
               <span> <HiOutlineDocumentSearch /> </span>
               <InputText 
                  handlerType='onkeydown' 
                  focus={ onFocus }
                  blur={ onBlur }
                  type='text' 
                  placeholder='Search articles...' 
               />
            </section>

         </section>

      </header>
   )
}

export default MainHeader