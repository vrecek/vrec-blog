import React from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { GoComment } from 'react-icons/go'
import ArticleInformationsIcon from './ArticleInformationsIcon'

const ArticleInformations = () => {
   return (
      <section className='article-informations'>

         <ArticleInformationsIcon icon={ <AiOutlineLike /> } num={ 99 } />
         <ArticleInformationsIcon icon={ <AiOutlineDislike /> } num={ 99 } />
         <ArticleInformationsIcon icon={ <GoComment /> } num={ 99 } />

      </section>
   )
}

export default ArticleInformations