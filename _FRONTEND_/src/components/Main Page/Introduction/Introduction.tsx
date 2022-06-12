import React from 'react'
import source from '../../../images/introduction.png'
import '../../../css/IntroductionSection.css'
import FigureImage from '../../REUSABLE/FigureImage'
import Button from '../../REUSABLE/Button'
import IntroductionText from './IntroductionText'
import IntroductionSlider from './IntroductionSlider'
import { scroller } from 'react-scroll'

const Introduction = () => {
   const scrollToArticles = () => scroller.scrollTo('article-section', { offset: -66 })

   return (
      <article className='section-introduction'>
         <div className="back"></div>
         
         <section>
            <IntroductionText />

            <IntroductionSlider />

            <Button text='Explore' action={ scrollToArticles } />
         </section>

         <FigureImage cname='draw-img' source={ source } />
      </article>
   )
}

export default Introduction