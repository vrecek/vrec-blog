import React from 'react'
import { Link } from 'react-router-dom'
import FigureImage from '../../REUSABLE/FigureImage'
import Hashtag from '../../REUSABLE/Hashtag'
import PostDate from '../../REUSABLE/PostDate'
import TopicTags from './TopicTags'

const RelatedTopic = () => {
   return (
      <article>
         <FigureImage
            source='https://www.telepolis.pl/images/2021/05/HD-Voicen-plus--kkodek-EVS-miedzy-Orange-i-Play.jpg'
            altTxt='article'
         />

         <section>

            <div className='info-1'>
               <Link className='title-link' to='/article/id'>Lorem ipsum title topic dolor coqestur elit amet conq</Link>
               <PostDate>12.12.2022</PostDate>
            </div>

            <div className='info-2'>
               <Hashtag>Category</Hashtag>
               <TopicTags tags={ ['Lorem', 'Ipsum', 'Dolor'] } />
            </div>

         </section>
      </article>
   )
}

export default RelatedTopic