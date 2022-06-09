import React from 'react'
import MainHeader from './Header/MainHeader'
import Introduction from './Introduction/Introduction'

const MAIN_PAGE = () => {
   return (
      <main className='main-page-container'>

         <MainHeader />
         
         <Introduction />
         
      </main>
   )
}

export default MAIN_PAGE