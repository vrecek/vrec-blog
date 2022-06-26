import React from 'react'
import { SearchContainerType } from '../../interfaces/SearchPageInterface'
import OneArticle from '../Main Page/AllArticles/Article/OneArticle'
import FigureImage from '../REUSABLE/FigureImage'
import SearchDiv from './SearchDiv'
import emptyImg from '../../images/search_empty.png'

const SearchContainer = ({ articles }: SearchContainerType) => {
   const isLength = articles?.length

   const styles = {
      width: '100%'
   }

   return (
      <section style={ styles } className='container'>
         <SearchDiv searchQuery={ window.location.href.slice(window.location.href.lastIndexOf('/') + 1) } />

         {
            isLength
            ?
               articles.map((x, i) => (
                  <OneArticle 
                     key={ i }
                     title={ x.title }
                     tags={ x.tags }
                     id={ x._id }  
                     published={ x.published.str }
                     category={ x.category }
                     text={ x.text }
                  />
               ))
            :
               <>
                  <h1 className='no-articles-search'>No articles found</h1>
                  <FigureImage source={ emptyImg } altTxt='No articles' />
               </>
            
         }
      </section>
   )
}

export default SearchContainer