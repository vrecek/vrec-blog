import React from 'react'
import ArticlesSection from './AllArticles/ArticlesSection'
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

         <ArticlesSection />
         
      </main>
   )
}

export default MAIN_PAGE