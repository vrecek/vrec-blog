import React from 'react'
import '../../../css/CardsSection.css'
import '../../../css/Card.css'
import CardsText from './CardsText'
import OneCard from './OneCard'
import { HiDatabase } from 'react-icons/hi'
import { BiPaint } from 'react-icons/bi'
import { AiFillCode } from 'react-icons/ai'
import { IoNewspaperOutline } from 'react-icons/io5'

const Cards = () => {
   const cardObj = [
      {
         icon: <HiDatabase />,
         smallText: 'NodeJS, Mongoose',
         bigText: 'Backend',
         paraText: 'Backend topics like creating server, HTTP requests or publishing' ,
         total: 34,
         lastUpload: 'Never'
      },

      {
         icon: <BiPaint />,
         smallText: 'HTML, CSS, JS/TS',
         bigText: 'Frontend',
         paraText: 'Design problems, responsive websites and user experience',
         total: 55,
         lastUpload: 'Never'
      },

      {
         icon: <AiFillCode />,
         smallText: 'Language structure',
         bigText: 'Programming',
         paraText: 'Learn language aspects, its functions and algorithms',
         total: 21,
         lastUpload: 'Never'
      },

      {
         icon: <IoNewspaperOutline />,
         smallText: 'News not related to others',
         bigText: 'News',
         paraText: 'Read different articles from the computer world',
         total: 2,
         lastUpload: 'Never'
      }
   ]

   return (
      <article className='cards-section'>
         <div className="back"></div>

         <CardsText />

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