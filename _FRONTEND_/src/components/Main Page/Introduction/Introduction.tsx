import React from 'react'
import source from '../../../images/introduction.png'
import '../../../css/IntroductionSection.css'
import FigureImage from '../../REUSABLE/FigureImage'
import Button from '../../REUSABLE/Button'
import IntroductionText from './IntroductionText'
import IntroductionSlider from './IntroductionSlider'

const Introduction = () => {
   return (
      <article className='section-introduction'>
         <section>
            <IntroductionText />

            <IntroductionSlider />

            <Button text='Explore' action={ () => {} } />
         </section>

         <FigureImage cname='draw-img' source={ source } />
      </article>
   )
}

export default Introduction