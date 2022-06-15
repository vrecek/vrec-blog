import React from 'react'
import { useNavigate } from 'react-router-dom'
import Hashtag from '../../../REUSABLE/Hashtag'
import ArticleTags from './ArticleTags'

const OneArticle = () => {
   const n = useNavigate()

   return (
      <article className='article' onClick={ () => n('/article/dummy-title') }>
         <section className='tags'>
            <Hashtag>loremipsum</Hashtag>

            <ArticleTags />
         </section>

         <h1>Lorem ipsum dolor sit amet conestaur</h1>

         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, hic reiciendis? Expedita voluptas sunt eos nemo sequi consequatur libero, mollitia perferendis modi itaque sed ducimus temporibus!</p>

         <h4>4 days ago</h4>
      </article>
   )
}

export default OneArticle