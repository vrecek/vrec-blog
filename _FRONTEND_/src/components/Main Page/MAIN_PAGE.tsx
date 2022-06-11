import React from 'react'
import Cards from './Cards/Cards'
import MainHeader from './Header/MainHeader'
import Introduction from './Introduction/Introduction'
import Technologies from './Technologies/Technologies'

const MAIN_PAGE = () => {
   return (
      <main className='main-page-container'>

         <MainHeader />
         
         <Introduction />

         <Technologies />

         <Cards />
         
      </main>
   )
}

export default MAIN_PAGE