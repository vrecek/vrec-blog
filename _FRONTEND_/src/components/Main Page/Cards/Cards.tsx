import React from 'react'
import '../../../css/CardsSection.css'
import '../../../css/Card.css'
import CardsText from './CardsText'
import OneCard from './OneCard'
import { HiDatabase } from 'react-icons/hi'
import { BiPaint } from 'react-icons/bi'
import { AiFillCode } from 'react-icons/ai'
import { IoNewspaperOutline } from 'react-icons/io5'
import { CategoryObject, WhenUpdated } from '../../../interfaces/HomepageArticlesTypes'

const Cards = ({ lastDetails, categoryDetails }: { lastDetails: WhenUpdated, categoryDetails: CategoryObject }) => {
   const { category, when } = lastDetails
   const { backend, frontend, programming, news } = categoryDetails
   
   const cardObj = [
      {
         icon: <HiDatabase />,
         smallText: 'NodeJS, Mongoose',
         bigText: 'Backend',
         paraText: 'Backend topics like creating server, HTTP requests or publishing' ,
         total: backend.total,
         lastUpload: backend.when
      },

      {
         icon: <BiPaint />,
         smallText: 'HTML, CSS, JS/TS',
         bigText: 'Frontend',
         paraText: 'Design problems, responsive websites and user experience',
         total: frontend.total,
         lastUpload: frontend.when
      },

      {
         icon: <AiFillCode />,
         smallText: 'Language structure',
         bigText: 'Programming',
         paraText: 'Learn language aspects, its functions and algorithms',
         total: programming.total,
         lastUpload: programming.when
      },

      {
         icon: <IoNewspaperOutline />,
         smallText: 'News not related to others',
         bigText: 'News',
         paraText: 'Read different articles from the computer world',
         total: news.total,
         lastUpload: news.when
      }
   ]

   return (
      <article className='cards-section'>
         <div className="back"></div>

         <CardsText category={ category } when={ when } />

         <div className="line"></div>

         <section className='card-container'>
            {
               cardObj.map((x, i) => (
                  <OneCard 
                     key={ i }
                     smallText={ x.smallText }
                     bigText={ x.bigText }
                     paraText={ x.paraText }
                     icon={ x.icon } 
                     total={ x.total }
                     lastUpload={ x.lastUpload }   
                  />
               ))
            }
         </section>

      </article>
   )
}

export default Cards