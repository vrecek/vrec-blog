import React from 'react'
import { Link } from 'react-router-dom'
import { ArticlePageRelated } from '../../../interfaces/ArticlePageInterface'
import FigureImage from '../../REUSABLE/FigureImage'
import Hashtag from '../../REUSABLE/Hashtag'
import PostDate from '../../REUSABLE/PostDate'
import TopicTags from './TopicTags'

const RelatedTopic = ({ image, published, title, category, tags, id }: ArticlePageRelated) => {
   return (
      <article>
         <FigureImage
            source={ image }
            altTxt='article'
         />

         <section>

            <div className='info-1'>
               <Link className='title-link' to={`/article/${ id }`}>{ title }</Link>
               <PostDate>{ published }</PostDate>
            </div>

            <div className='info-2'>
               <Hashtag>{ category }</Hashtag>
               <TopicTags tags={ tags } />
            </div>

         </section>
      </article>
   )
}

export default RelatedTopic